import { initialState, reducer } from './utils';

describe('reducer', () => {
  test('should initialize with initial state', () => {
    expect(reducer()).toEqual(initialState);
  });

  test('should load categories and add an active field', () => {
    expect(reducer(undefined, {
      type: 'LOAD_CATEGORIES',
      categories: [{
        test: 'test',
      }],
    })).toEqual({
      ...initialState,
      categories: [{
        test: 'test',
        active: false,
      }],
    });
  });

  test('should load restaurants', () => {
    expect(reducer(undefined, {
      type: 'LOAD_RESTAURANTS',
      restaurants: [{
        test: 'test',
      }],
    })).toEqual({
      ...initialState,
      restaurants: [{
        test: 'test',
      }],
    });
  });
});