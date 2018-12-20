export const fetchFood = {
  path: '/api/food',
  method: 'GET'
};

export const fetchDiet = {
  path: '/api/diets',
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

export const fetchDietId = {
  path: '/api/diets/:id',
  method: 'GET'
};

export const createFood = {
  path: '/api/food',
  method: 'POST'
};

export const createDiet = {
  path: '/api/diets',
  method: 'POST'
};

export const patchFood = {
  path: '/api/food/:id',
  method: 'PATCH'
};

export const patchDiet = {
  path: '/api/diets/:id',
  method: 'PATCH'
};

export const deleteFoodItem = {
  path: '/api/food/:id',
  method: 'DELETE'
};

export const deleteDiet = {
  path: '/api/diets/:id',
  method: 'DELETE'
};
