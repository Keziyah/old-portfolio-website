import React from 'react'
import Hero from './Hero'
import Project from './Project'

const Home = () => {
    return (
        <div className="container-fluid">
            <Hero />
            <Project name={"lingoly"} tagline={"a speech to text speechwriting app for language learners"} sectionId={"lingoly"} headerId={"lingoly-header"}/>
            <Project name={"spacechat"} tagline={"A virtual reality smart chatroom with real-time language translation and sentiment analysis."} sectionId={"spacechat"} headerId={"spacechat-header"}/>
            <Project name={"Animations in React"} tagline={"Learn to animate React with higher order components, TweenMax, and more..."} sectionId={"animations"} headerId={"animations-header"}/>
        </div>
    )
}

export default Home; 


