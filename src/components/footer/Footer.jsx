import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { NavLink as ReachLink } from 'react-router-dom';

function Footer() {
  return (
    <Box
      bg={useColorModeValue('blue.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      mt="3"
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction="row" spacing={6}>
          <Link as={ReachLink} to="/home">Home</Link>
          <Link href="https://www.linkedin.com/in/isaacalmeidafilho/" isExternal>Linkedin</Link>
          <Link href="https://desafio-frontend-posts.vercel.app/home" isExternal>Blog</Link>
        </Stack>
        <Text>© 2022 Isaac Almeida. Todos direitos reservados</Text>
      </Container>
    </Box>
  );
}

export default Footer;
