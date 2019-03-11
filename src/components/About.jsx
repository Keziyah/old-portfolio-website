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
                            <p>I’m Keziyah, <span className="highlight">full stack software engineer & designer</span>.  
                            I'm also an indie maker, and in 2019, I'm challenging myself to turn my projects into profitable products, while being a digital nomad. 
                            Read more about me <Link to="/story">here</Link>, or on my <a href="http://blog.keziyah.com" target="_blank" rel="noopener noreferrer">blog</a>. 
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