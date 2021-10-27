// eslint-disable-next-line import/prefer-default-export
export const generateSearchPath = (query) => (
  `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${query}&image_type=photo&pretty=true`
);
