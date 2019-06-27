import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoItem from './VideoItem';

class App extends React.Component {
  state = {videos: [], selectedVideo: null}

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
     this.setState({videos: response.data.items })
  };

  onVideoSelect = (video) => {
    console.log('fromthe App!', video);
  };



  render() {
    return (
      <div className="ui container">
        <SearchBar
        onFormSubmit={this.onTermSubmit}
        />
        <VideoList
        onVideoSelect={this.onVideoSelect}
        videos={this.state.videos}
        />
      </div>
    )
  }
}

export default App;
