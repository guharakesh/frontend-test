import { useState, useEffect, useReducer } from 'react';
import Meta from '../components/Meta';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Filter from '../components/Filter';
import Results from '../components/Results';
import Context from '../components/Context';
import { initialState, reducer } from '../utils';

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [offset, setOffset] = useState(0);

  const { categories } = state;
  const categoryString = categories
    .filter(({ active }) => active)
    .map(({ alias }) => alias)
    .join(',');

  const load_more = async () => {
    const result = await fetch(`/api/search?categories=${categoryString}&offset=${offset}`);
    const { businesses } = await result.json();
    setOffset(businesses ? offset + businesses.length : offset);
    dispatch({ type: 'LOAD_RESTAURANTS', restaurants: businesses });
  }

  useEffect(() => {
    load_more();
  }, [categoryString]);

  const { restaurants } = state;
  
  return (
    <div>
      <Context.Provider value={{ state, dispatch }}>
        <Meta />
        <Hero>{{
          title: 'Restaurants',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' + 
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        }}</Hero>
        <Nav><Filter /></Nav>
        <Results restaurants={restaurants} load_more={load_more} />
      </Context.Provider>
    </div>
  );
}

export default Home;