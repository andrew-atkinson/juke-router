import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import StatefulAlbums from './StatefulAlbums';
import NotFound from './NotFound';
import { HashRouter, Route, Link } from 'react-router-dom';
// import {Switch, Router} from 'react-router';

export default class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
        <HashRouter>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar />
          </div>
          <div className="col-xs-10">
            <Route exact path='/' component={ StatefulAlbums } />
            <Route exact path='/albums' component={ StatefulAlbums } />
            <Route exact path='/albums/:albumId' component={ SingleAlbum } />
            <Route exact path='/artists' component={ AllArtists } />
            <Route exact path='/artists/:artistId' component={ SingleArtist }/>
            <Route path='*' component={NotFound} />
          </div>
          <Player />
        </div>
        </HashRouter>
    );
  }
}
