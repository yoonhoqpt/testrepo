import React from 'react';
import { Box, Heading, Text, Button, Flex, Image } from '@chakra-ui/react';
import { FaBaseball } from 'react-icons/fa';

function App() {
  return (
    <Box bg="brand.100" color="brand.300" minH="100vh" py={4}>
      <Flex justify="space-between" align="center" px={8} mb={12}>
        <Heading size="xl" fontWeight="bold" color="brand.300">
          MLB All Day
        </Heading>
        <Flex align="center">
          <Button colorScheme="red" mr={4}>
            Sign In
          </Button>
          <Button colorScheme="blue">
            Sign Up
          </Button>
        </Flex>
      </Flex>

      <Flex direction="column" align="center" justify="center" h="70vh" textAlign="center">
        <FaBaseball size="100px" mb={4} color="brand.200" />
        <Heading size="4xl" fontWeight="extrabold" mb={4}>
          Own the Moment
        </Heading>
        <Text fontSize="xl" maxW="600px" mb={8}>
          Discover and collect officially licensed MLB digital collectibles. The future of baseball fandom is here.
        </Text>
        <Button colorScheme="red" size="lg">
          Explore Now
        </Button>
      </Flex>

      <Box textAlign="center" mt={8} p={4} fontSize="sm">
        © {new Date().getFullYear()} MLB All Day. All rights reserved.
      </Box>
    </Box>
  );
}

export default App;
