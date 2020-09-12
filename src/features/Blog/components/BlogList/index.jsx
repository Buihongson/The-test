import React from "react";
import PropTypes from "prop-types";

import BlogCard from "../BlogCard";

function BlogList(props) {
  const { blogList } = props;

  return (
    <div className="mt-3 mb-2">
      {blogList && blogList.length ? (
        blogList.map((blogItem, index) => (
          <BlogCard key={index} blog={blogItem} />
        ))
      ) : (
        <div>Had no data.</div>
      )}
    </div>
  );
}

BlogList.propTypes = {
  blogList: PropTypes.array,
};

export default BlogList;
