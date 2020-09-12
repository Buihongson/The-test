import axiosClient from "./axiosClient";

const blogApi = {
  getList: (params) => {
    const url = "/blogs";
    return axiosClient.get(url, { params });
  },

  getDetails: (id) => {
    const url = `/blogs/${id}`;
    return axiosClient.get(url);
  }
};

export default blogApi;