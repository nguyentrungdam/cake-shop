import axios from "./axios";

const categoryApi = {
  getCategories: () => {
    const url = "/categories/getCategoryList";
    return axios.get(url);
  },
  createCategory: (category) => {
    const url = "/categories/createCategory";
    return axios.post(url, category);
  },
  deleteCategoryById: (category) => {
    const url = `categories/deleteCategory?categoryId=${category}`;
    return axios.delete(url, category);
  },
};

export default categoryApi;
