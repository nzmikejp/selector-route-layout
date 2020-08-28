import React, { Component } from 'react'
import Artist from './Artist'
import { Link } from '@reach/router'
import API from './API'

class RouteArtists extends Component {
    constructor(props){
        super(props)

        this.state = {
            artists: []
        }
    }

    loadArtists = () => {
        API.getArtists().then(res => {
            this.setState({artists: res.data})
        })
    }

    componentDidMount(){
        this.loadArtists()
    }

    render() {

        return (
            <div className="mainPage App">
                <header>
                    <div className="logo">
                        <img src="/images/logo.svg" alt="The logo" />
                    </div>
                    <Link to={'/artists/create'}><i className="fas fa-plus-circle"></i></Link>
                </header>
                <main>
                    {
                        this.state.artists.map((artist) => {
                            var props = {
                                key: artist.id,
                                ...artist,
                                loadArtists: this.loadArtists
                            }
                            return (<Artist {...props} />)
                        })
                    }
                </main>
            </div>
        )
    }
}

export default RouteArtists