import React from 'react'
import CaseHeader from './CaseHeader'
// import {Link} from 'react-router-dom'

const MyStory = () => {
    window.scrollTo(0, 0)
    return (
        <div>
        <div className="myStory">
            <CaseHeader />
            <div className="myStory__paragraph">
                <h1>About Me</h1>
                <p >
                    Keziyah Lewis is a developer, designer, and maker who makes products to help people 
                    make a strong impact on their own lives and the world. After earning a BA in French 
                    and Spanish, and a BS in Sociology from the Florida State University, she worked in 
                    Washington, DC public health, anti-violence, and pro-choice non-profits. Later, she 
                    worked as an ESL teacher in Madrid and Riyadh. 
                </p>
                <p>
                    She is currently a full stack developer, 
                    designer, and indie maker, and works on products that focus on self-improvement, 
                    community connection, and social impact. 
                </p>
            </div>
        </div>
        <footer> &copy; Keziyah Lewis 2019.</footer>
        </div>
    )
}

export default MyStory 