import { Fragment, useEffect, useReducer, useContext } from 'react';
import FilterInput from './FilterInput';
import Radio from './Radio';
import Button from './Button';
import Dropdown from './Dropdown';
import Checkbox from '../Checkbox';
import Context from '../Context';
import fetch from 'isomorphic-unfetch';

export default () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    (async () => {
      const result = await fetch('/api/categories');
      const { categories } = await result.json();
      const filtered = categories
        .filter(({ parent_aliases }) => parent_aliases.includes('restaurants'))
      dispatch({ type: 'LOAD_CATEGORIES', categories: filtered });
    })();
  }, []);

  const { categories, open_now } = state;

  return (
    <Fragment>
      <div className="filters">
        <div className="filter-text">Filter By:</div>
        <FilterInput>
          <Radio
            handleClick={() => dispatch({ type: 'TOGGLE_OPEN' })}
            active={state.open_now}
          >
            Open Now
          </Radio>
        </FilterInput>
        <FilterInput>
          <Dropdown label="Price">
            <Checkbox>All</Checkbox>
            <Checkbox>$</Checkbox>
            <Checkbox>$$</Checkbox>
            <Checkbox>$$$</Checkbox>
            <Checkbox>$$$$</Checkbox>
          </Dropdown>
        </FilterInput>
        <FilterInput>
          <Dropdown label="Category">
            <Checkbox
              active={!categories.find(({ active }) => !active)}
              onClick={() => dispatch({ type: 'TOGGLE_ALL_CATEGORIES' })}
            >
              All
            </Checkbox>
            {categories.map(({ title, active }) => (
              <Checkbox
                key={title}
                active={active}
                onClick={() => dispatch({ type: 'TOGGLE_CATEGORY', category: title })}
              >
                {title}
              </Checkbox>)
            )}
          </Dropdown>
        </FilterInput>
      </div>
      <Button>Clear All</Button>
      <style jsx>{`
        .filters {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'HelveticaNeue';
        }
        .filter-text {
          color: #606060;
          font-size: 16px;
          font-family: 'HelveticaNeue';
        }
      `}</style>
    </Fragment>
  );
}