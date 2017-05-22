import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'


const About = (props) => {
    return (
        <div className="section" id="about">
            <div className="section-left">
                <p>{props.text}</p>
            </div>
            <div className="container">
                <Grid>
                    <Row id="my-photo">
                        <Col sm={12} className="hori-center">
                            <img id="myFace" src="/images/myFace.jpg" />
                        </Col>
                    </Row>

                    <Row id="text">
                        <Col sm={12} className="hori-center">
                            <p id="about-text">I’m a teacher, traveler, and fullstack software engineer based in NYC, specializing in the NERDS (Node.js, Express, React (w/ Redux), Databases using SQL) stack, but always curious to learn more. Currently working on side
                        projects and looking for a full time engineering gig in New York, DC, or remote.  Feel free to say hi. </p>
                        </Col>
                    </Row>

                    <Row className="hori-center" id="logos">
                        <Col xs={12} sm={6} md={3} >
                            <i className="fa fa-linkedin fa-5x" aria-hidden="true"></i>
                            <p className="logo-text">linkedin.com/in/keziyah</p>
                        </Col>

                        <Col xs={12} sm={6} md={3} >
                            <i className="fa fa-github fa-5x" aria-hidden="true"></i>
                            <p className="logo-text">github.com/keziyah</p>
                        </Col>

                        <Col xs={12} sm={6} md={3} >
                            <i className="fa fa-twitter fa-5x" aria-hidden="true"></i>
                            <p className="logo-text">twitter.com/keziyahL</p>
                        </Col>

                        <Col xs={12} sm={6} md={3} >
                            <i className="fa fa-envelope fa-5x" aria-hidden="true"></i>
                            <p className="logo-text">hello@keziyah.com</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
            
        </div>
    )
}

export default About; 