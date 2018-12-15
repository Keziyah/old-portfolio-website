import React from 'react'
import CaseHeader from './CaseHeader'

const Pollapp = () => {
    window.scrollTo(0, 0)
    return (
         <div className="kursor case-study">
              <CaseHeader />
            <div className="project-hero">
                <h1>Untitled polling app</h1>
                <h5>React | Redux | Firebase | Designed with Sketch App</h5>
                <h4>See what's happening in your neighborhood.</h4>
            </div>

            <div className="project-body">
                <p>
                    This app is designed to help users poll people in their local area for time sensitive, local information that is not easily searchable online.  
                    While working on this app, I learned to use the Lean UX method. Talking to potential users has been especially helpful in developing the app.  
                    This is an ongoing Backstage Studio project. 
                </p>
                
                <div style={{width: '300px', margin: '0 auto'}}>
                    <div className="project-body__image" style={{height: '400px', width: '215px', marginBottom: '40px'}}>
                            <img src="pingpoll1.png" alt="sketch ui of pingpoll"/>
                    </div>


                    <div className="project-body__image" style={{height: '400px', width: '215px', marginBottom: '40px'}}>
                            <img src="pingpoll2.png" alt="sketch ui of pingpoll"/>
                    </div>


                    <div className="project-body__image" style={{height: '400px', width: '215px', marginBottom: '40px'}}>
                            <img src="pingpoll3.png" alt="sketch ui of pingpoll"/>
                    </div>
                </div>

                

                <p>&nbsp;</p>
            </div>

            <footer> &copy; Keziyah Lewis 2019.</footer>
        </div>
    )
}

export default Pollapp