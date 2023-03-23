import axios from 'axios';

const getUsers = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

  return data;
};

const getUserDetails = async (id) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

  return data;
};

export {
  getUsers,
  getUserDetails,
};
