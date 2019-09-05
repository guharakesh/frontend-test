import fetch from 'isomorphic-unfetch';
import { api_options } from '../../utils';

export default async ({ query: { id } }, res) => {
  const url = `https://api.yelp.com/v3/businesses/${id}?limit=20`;
  const result = await fetch(url, api_options);
  const body = await result.json()

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify(body));
}
