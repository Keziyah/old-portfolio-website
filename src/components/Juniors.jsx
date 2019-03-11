import React from 'react'
import CaseHeader from './CaseHeader'

const Juniors = () => {
    window.scrollTo(0, 0)
    return (
         <div className="kursor case-study">
              <CaseHeader />
            <div className="project-hero">
                <h1>Juniors in Tech</h1>
                <p>There wasn’t a newsletter and job board specifically for juniors in tech. So I made one.</p>
                <p>React (Gatsby), Firebase, social media, community building</p>
            </div>

            <div className="project-body">
                <h1>The project</h1>
                <p>The tech industry definitely has a bias against less experienced people. It’s harder for us
                     to find jobs, and many companies will flat out refuse to hire entry level or junior
                      candidates. </p>
                <p>Some people don’t like the term “junior”, or might even find it infantilizing,
                     which I understand. But no matter what you call us (junior, entry level, less
                      experienced), I think there should be a resource just for us, especially one
                       geared towards helping us find jobs, and improve professionally. 
                </p>

                <h1>Features</h1>
                <ul>
                    <li>
                    The weekly newsletter contains advice on finding a job in tech, 
                    improving your skills, events and opportunities like conference scholarships, 
                    and a list of junior jobs in tech. 
                    </li>
                    <li>
                    The blog features career advice, and interviews with people in tech at different levels.
                    </li>
                    <li>The resources page lets you easily find resources that were posted in the newsletter.
                         For example, a conference scholarship or an article on how to put together a UX portfolio. </li>
                    <li>The job board lists non-senior roles in tech. </li>
                </ul>

                <p>Check out the Juniors in Tech <a href="https://juniorsintech.com" target="_blank" rel="noopener noreferrer">website</a>, <a href="https://twitter.com/juniorsintech" target="_blank" rel="noopener noreferrer">Twitter</a>, <a href="https://instagram.com/juniorsintech" target="_blank" rel="noopener noreferrer">Instagram</a>, and <a href="https://patreon.com/keziyah" target="_blank" rel="noopener noreferrer">Patreon</a>. 
                </p>

               

                <p>&nbsp;</p>
            </div>

            <footer> &copy; Keziyah Lewis 2019.</footer>
        </div>
    )
}

export default Juniors