import { useEffect, useState } from 'react';
import Header2 from './Header2';
import Result from './Result';
import Load from './Load';

const Results = ({ restaurants }) => (
  <div className="container">
    <Header2>All Restaurants</Header2>
    <div className="results">
      {restaurants.length
        ? restaurants.map(restaurant => <Result key={restaurant.id} restaurant={restaurant} />)
        : null}
    </div>
    <div className="load">
      <Load />
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

Results.defaultProps = {
  restaurants: [],
};

export default Results;