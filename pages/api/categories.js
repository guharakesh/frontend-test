import fetch from 'isomorphic-unfetch';
import { api_options } from '../utils';

export default async (req, res) => {
  const result = await fetch(
    'https://api.yelp.com/v3/categories?',
    api_options,
  );
  const body = await result.json()

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify(body));
}
