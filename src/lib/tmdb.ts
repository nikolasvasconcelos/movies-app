import {API_KEY, AUTHORIZATION_BEARER} from 'react-native-dotenv';

const tmdb = Object.freeze({
  apiKey: (API_KEY as string) || '',
  auth: (AUTHORIZATION_BEARER as string) || '',
});

export default tmdb;
