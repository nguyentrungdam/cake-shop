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
};

export default UserApi;
