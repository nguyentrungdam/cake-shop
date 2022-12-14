import axios from "./axios";

const UserApi = {
  getUsers: () => {
    const url = "accounts/getAccountList";
    return axios.get(url);
  },
  deleteUserById: (userId) => {
    const url = `accounts/deleteAccount?accountId=${userId}`;
    return axios.delete(url, userId);
  },
  enableUserById: (userId) => {
    const url = `accounts/enableAccount?accountId=${userId}`;
    return axios.get(url, userId);
  },
  getUsersDisable: () => {
    const url = "accounts/getAccountDisableList";
    return axios.get(url);
  },
};

export default UserApi;
