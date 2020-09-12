import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Form, Col } from "react-bootstrap";

function BlogFilter(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeourRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);

    if (!onSubmit) return false;

    if (typingTimeourRef.current) {
      clearTimeout(typingTimeourRef.current);
    }

    typingTimeourRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };

      onSubmit(formValues);
    }, 300);
  }

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Form.Row>
          <Form.Group as={Col} controlId="search">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter something..."
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}

BlogFilter.propTypes = {
  onSubmit: PropTypes.func,
};

export default BlogFilter;
