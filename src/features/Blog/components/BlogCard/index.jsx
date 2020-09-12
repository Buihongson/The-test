import React from "react";
import PropTypes from "prop-types";
import { Link, useRouteMatch, withRouter } from "react-router-dom";
import { Media } from "react-bootstrap";

function BlogCard(props) {
  const match = useRouteMatch();
  const { blog } = props;

  return (
    <Media>
      <Link to={`${match.url}/${blog.id}`}>
        <img
          width={64}
          height={64}
          className="align-self-start mr-3"
          src={blog.image}
          alt="Generic placeholder"
        />
      </Link>
      <Media.Body>
        <h5><Link to={`${match.url}/${blog.id}`}>{blog.title}</Link></h5>
        <p>
          {blog.content}
        </p>
      </Media.Body>
    </Media>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.object
};

export default withRouter(BlogCard);
