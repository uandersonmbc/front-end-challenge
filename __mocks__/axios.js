const axios = {
  get: jest.fn(),
  post: jest.fn(),
  delete: jest.fn(),
};

axios.create = () => {
  return axios;
};

export default axios;
