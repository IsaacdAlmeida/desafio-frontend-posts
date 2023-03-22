import React from 'react';
import PropTypes from 'prop-types';

function PostSection({
  title,
  body,
}) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p>{body}</p>
      </div>
    </div>
  );
}

PostSection.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostSection;
