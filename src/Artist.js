import React, { Component } from 'react'
import { Link } from '@reach/router'
import API from './API'
import filler from './filler.svg'


class Artist extends Component {

  handleTrashClick = () => {
    var {loadArtists,id} = this.props
    API.deleteArtist(id)
    loadArtists()
}

  render() {
    var { name, description, photo, id, type } = this.props
    var photoPrefix = '/images/'+photo+'.jpg'

    return (
      <div className="artist">
        <img src={photoPrefix ? photoPrefix : filler} alt="The Artist" />
        <h1>{name}</h1>
        <hr />
        <p>{description}</p>
        <footer>
          <div className="icons">
            <Link to={'/artists/'+id+'/edit'}><i className="fas fa-edit"></i></Link>
            <i onClick={this.handleTrashClick} className="far fa-trash-alt"></i>
          </div>
          <button style={{backgroundColor: type.genreColor}} className="genre">{type.name}</button>
        </footer>
      </div>
    )
  }
}

export default Artist