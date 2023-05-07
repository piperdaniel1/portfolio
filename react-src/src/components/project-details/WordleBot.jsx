import TechBubble from '../TechBubble';
import './WordleBot.css';

export default function WordleBot() {
    return (
        <div className='outer-project-wrapper'>
            <div className='project-header-wrapper'>
                <h1 className='section-header-text'>Friends Of Wordle - Wordle Social Network</h1>
                <TechBubble lang='javascript' />
                <TechBubble lang='react' />
                <TechBubble lang='firebase' />
                <TechBubble lang='Stripe' />
                <TechBubble lang='Go' />
            </div>

            <div className='body-text-wrapper'>
                <span className='inner-experience-text'>
                    Friends of Wordle is a Wordle community platform that enhances the Wordle experience with social and analytical features.
                    The platform allows users to sync their Wordle stats to their accounts, making them accessible from any device. The community
                    aspect lets users follow others, view daily Wordle scores, and share their own without revealing spoilers. This works a lot
                    better than the alternate system of posting screenshots on Twitter or Facebook. The full feature set of the site can be accessed
                    after users create an account and pay a one-time fee or activate a free two-week trial. The platform is ad-free and the entry fee
                    helps cover the Firebase website hosting costs.
                </span>

                <br />

                <span className='inner-experience-text'>
                    The site is build using React and Firebase. The backend is predominantly handled with Firebase, with the exception of a few endpoints
                    that are handled by a Go webserver that is hosted on Azure. The backend was seperated out like this to make the project more cost effective
                    as the Firebase system of serverless cloud functions can get expensive quickly. The other slightly tricky part of the site was getting
                    the current solution to the Wordle. At first, this was done by looking at the source code of the Wordle game. Now, New York Times has
                    an official API that can be used to get the current solution. The site also uses Stripe for payment processing and the Stripe API to
                    manage paymentrs to the site.
                </span>

                <br />

                <span className='inner-experience-text'>
                    One of the main features of the site is the advanced guess analysis system. Users can see how many words were remaining after each guess, 
                    along with other insights like how well their guess stacked up to other guesses they could have made at that point. 
                    This analysis, and the site in general, is currently in beta, with plans to expand features and improve the overall experience in future updates. </span>
            </div>
        </div>
    )
}
