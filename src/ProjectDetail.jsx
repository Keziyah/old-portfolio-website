import React from 'react'
import YouTube from 'react-youtube'

const ProjectDetail = (props) => {

    const opts = {
        height: '390',
        width: '640'
    }

    return (
        <div className="section details">
                <div className="details__project">
                    <div className="details__project--left">
                        <h3>{props.name} &nbsp;</h3>
                    </div>

                    <div className="details__project--right">
                        <h3> | {props.stack}</h3>
                    </div>
                </div>

                <div className="details__main">
                    <div className="details__video">
                        <YouTube videoId={props.videoId} opts={opts} />
                    </div>

                    <div className="details__text">
                        <div className="details__paragraph">
                            <p className="details__paragraph">{props.paragraph1}</p>
                        </div>

                        <div>
                            <p className="details__paragraph">{props.paragraph2}</p>
                        </div>

                        <div>
                            <p className="details__paragraph">{props.paragraph3}</p>
                        </div>

                        <div>
                            <p className="details__paragraph">{props.paragraph4}</p>
                        </div>

                        <div className="details__back">
                            <button onClick={props.onClick}>Back</button>
                        </div>
                    </div>
                </div>
        </div>

    )
}

export default ProjectDetail

