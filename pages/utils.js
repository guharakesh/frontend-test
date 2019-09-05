export const initialState = {
  categories: [],
  restaurants: [],
  open_now: false,
};

export const reducer = (state = initialState, action) => {
  const { type, category, categories, restaurants } = action || {};
  switch (type) {
    case 'LOAD_CATEGORIES':
      return {
        ...state,
        categories: categories.map(element => ({ ...element, active: false }))
      };
    case 'LOAD_RESTAURANTS':
      return {
        ...state,
        restaurants,
      };
    case 'TOGGLE':
      return {
        ...state,
        categories: state.categories
          .map(element => {
            const { title, active } = element;
            return title === category
              ? { ...element, active: !active }
              : element;
          }
          ),
      };
    case 'TOGGLE_ALL_CATEGORIES':
      return {
        ...state,
        categories: state.categories.map(element => ({
          ...element,
          active: !!state.categories.find(({ active }) => !active),
        })),
      };
    case 'TOGGLE_OPEN':
      return { ...state, open_now: !state.open_now };
    default:
      return state;
  }
}

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