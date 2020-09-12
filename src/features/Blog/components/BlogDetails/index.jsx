import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import { handleError } from "../../../../helper/Helper";
import blogApi from "../../../../api/blogApi";
import { getBlogDetails } from "../../../../actions/blogs";

function BlogDetails(props) {
  const dispatch = useDispatch();
  const { blogId } = useParams();
  let history = useHistory();

  const blogDetails = useSelector((state) => state.blog.details);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await blogApi.getDetails(blogId);
        dispatch(getBlogDetails(response));
      } catch (error) {
        handleError(error, history);
      }
    };

    fetchBlogDetails();
  }, []);

  function goBack() {
    history.push("/blogs");
  }

  return (
    <Container>
      <Button className="mb-3" onClick={() => goBack()}>
        Back
      </Button>
      <Row>
        <Col>
          <img src={blogDetails.image} alt="" />
        </Col>
        <Col>
          <h4>{blogDetails.title || ""}</h4>
          <div>{blogDetails.content || ""}</div>
        </Col>
      </Row>
    </Container>
  );
}

BlogDetails.propTypes = {};

export default BlogDetails;
