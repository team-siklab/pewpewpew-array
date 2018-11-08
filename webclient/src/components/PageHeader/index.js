import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './PageHeader.css'

export class PageHeader extends Component {
  render () {
    return (
      <header className="PageHeader">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tests/create">Create a Test</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
