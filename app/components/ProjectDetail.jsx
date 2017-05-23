import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap';

const ProjectDetail = (props) => {
    return (
        <div className="section details">
            <Row className="details-top">
                <Col md={3}>
                    <h3>{props.name}</h3>
                </Col>
                <Col md={3}>
                    <h3>{props.url}</h3>
                </Col>
                <Col md={6}>
                    <h3>{props.stack}</h3>
                </Col>
            </Row>

            <div className="container">

                <Row>
                    <Col md={6}>
                        <div className="details-para">
                            <p>{props.paragraph1}</p>
                        </div>
                        <div  className="details-para">
                            <p>{props.paragraph2}</p>
                        </div>
                    </Col>

                    <Col md={6}>
                        <img src={props.image2} className="project-image"/>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <img src={props.image1} className="project-image"/>
                    </Col>

                    <Col md={6}>
                        <div className="details-para">
                            <p>{props.paragraph3}</p>
                        </div>
                        <div className="details-para">
                            <p>{props.paragraph4}</p>
                        </div>
                    </Col>
                </Row>

            </div>
        </div>

    )
}

export default ProjectDetail

