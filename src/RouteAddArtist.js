import React, { Component } from 'react'
import { navigate } from '@reach/router'
import { Link } from '@reach/router'
import API from './API'

class RouteAddArtist extends Component {

  handleFormSubmit = (e) => {
    e.preventDefault()
    var formData = new FormData(this.addForm)
    var data = {
      name: formData.get('name-input'),
      description: formData.get('description-input'),
      type_id: formData.get('genre-input')
    }

    API.addArtist(data).then(res => navigate('/artists'))
  }

  render() {

    return (
      <div className="addArtist App">
        <header>
          <div className="logo">
            <img src="/images/logo.svg" alt="" />
          </div>
          <Link to={'/artists'}><i className="fas fa-times-circle"></i></Link>
        </header>
        <main>
        <h1>Add Artist</h1>
          <form action="" onSubmit={this.handleFormSubmit} ref={(el) => { this.addForm = el }}>
            <label htmlFor="name-input">Name:</label>
            <input type="text" id="name-input" name="name-input" placeholder="Enter your artist name" />

            <label htmlFor="description-input">Description:</label>
            <input type="text" id="description-input" name="description-input" placeholder="Enter your description" />

            <label htmlFor="photo">Photo:</label>
            <input type="text" id="photo" name="photo" placeholder="Enter your cover photo" />

            <label htmlFor="genre-input">Genres:</label>

            <select name="genre-input" id="genre-input">
              <option value="rock">Rock</option>
              <option value="metal">Metal</option>
              <option value="acid jazz">Acid Jazz</option>
              <option value="new age">New Age</option>
              <option value="edm">EDM</option>
            </select>

            <button type="submit">Add</button>
          </form>
        </main>
      </div>
    )
  }
}

export default RouteAddArtist