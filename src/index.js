import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import Spacechat from './components/Spacechat'
import Lingoly from './components/Lingoly'
import Covfefe from './components/Covfefe'
import Life from './components/Life'
import Bladress from './components/Bladress'
import Kursor from './components/Kursor'
import NoMatch from './components/NoMatch'
import MyStory from './components/MyStory'


ReactDOM.render(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/spacechat" component={Spacechat} />
                    <Route path="/lingoly" component={Lingoly} />
                    <Route path="/covfefe" component={Covfefe} /> 
                    <Route path="/story" component={MyStory} />
                    <Route path="/life" component={Life} />
                    <Route path="/bladress" component={Bladress} />
                    <Route path="/kursor" component={Kursor} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>,
     document.getElementById('root'));

registerServiceWorker();
