const price_keys = ['$', '$$', '$$$', '$$$$'];
const prices = price_keys.reduce((acc, value) => ({ ...acc, [value]: false }), {});

export const initialState = {
  categories: [],
  restaurants: [],
  open_now: false,
  prices,
};

export const reducer = (state = initialState, { type, ...action }) => {
  switch (type) {
    case 'LOAD_CATEGORIES': {
      const { categories } = action || {};
      return {
        ...state,
        categories: categories.map(element => ({ ...element, active: false }))
      };
    }
    case 'LOAD_RESTAURANTS': {
      const { restaurants } = action || {};
      const filtered = restaurants.filter(({ id }) => {
        const already = state.restaurants.some(({ id: old }) => old === id);
        return !already;
      });
      return {
        ...state,
        restaurants: [
          ...state.restaurants,
          ...filtered,
        ],
      };
    }
    case 'UPDATE_RESTAURANT': {
      const { restaurants } = state;
      const { restaurant } = action || {};
      return {
        ...state,
        restaurants: restaurants.map(value => 
          ((value.id === restaurant.id) ? restaurant : value)),
      };
    }
    case 'TOGGLE_CATEGORY': {
      const { categories, category } = action || {};
      return {
        ...state,
        categories: state.categories
          .map(element => {
            const { title, active } = element;
            return title === category
              ? { ...element, active: !active }
              : element;
          }),
      };
    }
    case 'TOGGLE_PRICE': {
      const { price } = action || {};
      const { prices } = state;
      const { [price]: oldPrice } = prices;
      return {
        ...state,
        prices: {
          ...prices,
          [price]: !oldPrice,
        }
      };
    }
    case 'TOGGLE_ALL_PRICES': {
      const { prices } = state;
      return {
        ...state,
        prices: Object.keys(prices).reduce((acc, value) => ({
          ...acc,
          [value]: Object.values(prices).includes(false),
        }), {}),
      };
    }
    case 'TOGGLE_ALL_CATEGORIES': {
      return {
        ...state,
        categories: state.categories.map(element => ({
          ...element,
          active: !!state.categories.find(({ active }) => !active),
        })),
      };
    }
    case 'TOGGLE_OPEN': {
      const { open_now } = state;
      return {
        ...state,
        open_now: !open_now,
      }
    }
    default: {
      return state;
    }
  }
}

export const is_open_selector = state => target_id => {
  const { restaurants } = state;
  const { hours } = restaurants.find(({ id }) => id === target_id);
  const { is_open_now } = hours ? hours.find(({ hours_type }) => hours_type === 'REGULAR') : {};
  return is_open_now;
};

export const api_options = {
  method: 'GET',
  headers: {
    'cache-control': 'no-cache',
    Connection: 'keep-alive',
    'Accept-Encoding': 'gzip, deflate',
    Host: 'api.yelp.com',
    'Postman-Token': 'a345c768-03ef-4f85-b77d-e49a36bc0241,8da2d915-ec67-43d5-a02f-f367131b4cd9',
    'Cache-Control': 'no-cache',
    Accept: '*/*',
    'User-Agent': 'PostmanRuntime/7.16.3',
    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
  },
};