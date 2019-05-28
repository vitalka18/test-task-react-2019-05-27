import axios from './axios-instance';

const URL = '/cart-items';

const getCartItems = () => {
  return axios.get(URL);
};

const deleteCartItem = (id) => {
  return axios.delete(`${URL}/${id}`);
};

export default {
  getCartItems,
  deleteCartItem
};
