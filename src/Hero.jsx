import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const Hero = () => {
    return (
        <div id="hero">
            <div className="container section">
                <Grid>
                    <div id="hero-text" className="hori-center">

                        <Row>
                            <Col sm={12}>
                                <h1 id="my-name">Keziyah Lewis</h1>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={12}>
                                <h1 id="tagline">Full Stack Software Engineer</h1>
                            </Col>
                        </Row>

                    </div>

                    <Row className="down">
                        <Col sm={12} className="hori-center">
                            <i className="fa fa-chevron-down fa-5x" aria-hidden="true"></i>
                        </Col>
                    </Row>

                </Grid>
            </div>
        </div>
    )
}

export default Hero; 