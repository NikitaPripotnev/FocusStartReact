export const fetchFood = {
  path: '/api/food',
  method: 'GET'
};

export const fetchFoodItem = {
  path: '/api/food/:name',
  method: 'GET'
};

export const createFood = {
  path: '/api/food',
  method: 'POST'
};

export const deleteFoodItem = {
  path: '/api/food/:id',
  method: 'DELETE'
};
