import React, { Component } from 'react'
import Artist from './Artist'
import { Link } from '@reach/router'
import API from './API'

class RouteArtists extends Component {
    constructor(props){
        super(props)

        this.state = {
            artists: [
                {
                    id: 1,
                    name: "Red Hot Chilli Peppers",
                    description: " Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1983. Their music incorporates elements of alternative rock, funk, punk rock and psychedelic rock. With over 80 million records sold worldwide, ",
                    photo: "/images/rhcp-1.jpg",
                    type_id: 'Rock'
                },
                {
                    id: 2,
                    name: "The Strokes",
                    description: " The Strokes are an American rock band from Manhattan, New York. Formed in 1998, the band is often credited with having spearheaded a revival of 1960s-style garage rock in the early 21st century. ",
                    photo: "/images/the-strokes-1.jpg",
                    type_id: 'Rock'
                }
            ],
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