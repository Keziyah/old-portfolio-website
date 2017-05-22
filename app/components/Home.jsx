import React, { Component } from 'react'
import Hero from './Hero'
import Project from './Project'
import ProjectDetail from './ProjectDetail'
import About from './About'


class Home extends Component {
    constructor() {
        super()

        this.state = {
            project1: true, ///true: front, false: back
            project2: true,
            project3: true
        }

        this.toggle1 = this.toggle1.bind(this)
        this.toggle2 = this.toggle2.bind(this)
        this.toggle3 = this.toggle3.bind(this)
    }

    toggle1() {
        this.setState({ project1: !this.state.project1 })
    }

    toggle2() {
        this.setState({ project2: !this.state.project2 })
    }

    toggle3() {
        this.setState({ project3: !this.state.project3 })
    }


    render() {
        return (
            <div className="container-fluid" id="content">
                <Hero />
                {this.state.project1 ?
                    <Project name={"lingoly"} tagline={"a speech to text speechwriting app for language learners"} sectionId={"lingoly"} headerId={"lingoly-header"} text={"Projects"} onClick={this.toggle1} />
                    : <ProjectDetail onClick={this.toggle1}/>
                }
                {this.state.project2 ?
                    <Project name={"spacechat"} tagline={"A virtual reality smart chatroom with real-time language translation and sentiment analysis."} sectionId={"spacechat"} headerId={"spacechat-header"} text={"Projects"} particlesId={"stars"} onClick={this.toggle2} />
                    : <ProjectDetail onClick={this.toggle2} />
                }
                {this.state.project3 ?
                <Project name={"Animations in React"} tagline={"Learn to animate React with higher order components, TweenMax, and more..."} sectionId={"animations"} headerId={"animations-header"} text={"Projects"} onClick={this.toggle3}/>
                : <ProjectDetail onClick={this.toggle3}/>
                }
                <About text={"About / Contact"} />
                
            </div>
        )
    }
}

export default Home;


