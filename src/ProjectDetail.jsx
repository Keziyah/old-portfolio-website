import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap';
import YouTube from 'react-youtube'

const ProjectDetail = (props) => {

    const opts = {
        height: '390',
        width: '640'
    }

    return (
        <div className="section details">
            <Row>
                <Col md={3}>
                    <h3>{props.name}</h3>
                </Col>

                <Col md={8} className="text-right">
                    <h3 className="stack">{props.url} | {props.stack}</h3>
                </Col>
            </Row>

            <Row className="vid-row">
                <Col md={7}>
                    <YouTube videoId={props.videoId} opts={opts} />
                </Col>

                <Col md={5} className="details-para">

                    <div>
                        <p className="details-para">{props.paragraph1}</p>
                    </div>

                    <div>
                        <p className="details-para">{props.paragraph2}</p>
                    </div>

                    <div>
                        <p className="details-para">{props.paragraph3}</p>
                    </div>

                    <div>
                        <p className="details-para">{props.paragraph4}</p>
                    </div>
                    <div className="back-btn hori-center">
                        <Button onClick={props.onClick}>Back</Button>
                    </div>
                </Col>
            </Row>


        </div>

    )
}

export default ProjectDetail

