import store from '../store';
import React, {Component} from 'react';
import Lyrics from '../components/Lyrics';
import axios from 'axios';
import {setLyrics, fetchLyrics} from '../action-creators/lyrics';


export default class LyricsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState());

    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const unsubscribe = store.subscribe(() => {
        this.setState(store.getState());
      }
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit() {
    store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
  }

  render() {
    return <Lyrics
      text={this.state.text}
      setArtist={this.handleArtistInput}
      setSong={this.handleSongInput}
      artistQuery={this.state.artistQuery}
      songQuery={this.state.songQuery}
      handleSubmit={this.handleSubmit}
    />
  }
}