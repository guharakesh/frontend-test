import fetch from 'isomorphic-unfetch';
import { api_options } from '../../utils';

export default async ({ query: { categories, offset } }, res) => {
  const url = 'https://api.yelp.com/v3/businesses/search?'
    + (categories ? `categories=${categories}&` : '')
    + 'location=lasvegas&'
    + 'limit=8&'
    + `offset=${offset}`;
  const result = await fetch(url, api_options);
  const body = await result.json()

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify(body));
}