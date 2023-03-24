import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Heading,
  Text,
  Image,
  Container,
  Link,
} from '@chakra-ui/react';
import { NavLink as ReachLink } from 'react-router-dom';

function PostCard({
  postId,
  postImage,
  title,
  body,
}) {
  return (
    <Box p={2} borderWidth="1px" borderRadius="md" boxShadow="md" overflow="hidden" bg="gray.100">
      <Container display="flex" flexDir="column" justifyContent="space-around">
        <Image src={postImage} alt={title} borderRadius="md" />
        <Link as={ReachLink} to={`/post/${postId}`}>
          <Heading as="h3" size="md" mt={2} mb={2} fontWeight="extrabold" textAlign="justify" noOfLines={2}>
            {title}
          </Heading>
        </Link>
      </Container>
      <Container>
        <Text
          noOfLines={3}
        >
          {body}
        </Text>
      </Container>
    </Box>
  );
}

PostCard.propTypes = {
  postId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  postImage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostCard;
