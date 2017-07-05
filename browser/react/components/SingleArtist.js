import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Route, Link } from 'react-router-dom';
import Songs from './Songs';
// import AllAlbums from './AllAlbums'


export default class SingleArtist extends Component {
  constructor(){
    super()
    this.state = {
      singleArtist: {},
      artistAlbums: [],
      artistSongs: []
    }
  }

  componentDidMount () {
    const singleArtist = this.props.match.params.artistId;

    const getArtist = axios.get(`/api/artists/${singleArtist}`)
      .then(res => res.data)
      .then(artist => {
        this.setState({ singleArtist: artist })
      })

    const getAlbums = axios.get(`/api/artists/${singleArtist}/albums`)
      .then(res => res.data)
      .then(albums => {
        this.setState({ artistAlbums: albums })
      })
    
    const getSongs = axios.get(`/api/artists/${singleArtist}/songs`)
      .then(res => res.data)
      .then(songs => {
        this.setState({ artistSongs: songs })
    })

    Promise.all([getArtist, getAlbums, getSongs])
        .then(() => {
            console.log('Made it!')
        })
  }

  render () {
    const artist = this.state.singleArtist;

    const albums = this.state.artistAlbums;
    // const selectAlbum = this.props.selectAlbum;
    const songs = this.state.artistSongs;
   
    return (
        <div>
            <h3>{ this.state.singleArtist.name }</h3>
            <div>
                <h3>Albums</h3>
                <div className="row">
                {
                    albums.map(album => (
                        <div className="col-xs-4" key={ album.id }>
                        <Link to={`/albums/${album.id}`} className="thumbnail" href="#" onClick={() => selectAlbum(album.id)}>
                            <img src={ album.imageUrl } />
                            <div className="caption">
                            <h5>
                                <span>{ album.name }</span>
                            </h5>
                            <small>{ album.songs.length } songs</small>
                            </div>
                        </Link>
                        </div>
                    ))
                }
                </div>
                <h3>Songs</h3>
                <Songs songs={ songs }/>
                {/*<h3>Songs</h3>
                <table className='table'>
                <tbody>
                {
                songs && songs.map(song => (
                    <tr key={song.id}>
                    <td>
                        <button className="btn btn-default btn-xs">
                        <span className="glyphicon glyphicon-play"></span>
                        </button>
                    </td>
                    <td>{ song.name }</td>
                    <td>
                        <span>{ song.artists ? song.artists.map(artist => artist.name).join(', ') : null }</span>
                    </td>
                    <td>{ song.genre }</td>
                    </tr>
                ))
                }
            </tbody>
            </table>*/}
            </div>
        </div>
    );
  }
}
