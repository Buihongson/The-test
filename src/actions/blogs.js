export const getListBlogs = (blogs) => {
  return {
    type: "GET_LIST",
    payload: blogs
  };
};

export const getBlogDetails = (blog) => {
  return {
    type: "GET_DETAILS",
    payload: blog
  };
};