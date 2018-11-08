import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Home } from '../Home'
import { TestForm } from '../TestForm'
import { TestRun } from '../TestRun'
import { PageHeader } from '../PageHeader'

import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <PageHeader />

          <Route path="/" exact component={Home} />
          <Route path="/tests/create" exact component={TestForm} />
          <Route path="/runs/:runid" exact component={TestRun} />
        </div>
      </Router>
    )
  }
}

export default App
