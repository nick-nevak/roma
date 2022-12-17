import baseApi from './api';


export const init = (incrementFn: () => void, decrementFn: () => void) => {
  baseApi.interceptors.request.use((config) => {
    incrementFn();
    return config;
  }, (error) => {
    decrementFn();
    return Promise.reject(error);
  });

  baseApi.interceptors.response.use((response) => {
    decrementFn();
    return response;
  }, (error) => {
    decrementFn();
    return Promise.reject(error);
  });
};
