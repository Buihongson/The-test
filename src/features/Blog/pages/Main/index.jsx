import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { handleError } from "../../../../helper/Helper";
import blogApi from "../../../../api/blogApi";
import { getListBlogs } from "../../../../actions/blogs";
import BlogList from "../../components/BlogList";
import BlogPagination from "../../components/BlogPagination";
import BlogSort from "../../components/BlogSort";
import BlogFilter from "../../components/BlogFilter";

function MainPage(props) {
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blog.list);
  let history = useHistory();

  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState({
    limit: 10,
    page: 1,
    sortBy: "createdAt",
    order: "asc",
    title: "",
  });

  useEffect(() => {
    const fetchBlogList = async () => {
      try {
        const params = {
          page: filter.page,
          limit: filter.limit,
          sortBy: filter.sortBy,
          order: filter.order,
          title: filter.title,
        };

        const dataFilter = {
          title: filter.title
        };

        const response = await blogApi.getList(params);
        const responseDataFilter = await blogApi.getList(dataFilter);

        dispatch(getListBlogs(response));
        setBlogs(responseDataFilter);
        setLoading(false);
      } catch (error) {
        handleError(error, history);
      }
    };

    fetchBlogList();
  }, [filter]);

  function onChangePage(newPage) {
    setFilter((preState) => ({
      ...preState,
      page: newPage,
    }));
  }

  function onSortPage(params) {
    setFilter((preState) => ({
      ...preState,
      page: 1,
      sortBy: params.sortBy,
      order: params.order,
    }));
  }

  function handleFilterChange(params) {
    setFilter((preState) => ({
      ...preState,
      page: 1,
      title: params.searchTerm,
    }));
  }

  if (loading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <BlogFilter onSubmit={handleFilterChange} />
      <BlogSort onSortPage={onSortPage} />
      <BlogList loading={loading} blogList={blogList} />
      <BlogPagination
        totalBlogs={blogs.length}
        pagination={filter}
        onChangePage={onChangePage}
      />
    </Container>
  );
}

MainPage.propTypes = {};

export default MainPage;
