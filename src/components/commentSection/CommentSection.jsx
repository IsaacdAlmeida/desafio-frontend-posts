import React from 'react';
import PropTypes from 'prop-types';
import {
  Flex,
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
    <Flex
      bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.300')}
      py={5}
      px={3}
      justifyContent="center"
      direction="column"
      maxW="4xl"
      mt="10px"
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
        <Text fontSize="sm" color={useColorModeValue('blackAlpha.700', 'gray.400')}>
          {email}
        </Text>
      </Box>
      <Divider borderColor="blackAlpha.300" />
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
