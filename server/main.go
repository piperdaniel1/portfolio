package main

import (
	"encoding/json"
	"io/ioutil"
	"net"
	"net/http"
	"os/exec"
	"strings"
	"time"
	"fmt"
)

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)
		w.Write([]byte("v1 of piperdaniel1 portfolio API"))
	})

	type QueryFen struct {
		Fen  string // FEN string from board
		Time int32  // Time in ms that the computer should think for
	}
	http.HandleFunc("/query/fen", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)
		
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		// Read request body
		body, err := ioutil.ReadAll(r.Body)

		if err != nil {
			panic(err)
		}

		println("Request body: " + string(body))

		// Parse body into JSON
		var query QueryFen
		err = json.Unmarshal(body, &query)
		if err != nil {
			w.WriteHeader(400)
			w.Write([]byte("Invalid JSON format"))
			println("400 ERR Invalid JSON format: " + string(err.Error()))
			return
		}

		print("/query/fen from " + r.RemoteAddr + " -> ")
		println("FEN: " + query.Fen + " | Time: " + fmt.Sprintf("%d", query.Time) + "ms")

		// Dial port 4321 and get response
		conn, err := net.Dial("tcp", "localhost:4321")
		if err != nil {
			// set error response
			w.WriteHeader(500)
			w.Write([]byte("Unable to establish connection to engine."))
			println("500 ERR Unable connect to engine 01")
			return
		}

		// Send a "init w {fen}" to the engine
		_, err = conn.Write([]byte("init w fen " + query.Fen))
		if err != nil {
			// set error response
			w.WriteHeader(500)
			w.Write([]byte("Unable to establish connection to engine."))
			println("500 ERR Unable connect to engine 02")
			return
		}

		// Read the response
		buf := make([]byte, 1024)
		_, err = conn.Read(buf)
		if err != nil {
			w.WriteHeader(500)
			w.Write([]byte("Unable to establish connection to engine."))
			println("500 ERR Unable connect to engine 03")
			return
		}

		// Make sure the response is "200 ok" in buf
		if string(buf[:6]) != "200 ok" {
			w.WriteHeader(500)
			w.Write([]byte("Internal engine error."))
			println("500 ERR Unable connect to engine 04")
			return
		}

		// refresh the connection
		conn.Close()

		// Redial port 4321 and get response
		conn, err = net.Dial("tcp", "localhost:4321")
		if err != nil {
			w.WriteHeader(500)
			w.Write([]byte("Unable to establish connection to engine."))
			println("500 ERR Unable connect to engine 05")
			return
		}

		// Send a "query {time in seconds}" to the engine
		_, err = conn.Write([]byte("query " + string(query.Time/1000)))
		if err != nil {
			w.WriteHeader(500)
			w.Write([]byte("Unable to establish connection to engine."))
			println("500 ERR Unable connect to engine 06")
			return
		}

		// Read the response (make sure to wait for a bit)
		conn.SetDeadline(time.Now().Add(5 * time.Second))
		n, err := conn.Read(buf)
		if err != nil {
			w.WriteHeader(500)
			w.Write([]byte("Unable to establish connection to engine."))
			println("500 ERR Unable connect to engine 07")
			return
		}

		// Send response back
		w.Write(buf[:n])
		w.WriteHeader(200)

		println("200 OK (" + string(buf[:n]) + ")")
	})

	http.HandleFunc("/tools/summarize/", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)
		id := strings.TrimPrefix(r.URL.Path, "/tools/summarize/")

		// Run the Python script and capture the output
		cmd := exec.Command(".env/bin/python", "summarize.py", id)
		output, err := cmd.Output()
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Error running the Python script: " + err.Error()))
			return
		}

		// Parse the JSON object from the output
		var result map[string]interface{}
		err = json.Unmarshal(output, &result)
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			w.Write([]byte("Error parsing JSON from the Python script"))
			return
		}

		// Send the JSON object as the response
		response, err := json.Marshal(result)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Error creating JSON response"))
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(response)
	})

	println("Server is running: http://localhost:8080")

	http.ListenAndServe(":8080", nil)
}