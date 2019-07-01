import React from 'react';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoItem from './VideoItem';
import VideoDetail from './VideoDetail'
import Navbar from './Navbar'
import RecentVideos from './RecentVideos'
import AdvertisementMockUp from './AdvertisementMockUp'

class App extends React.Component {
  state = {videos: [], selectedVideo: null}

  componentDidMount() {
    this.onTermSubmit(`cam girls`)
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
     this.setState({
       videos: response.data.items,
       selectedVideo: response.data.items[0]
     });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video});
  };



  render() {
    return (
      <div className="ui container">

      <Navbar />
        <SearchBar
        onFormSubmit={this.onTermSubmit}
        />
        <div className="ui grid">
          <div className="ui row">
          <div className="eleven wide column">
          <VideoDetail video={this.state.selectedVideo}/>

          </div>
          <div className="five wide column">
            <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
            />
          </div>
          </div>
        </div>
        <RecentVideos />
        <AdvertisementMockUp /> 

      </div>
    )
  }
}

export default App;
