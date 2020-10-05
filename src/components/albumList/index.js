import React, {Component} from 'react';
import {ScrollView, View} from 'react-native'
import axios from 'axios'
import AlbumDetail from '../albumDetail'

class AlbumList extends Component {

  state = {albums: []}

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data}))
  }

  renderAlbums() {
    return this.state.albums.map(album => {
      return <AlbumDetail album={album} />
    })
  }

  render() {
    console.log('this.state', this.state)
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView >
    )
  }
}

export default AlbumList
