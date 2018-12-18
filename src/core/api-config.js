export const fetchFood = {
  path: '/api/food',
  method: 'GET'
};

export const fetchDiet = {
  path: '/api/diet',
  method: 'GET'
};

export const fetchFoodItem = {
  path: '/api/food/:name',
  method: 'GET'
};

export const fetchFoodId = {
  path: '/api/food/:id',
  method: 'GET'
};

export const createFood = {
  path: '/api/food',
  method: 'POST'
};

export const patchFood = {
  path: '/api/food/:id',
  method: 'PATCH'
};

export const deleteFoodItem = {
  path: '/api/food/:id',
  method: 'DELETE'
};
