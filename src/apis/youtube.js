import axios from 'axios';

const KEY ="AIzaSyC2PHnHKFYaXJis-YQb7u3jJgaPaI6tIOU";


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
});
