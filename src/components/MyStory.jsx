import React from 'react'
import CaseHeader from './CaseHeader'
// import {Link} from 'react-router-dom'

const MyStory = () => {
    window.scrollTo(0, 0)
    return (
        <div>
        <div className="myStory">
            <CaseHeader />
            <div className="myStory__paragraph" >
                <h1>About Me</h1>
                    <p>
                        Hi, I'm Keziyah. I'm a developer, designer, and maker who makes products to help people 
                        make a strong impact on their own lives and the world. After earning a BA in French 
                        and Spanish, and a BS in Sociology from the Florida State University, I worked in 
                        Washington, DC public health, anti-violence, and pro-choice non-profits. Later on, I 
                        worked as an ESL teacher in Madrid and Riyadh. 
                    </p>
                    <p>
                        I'm currently a full stack developer, 
                        designer, and indie maker, and I work on products that focus on self-improvement, 
                        community connection, and social impact. In 2019, I'm challenging myself to turn my side projects into real, profitable products,
                        while traveling. Follow my journey on <a href="http://blog.keziyah.com" target="_blank" rel="noopener noreferrer">my blog</a> and on <a href="http://instagram.com/keziyah_is" target="_blank" rel="noopener noreferrer">Instagram</a>. 
                    </p>

                    <p>View my <a href={`${process.env.PUBLIC_URL}/KeziyahResume.pdf`}>resume</a>. </p>

            </div>
        </div>
        <footer> &copy; Keziyah Lewis 2019.</footer>
        </div>
    )
}

export default MyStory 