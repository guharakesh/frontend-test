import { useContext, useEffect, useState } from 'react';
import Header2 from './Header2';
import Result from './Result';
import Load from './Load';
import Context from '../Context';
import { is_open_selector } from '../../utils';

const Results = ({ load_more }) => {
  const { state, state: { restaurants, open_now, prices } } = useContext(Context);
  const check_is_open = is_open_selector(state);
  return (
    <div className="container">
      <Header2>All Restaurants</Header2>
      <div className="results">
        {restaurants.length
          ? restaurants
            .filter(({ id }) => !open_now || check_is_open(id))
            .filter(({ price }) => !Object.values(prices).includes(true) || prices[price])
            .map(restaurant => <Result key={restaurant.id} restaurant={restaurant} />)
          : null}
      </div>
      <div className="load">
        <Load onClick={load_more} />
      </div>
      <style jsx>{`
        .container {
          margin-top: 64px;
      }
        .container .results {
          display: flex;
          margin-top: 44px;
          flex-wrap: wrap;
        }
        .container .load {
          display: flex;
          width: 100%;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

Results.defaultProps = {
  restaurants: [],
  load_more: () => null,
};

export default Results;