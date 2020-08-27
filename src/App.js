import React, { Component } from 'react'

import { Router, Redirect } from '@reach/router'
import RouteArtists from './RouteArtists'
import RouteUpdateArtist from './RouteUpdateArtist'
import RouteAddArtist from './RouteAddArtist'
import './assets/css/style.css'


class App extends Component {

  render() {
    return (
        <Router>
          {/* <Redirect from="/" to="artists"/> */}
          <RouteArtists path="artists"/>
          <RouteAddArtist path="artists/create"/>
          <RouteUpdateArtist path="artists/:id/edit"/>
          <RouteArtists default/>
        </Router>
    )
  }
}

export default App
