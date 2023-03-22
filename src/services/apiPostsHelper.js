import axios from 'axios';

const getPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

  return data;
};

const getPostComments = async (id) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  return data;
};

export {
  getPosts,
  getPostComments,
};
