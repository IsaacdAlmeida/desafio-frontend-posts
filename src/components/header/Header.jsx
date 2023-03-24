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
  LinkOverlay,
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
          <LinkOverlay as={ReachLink} to="/home">
            <MenuItem>
              Home
            </MenuItem>
          </LinkOverlay>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <ToggleColorMode />
    </Flex>
  );
}

export default Header;
