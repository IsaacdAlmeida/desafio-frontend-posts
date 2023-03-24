import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';

function PostSection({
  title,
  body,
  postAuthor,
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      maxW="4xl"
      alignItems="center"
    >
      <Box py="5">
        <Heading as="h2" size="lg" textTransform="uppercase" letterSpacing="1px">{title}</Heading>
        <Text
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
        >
          {`Escrito por ${postAuthor}`}
        </Text>
      </Box>
      <Text
        letterSpacing="wide"
        fontSize="md"
      >
        {body}
      </Text>
      <Box
        justify="space-between"
        flexWrap="wrap"
        sx={{
          '& > button': {
            minW: '120px',
          },
        }}
      >
        <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
          Like
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
          Comment
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
          Share
        </Button>
      </Box>
    </Box>
  );
}

PostSection.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  postAuthor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default PostSection;
