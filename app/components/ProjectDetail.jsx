import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'; 

const ProjectDetail = (props) => {
    return (
        <div className="section">Hello i am project detail

            <Button onClick={props.onClick}>Back</Button>
        </div>

    )
}

export default ProjectDetail

