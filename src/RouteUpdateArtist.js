import React, { Component } from 'react'
import { navigate } from '@reach/router'
import { Link } from '@reach/router'
import API from './API'


class RouteUpdateArtist extends Component {
  constructor(props){
    super(props)

    this.state = {
      artist: {}
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    var formData = new FormData(this.updateForm);
    var data = {
      name: formData.get('name-input'),
      description: formData.get('description-input'),
      photo: formData.get('photo-input'),
      type_id: formData.get('genre-input')
    }

    var {id} = this.props
    API.updateArtist(id,data).then(res => navigate('/artists'))
  }

  componentDidMount(){
    var {id} = this.props

    API.getSingleArtist(id).then(res => {
      this.setState({ artist: res.data })
    })
  }

  render() {
    var { name, description, type_id, photo } = this.state.artist

    return (
      <div className="addArtist App">
        <header>
          <div className="logo">
            <img src="/images/logo.svg" alt="" />
          </div>
          <Link to={'/artists'}><i className="fas fa-times-circle"></i></Link>
        </header>
        <main>
          <h1>Update Artist</h1>
          <form action="" onSubmit={this.handleFormSubmit} ref={(el) => { this.updateForm = el }}>
            <label htmlFor="name-input">Name:</label>
            <input type="text" id="name-input" name="name-input" placeholder="Enter your artist name" defaultValue={name} />

            <label htmlFor="description-input">Description:</label>
            <input type="text" id="description-input" name="description-input" placeholder="Enter your description" defaultValue={description} />

            <label htmlFor="photo-input">Photo:</label>
            <input type="text" id="photo-input" name="photo-input" placeholder="Enter your cover photo" defaultValue={photo}/>

            <label htmlFor="genre-input">Genres:</label>

            <select name="genre-input" id="genre-input" defaultValue={type_id}>
              <option value="rock">Rock</option>
              <option value="metal">Metal</option>
              <option value="acid jazz">Acid Jazz</option>
              <option value="new age">New Age</option>
              <option value="edm">EDM</option>
            </select>

            <button type="submit">Update</button>
          </form>
        </main>
      </div>
    )
  }
}

export default RouteUpdateArtist