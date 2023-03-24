import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Avatar,
  Box,
  Text,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';

function CommentSection({
  name,
  body,
  email,
  authorImage,
}) {
  return (
    <Container
      bg="gray.50"
      py={5}
      px={3}
      spacing={{ base: 1, md: 2 }}
      align="center"
      direction="column"
      maxW="4xl"
    >
      <Text
        fontSize={{ base: 'md', md: 'md' }}
        textAlign="center"
        maxW="3xl"
      >
        { body }
      </Text>
      <Box textAlign="center">
        <Avatar
          src={`https://i.pravatar.cc/150?img=${authorImage}`}
          alt={name}
          mb={2}
        />

        <Text fontWeight={600}>{name}</Text>
        <Text fontSize="sm" color={useColorModeValue('gray.400', 'gray.400')}>
          {email}
        </Text>
      </Box>
      <Divider borderColor="blackAlpha.300" />
    </Container>
  );
}

CommentSection.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
};

export default CommentSection;
