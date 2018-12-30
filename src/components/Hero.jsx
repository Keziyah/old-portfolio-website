import React from 'react'
// import ScrollAnimation from 'react-animate-on-scroll'
import Scroll from 'react-scroll'
const Link = Scroll.Link

const Hero = (props) => {
    return (
        <div className="hero">

            <div className="hero__greeting">
                {/* <ScrollAnimation animateOut="fadeOutLeft" initiallyVisible={true}> */}
                    <h1>Hi. I'm Keziyah, a full stack <br /> software engineer <br />
                    & designer. 
                    </h1>
                {/* </ScrollAnimation> */}

                <p style={{maxWidth: '70%', fontSize: '18px'}}>I work on products that help people make a positive impact on their own lives and in the world. </p>

                {/* <ScrollAnimation animateOut="fadeOutLeft" initiallyVisible={true}> */}
                    {/* <h3>I build <em>experiences</em>. <span className="highlight">Let me build yours.</span></h3> */}
                {/* </ScrollAnimation> */}
                
            <div className="hero__lower">
                <div className="hero__buttons">
                    <Link activeClass="active"
                     to="projects" 
                     spy={true}
                    smooth={"easeOutCubic"} 
                    duration={600}
                    >
                        <button>Work</button>
                    </Link>
                    
                    <a 
                     href="http://blog.keziyah.com"
                     target="_blank"
                     rel="noopener noreferrer"
                    >
                        <button className="hero__buttons--contact">Blog</button>
                    </a>
                 </div>
            </div>
            <div className="scroll-downs">
                <div className="mousey">
                    <div className="scroller"></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Hero; 