export const getQueryString = (queryParams = {}) => {
  const queriesArray = [];
  for (let [key, value] of Object.entries(queryParams)) {
    queriesArray.push(`${key}=${value}`);
  }
  return queriesArray.length > 0 ? `?${queriesArray.join('&')}` : '';
};