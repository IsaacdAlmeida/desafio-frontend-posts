import React from 'react';
import PropTypes from 'prop-types';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { NavLink as ReachLink } from 'react-router-dom';

function UserInfosCard({
  authorImage,
  authorName,
  userName,
  catchPhrase,
  authorId,
}) {
  return (
    <Center py={6}>
      <Box
        maxW="320px"
        w="full"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="2xl"
        rounded="lg"
        p={6}
        textAlign="center"
      >
        <Avatar
          size="xl"
          src={`https://i.pravatar.cc/150?img=${authorImage}`}
          alt={authorName}
          mb={4}
          pos="relative"
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize="2xl" fontFamily="body">
          {authorName}
        </Heading>
        <Text fontWeight={600} color="gray.500" mb={4}>
          {`@${userName}`}
        </Text>
        <Text
          textAlign="center"
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
        >
          {catchPhrase}
        </Text>

        <Stack mt={8} direction="row" spacing={4}>
          <Button
            flex={1}
            fontSize="sm"
            rounded="full"
            _focus={{
              bg: 'gray.200',
            }}
          >
            Message
          </Button>
          <Button
            flex={1}
            fontSize="sm"
            rounded="full"
            bg="blue.400"
            color="white"
            boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
          >
            <Link as={ReachLink} to={`/users/posts/${authorId}`}>
              Posts
            </Link>
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}

UserInfosCard.propTypes = {
  authorImage: PropTypes.number.isRequired,
  authorName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  catchPhrase: PropTypes.string.isRequired,
  authorId: PropTypes.number.isRequired,
};

export default UserInfosCard;
