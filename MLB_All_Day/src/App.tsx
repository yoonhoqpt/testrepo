import React from 'react';
import { Box, Heading, Text, Flex, Spacer, Button } from '@chakra-ui/react';

function App() {
  return (
    <Box>
      {/* Header */}
      <Flex bg="#003262" color="white" p={4} align="center">
        <Heading size="lg">MLB All Day</Heading>
        <Spacer />
        <Button colorScheme="blue">Sign In</Button>
      </Flex>

      {/* Main Content */}
      <Box p={4}>
        <Heading size="xl" mb={4}>Welcome to MLB All Day!</Heading>
        <Text fontSize="md">The future of baseball fandom is here. Collect, trade, and showcase your favorite MLB Moments.</Text>
        {/* Add more components and content here, mirroring the NBA TopShot/NFL AllDay layout */}
      </Box>

      {/* Footer */}
      <Box bg="gray.200" p={4} textAlign="center">
        <Text fontSize="sm">© 2023 MLB All Day</Text>
      </Box>
    </Box>
  );
}

export default App;
