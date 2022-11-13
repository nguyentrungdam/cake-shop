import axios from "./axios";

const UserApi = {
  getUsers: () => {
    const url = "accounts/getAccountList";
    return axios.get(url);
  },
  //TODO chưa làm bên dưới
  deleteUserById: (userId) => {
    const url = "/user/delete";
    return axios.post(url, userId);
  },
};

export default UserApi;
