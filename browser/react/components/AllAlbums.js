import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StatefulAlbums from './StatefulAlbums';

export default class AllAlbums extends Component {

  render (albums) {
    console.log("albums", albums)
    // const albums = this.state.albums;
    // const selectAlbum = this.props.selectAlbum;

    return (
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
      </div>
    );
  }
}
