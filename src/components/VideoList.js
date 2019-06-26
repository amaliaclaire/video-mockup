import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
  const renderedList = videos.map(video => {
    window.thefuckingvideo = video;
    return <VideoItem video={video}/>
  });

  return <div>{renderedList}</div>
}

export default VideoList;
