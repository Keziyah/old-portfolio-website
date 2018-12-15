import React from 'react'
import {Link} from 'react-router-dom'
// import ScrollAnimation from 'react-animate-on-scroll'

const Projects = () => {
    return (
        <div className="section projects" >
            <div className="section-title">
                <h3>Featured Projects</h3>
            </div>

            <div className="quote">
                {/* <ScrollAnimation animateIn="pulse" initiallyVisible={true}> */}
                    <h1>
                        I didn't become a morning <br/>
                        person until I started doing <br/>
                        what I loved.
                    </h1>
                {/* </ScrollAnimation> */}
            </div>

            <div id="projects" className="quote-name">
                <h3>- Issa Rae</h3>
            </div>

            <div className="projects__links">  
                {/* <div className="projects-row"> */}
                <Link to="/kursor">
                    <div className="kursor project-div">
                        <div className="kursor-logo project-logo"><img src="kursor.png" alt="kursor logo" /></div>
                        <div className="spacechat-info project-info">
                            <p>React | Redux | Electron | UX/UI Design</p>
                            <p>Journal. Better.</p>
                        </div>
                    </div>
                </Link>

                <Link to="/pollapp">
                    <div className="pingpoll project-div">
                        <div className="pingpoll-logo project-logo">
                            Untitled social polling app
                        </div>
                        <div className="pingpoll-info project-info">
                            <p>React | Redux | Firebase | UX/UI Design</p>
                        </div>
                    </div>
                </Link>

                <a href="http://juniorsintech.com" target="_blank" rel="noopener noreferrer">
                    <div className="juniors project-div">
                        <div className="juniors-logo project-logo">
                            <img src="juniorslogo.png" alt="juniors in tech logo"/>
                        </div>
                        <div className="juniors-info project-info">
                            <p>A weekly newsletter for Juniors in Tech.</p>
                        </div>
                    </div>
                </a>
                    <Link to="/spacechat">
                        <div className="spacechat project-div">
                            <div className="spacechat-logo project-logo"><img src="spacechatlogo.png" alt="spacechat logo"/></div>
                            <div className="spacechat-info project-info">
                                <p>Express | Socket.io | React | WebVR</p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/lingoly">
                        <div className="lingoly project-div">
                            <div className="lingoly-logo project-logo"><img src="lingolylogo.png" alt="lingoly logo" /></div>
                            <div className="spacechat-info project-info">
                                <p>Web Speech API | React | Redux</p>
                            </div>
                        </div>
                    </Link>

                <Link to="/bladress">
                    <div className="bladress project-div">
                        <div className="bladress-logo project-logo"><img src="bladress.png" alt="the bladress logo" /></div>
                        <div className="spacechat-info project-info">
                            <p>Design | Frontend | Wordpress</p>
                        </div>
                    </div>
                </Link>

            </div> 
        </div>
    )
}

export default Projects
