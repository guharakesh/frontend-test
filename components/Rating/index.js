import { Fragment } from 'react';
import Star from '../Star';

const Rating = ({ rating }) => {
  const filled = Math.floor(rating);
  const half = Math.ceil(rating % 1);
  const empty = 5 - (filled + half);
  return (
    <Fragment>
      {[...Array(filled).keys()].map(value => <Star key={`filled${value}`} />)}
      {[...Array(half).keys()].map(value => <Star key={`half${value}`} fill="half" />)}
      {[...Array(empty).keys()].map(value => <Star key={`outline${value}`} fill="outline" />)}
    </Fragment>
  );
}

Rating.defaultProps = {
  rating: 5,
}

export default Rating;