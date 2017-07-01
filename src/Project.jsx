import React from 'react'

const Project = (props) => {
    return (
        <div className="section project" id={props.sectionId}>
            <div id={props.particlesId}>
            <div className="project__type">
                <p>{props.text}</p>
            </div>
            <div className="project__main">
                    <div>
                        <div className="project__title">
                            <h1 id={props.headerId}>{props.name}</h1>
                        </div>

                        <div className="project__tagline">
                            <h1>{props.tagline}</h1>
                        </div>

                        <div className="project__button">
                            <button onClick={props.onClick}>Learn More</button>
                        </div>

                    </div>
            </div>
            </div>
        </div>
    )
}

export default Project
