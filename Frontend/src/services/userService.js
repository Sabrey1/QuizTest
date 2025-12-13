import api from './api';

export const userService = {
  getUsers() {
    return api.get('/users'); // GET all users
  },

  getUser(id) {
    return api.get(`/users/${id}`); // GET single user
  },

  createUser(data) {
    return api.post('/users', data); // POST create new user
  },

  updateUser(id, data) {
    return api.put(`/users/${id}`, data); // PUT update user
  },

  deleteUser(id) {
    return api.delete(`/users/${id}`); // DELETE user
  }
};
