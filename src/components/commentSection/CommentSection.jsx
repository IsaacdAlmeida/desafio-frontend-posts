import React from 'react';
import PropTypes from 'prop-types';
import {
  Flex,
  Avatar,
  Box,
  Text,
} from '@chakra-ui/react';

function CommentSection({
  name,
  body,
  email,
  authorImage,
}) {
  return (
    <Flex>
      <div>
        <Avatar src={`https://i.pravatar.cc/150?img=${authorImage}`} alt={name} />
      </div>
      <Box ml="3">
        <Text fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm">{email}</Text>
      </Box>
      <Box>
        <Text>{body}</Text>
      </Box>
    </Flex>
  );
}

CommentSection.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
};

export default CommentSection;
