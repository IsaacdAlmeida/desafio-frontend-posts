import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PostCard({
  userId,
  postId,
  title,
  body,
}) {
  return (
    <div>
      <div>
        <Link to={`/post/${postId}`}>
          <h3>
            {title}
          </h3>
        </Link>
        <p>
          {`Escrito por ${userId}`}
        </p>
        <p>
          {body}
        </p>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  userId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  postId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostCard;
