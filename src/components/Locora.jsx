import React from 'react'
import CaseHeader from './CaseHeader'

const Pollapp = () => {
    window.scrollTo(0, 0)
    return (
         <div className="kursor case-study">
              <CaseHeader />
            <div className="project-hero">
                <h1>locora</h1>
                <p>React, Redux, Firebase, UI/UX design</p>
                <p>Designing and building a community social polling app.</p>
                <p>A Backstage Studio project</p>
            </div>

            <div className="project-body">
                <h1>The project</h1>
                <p>Ever wanted to ask everyone in your city a question at once?</p>
                <p>Locora is an app that lets someone ask a local-specific, time
                     sensitive question to people in their community. I came up with the
                    idea when, during the aftermath of a Florida hurricane when resources
                    were scarce, I needed to know certain things, such as where could I
                    find water or gasoline. Things that I knew other people in my local
                    area would either need to know, or know the answer to.
                </p>
                <p>I wished for an app that would let me ask everyone in my local area the
                    local-specific, time sensitive questions I wanted answered. When I
                    started at Backstage, they gave me the opportunity to build it. </p>

                <h1>The team</h1>
                <ul>
                    <li><b>Keziyah Lewis</b>: UI/UX design, UX research, full stack web development</li>
                    <li><b>Faye Hayes</b>: Full stack development, UX research, product management</li>
                </ul>

                <h1>Discovery</h1>
                <p>We used the Lean UX method to do research about what our users’ needs might
                    be, and what features our product should have. Here are a few examples from our process. </p>
                <h4>Assumptions</h4>
                <ul>
                    <li>We assume that users live in a local community with shared geography and interests, 
                        such as members of a college campus community. </li>
                    <li>We assume that users have the need to tap into the collective knowledge of their local
                        community, or to ask local-specific, time sensitive questions to others in their community.
                        For example, where’s the best place to park & tailgate for today’s game? </li>
                    <li>We assume that the most important features would be to have location based polls & answers,
                        and for answers to update in real time.</li>
                </ul>
                <h4>Features</h4>
                <ul>
                    <li>Each question/poll should be tagged with a category, so that for example, a user could easily search through
                        polls to find information about what she should do this weekend.</li>
                    <li>Poll results should update in real time, so that when a user posts a time sensitive poll,
                         they can see answers as they come in. </li>
                </ul>

                <h1>Prototypes and testing</h1>
                <p>Using our assumptions, I designed <a href="https://invis.io/HSQX6N4BXJ8" target="_blank" rel="noopener noreferrer">this prototype</a> (in Sketch) that would be used
                    in our first round of user interviews. </p>
                <div className="invision-embed">
                    <iframe src="//invis.io/YEQX6NGF6AK" frameBorder="0" title="locoraembed1" allowFullScreen></iframe>
                </div>

                <div style={{width: '300px', margin: '0 auto'}}>
                    <div className="project-body__image" style={{height: '400px', width: '215px', marginBottom: '40px'}}>
                            <img src="jessprofile.png" alt="sketch ui of locora before user interviews"/>
                    </div>

                    <div className="project-body__image" style={{height: '400px', width: '215px', marginBottom: '40px'}}>
                            <img src="locoraoldfeed.png" alt="sketch ui of locora"/>
                    </div>
                </div>

                <p>
                    User interviews were 30-45 minute long live calls, in which users played with the prototype
                    and gave me their feedback. After about 8 interviews, I made a few changes and decided to go
                    in a slightly different direction with the visual design. 
                    You can view the <a href="https://invis.io/PAQX6VTEBJU" target="_blank" rel="noopener noreferrer">2nd prototype here</a>. 
                </p>

                <div className="invision-embed">
                    <iframe src="//invis.io/NUQX6VU39QC" frameBorder="0" title="locoraembed2" allowFullScreen></iframe>
                </div>
                
                <div style={{width: '300px', margin: '0 auto'}}>
                    <div className="project-body__image" style={{height: '400px', width: '215px', marginBottom: '40px'}}>
                            <img src="pingpoll1.png" alt="sketch ui of pingpoll"/>
                    </div>


                    <div className="project-body__image" style={{height: '400px', width: '215px', marginBottom: '40px'}}>
                            <img src="pingpoll2.png" alt="sketch ui of pingpoll"/>
                    </div>


                    <div className="project-body__image" style={{height: '400px', width: '215px', marginBottom: '40px'}}>
                            <img src="pingpoll3.png" alt="sketch ui of pingpoll"/>
                    </div>
                </div>

                <h1>Development</h1>
                <p>The app was developed using React, Redux, and Firebase (Firestore database and authentication).
                    You can view a demo on desktop or mobile <a href="https://pingpoll-a5ce8.firebaseapp.com/" target="_blank" rel="noopener noreferrer">here</a>. 
                </p>

                <p>Features include:</p>
                <ul>
                    <li>Google auth sign in</li>
                    <li>Users can create polls, or vote on other users' polls</li>
                    <li>User can upvote polls, and view their list of upvotes polls</li>
                    <li>Notifications when someone votes on a user's poll</li>
                    <li>UI for upvote count, view count, and poll results update in real time</li>
                </ul>

                <p>Features we were working on</p>
                <ul>
                    <li>Trending topics</li>
                    <li>Only showing users polls that were in their local area </li>
                </ul>

                <div style={{width: '300px', margin: '0 auto'}}>
                    <div className="project-body__image" style={{height: '500px', width: '270px', marginBottom: '40px'}}>
                        <img src="locora.gif" alt="gif of screen recording of locora app"/>
                    </div>
                </div>

                <h1>Lessons learned</h1>
                <p>Though this project was not fully completed, I definitely learned a lot about designing and building a product from scratch.
                    A couple of the most important lessons learned are: 
                </p>
                <ul>
                    <li>The the more minimal the prototype, the better. Spending a lot of time on these prototypes (both InVision and coded prototypes) meant that we couldn’t do as many rounds of user interviews as we wanted. </li>
                    <li>Pick a target audience and stick with it (at least for a while). It was really tempting in the beginning to think of this app as something that could be used by everyone.
                         But it would have been better to choose a specific target audience and go from there. </li>
                </ul>
                

                <p>&nbsp;</p>
            </div>

            <footer> &copy; Keziyah Lewis 2019.</footer>
        </div>
    )
}

export default Pollapp