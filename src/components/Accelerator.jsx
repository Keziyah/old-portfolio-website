import React from 'react'
import CaseHeader from './CaseHeader'

const Accelerator = () => {
    window.scrollTo(0, 0)
    return (
         <div className="kursor case-study">
              <CaseHeader />
            <div className="project-hero">
                <h1>Backstage Applications </h1>
                <p>An application form app for Backstage Capital’s accelerator programs. </p>
                <p>React, Redux, MongoDB</p>
                <p>A Backstage Capital project</p>
            </div>

            <div className="project-body">
                <h1>The project</h1>
                <p>
                    <a href="https://backstagecapital.com" target="_blank" rel="noopener noreferrer">Backstage Capital</a>, A VC firm that invests in underrepresented founders,
                    needed a customizable application form for its investment programs. This app,
                    that would take applications for these programs, was the solution.  
                </p>

                <h1>Features</h1>
                <ul>
                    <li>Users can create an account & log in</li>
                    <li>Applications are autosaved</li>
                    <li>Users can invite co-founders to complete the application</li>
                    <li>Confirmation emails are sent to applicants upon completion</li>
                </ul>


                <div className="project-body__image" style={{maxHeight: '500px', maxWidth: '800px', marginBottom: '40px'}}>
                    <img src="accelerator.gif" style={{height: '100%', width: '100%'}} alt="gif of screen recording of accelerator applications app"/>
                </div>

                <p>&nbsp;</p>
            </div>

            <footer> &copy; Keziyah Lewis 2019.</footer>
        </div>
    )
}

export default Accelerator