import axios from 'axios';

const KEY = 'AIzaSyAshxkX-hi68cgNbP4bS1PLxXoi11eg-uY'

export default axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3`,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
}); 
