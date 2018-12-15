import React from 'react'
import Scroll from 'react-scroll'
// const Link = Scroll.Link
import {Link} from 'react-router-dom'
const Element = Scroll.Element


const About = (props) => {
    return (
        <div className="section about" id="about">
            <Element name="about">
            <div className="about__main">
                        <div className="about__p">
                            <p>I’m Keziyah, <span className="highlight">full stack software engineer & designer</span> based in Central Florida.  
                            I use JavaScript frameworks to create responsive websites and interactive <span className="highlight">web apps.</span> Feel free to say hi, or read more 
                            about me <Link to="/story">here</Link>.
                            </p>
                        </div>

                        <div className="about__buttons">

                            <button id="fly" onClick={props.toggleVid}>Watch me fly <i className="material-icons">play_arrow</i></button>

                        </div>
            </div>
            </Element>

            <footer> <p>&copy; Keziyah Lewis 2019.</p></footer>
        </div>
    )
}

export default About; 