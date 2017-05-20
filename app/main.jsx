import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import Home from './components/Home.jsx'

render(
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
    </Router>, 
    document.getElementById('app')
)
