import React from 'react';
import PropTypes from 'prop-types';

function CommentSection({
  name,
  body,
}) {
  return (
    <div>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <p>{body}</p>
      </div>
    </div>
  );
}

CommentSection.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default CommentSection;
