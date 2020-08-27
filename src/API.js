import axios from 'axios'

var urlPrefix = 'http://localhost:4000/api'

var API = {

    getArtists: () => axios.get(urlPrefix + '/artists'),
    
    getSingleArtist: (id) => axios.get(urlPrefix + '/artists/'+id),
      
    addArtist: (data) => axios.post(urlPrefix + '/artists/', data),
      
    updateArtist: (id, data) => axios.put(urlPrefix + '/artists/' + id, data),
    
    deleteArtist: (id) => axios.delete(urlPrefix + '/artists/' + id)
}

export default API

