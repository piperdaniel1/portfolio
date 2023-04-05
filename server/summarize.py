from youtube_transcript_api import YouTubeTranscriptApi
import sys
from bs4 import BeautifulSoup as bs4
from urllib.request import urlopen, Request
import openai
import tiktoken
import json

with open(".ai-token", "r") as f:
    openai.api_key = f.read().strip()

def transcript_to_string(transcript):
    return " ".join([t['text'] for t in transcript])

def get_vid_details(vid_link):
    url_opener = urlopen(Request(vid_link, headers={'User-Agent': 'Mozilla/5.0'}))

    soup = bs4(url_opener, "html.parser")
    video_title = soup.title.get_text()

    # <link content="Linus Tech Tips" itemprop="name"/>
    channel_title = soup.find("link", itemprop="name")
    channel_title = channel_title["content"]

    return video_title, channel_title

def main():
    assert(len(sys.argv) == 2)

    id = sys.argv[1]
    link = "https://www.youtube.com/watch?v=" + id

    transcipt = YouTubeTranscriptApi.get_transcript(id, languages=['en'])
    title, channel = get_vid_details(link)

    str_transcript = transcript_to_string(transcipt)

    with open("summarize_prompt.txt", "r") as f:
        prompt = f.read()
        prompt = prompt.replace("{{channel_name}}", channel)
        prompt = prompt.replace("{{video_title}}", title)

    ai_full_text = str_transcript + "\n\n" + prompt

    encoding = tiktoken.encoding_for_model("gpt-3.5-turbo")
    text_len = len(encoding.encode(ai_full_text))

    # max is 4097 for gpt-3.5-turbo
    num_trimmed = 0
    if text_len > 4097:
        print("Sorry, the transcript is too long for GPT-3.5 Turbo. Exiting...", file=sys.stderr)
        exit(0)

    if num_trimmed > 0:
        print("Trimmed " + str(num_trimmed) + " characters from " + str(len(str_transcript) + num_trimmed) + " char transcript to fit within 4097 character limit.")

    messages = [
        {"role": "user", "content": ai_full_text},
    ]

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages,
        temperature=0.5,
        n=1,
    )

    res = {
        "summary": response.choices[0].message["content"],
        "title": title,
        "channel": channel,
    }

    json.dump(res, sys.stdout, indent=4, separators=(',', ': '), ensure_ascii=False)

if __name__ == "__main__":
    main()