import blogReducers from "./blog";
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  blog: blogReducers,
});

export default rootReducer;
