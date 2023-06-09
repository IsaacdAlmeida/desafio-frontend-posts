import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Spacer,
  useColorModeValue,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink as ReachLink } from 'react-router-dom';
import ToggleColorMode from '../buttons/ToggleColorMode';

function Header() {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      py="2"
      px="3"
      bg={useColorModeValue('blue.50', 'gray.900')}
    >
      <Box>
        <Heading>
          <Link as={ReachLink} to="/home" textTransform="uppercase" style={{ textDecoration: 'none' }}>
            Blog Posts
          </Link>
        </Heading>
      </Box>
      <Spacer />
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          aria-label="Options"
          bg="whiteAlpha.100"
        />
        <MenuList>
          <Link as={ReachLink} to="/home">
            <MenuItem>
              Home
            </MenuItem>
          </Link>
          <Link as={ReachLink} to="/users">
            <MenuItem>
              Autores
            </MenuItem>
          </Link>
          <Link href="https://www.linkedin.com/in/isaacalmeidafilho/" isExternal>
            <MenuItem>Linkedin</MenuItem>
          </Link>
          <Link href="https://github.com/IsaacdAlmeida" isExternal>
            <MenuItem>Github</MenuItem>
          </Link>
          <MenuItem>Contato</MenuItem>
        </MenuList>
      </Menu>
      <ToggleColorMode />
    </Flex>
  );
}

export default Header;
