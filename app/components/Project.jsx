import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'

const Project = (props) => {
    return (
        <div className="container section project" id={props.sectionId}>
            <Grid>
                <div className="hori-center project-info">

                    <Row>
                        <Col sm={12}>
                            <h1 className="project-name" id={props.headerId}>{props.name}</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <h1 className="project-tag">{props.tagline}</h1>
                        </Col>
                    </Row>

                    <Row className="my-button">
                        <Col sm={12}>
                            <Button>Learn More</Button>
                        </Col>
                    </Row>

                </div>

                <Row className="project-down">
                    <Col sm={12} className="hori-center">
                        <i className="fa fa-chevron-down fa-5x" aria-hidden="true"></i>
                    </Col>
                </Row>

            </Grid>
        </div>
    )
}

export default Project
