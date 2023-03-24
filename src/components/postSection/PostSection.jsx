import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
} from '@chakra-ui/react';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';

function PostSection({
  title,
  body,
  postAuthor,
}) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p>{`Escrito por ${postAuthor}`}</p>
      </div>
      <div>
        <p>{body}</p>
      </div>
      <Box
        justify="space-between"
        flexWrap="wrap"
        sx={{
          '& > button': {
            minW: '136px',
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
    </div>
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
