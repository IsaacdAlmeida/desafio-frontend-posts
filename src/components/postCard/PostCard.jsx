import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function PostCard({
  postId,
  title,
  body,
}) {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" overflow="hidden">
      <Link to={`/post/${postId}`}>
        <Heading as="h3" size="md" mb={2}>
          {title}
        </Heading>
      </Link>
      <Text>
        {body}
      </Text>
    </Box>
  );
}

PostCard.propTypes = {
  postId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostCard;
