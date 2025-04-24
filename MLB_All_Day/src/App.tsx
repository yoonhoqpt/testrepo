import React from 'react';
import { Box, Heading, Text, Button, Stack, Image, Container, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { FaBaseballBall } from 'react-icons/fa';

function App() {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const buttonBg = useColorModeValue('blue.500', 'blue.200');
  const buttonColor = useColorModeValue('white', 'gray.800');

  return (
    <Box bg={bg} minH="100vh" py={8}>
      <Container maxW="container.xl" textAlign="center">
        <Heading
          as="h1"
          size="4xl"
          fontWeight="bold"
          mb={4}
          color="red.500"
        >
          MLB All Day
        </Heading>
        <Text fontSize="xl" color="gray.600" mb={8}>
          The future of collecting MLB highlights is here.
        </Text>

        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8} mb={8}>
          {/* Example Features - Replace with actual MLB All Day features */}
          <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" bg="white">
            <FaBaseballBall size={48} color="red" style={{ marginBottom: '1rem' }} />
            <Heading size="md" mb={2}>Collectible Moments</Heading>
            <Text>Own officially licensed MLB highlights.</Text>
          </Box>
          <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" bg="white">
            <FaBaseballBall size={48} color="red" style={{ marginBottom: '1rem' }} />
            <Heading size="md" mb={2}>Dynamic Marketplace</Heading>
            <Text>Buy, sell, and trade with other fans.</Text>
          </Box>
          <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" bg="white">
            <FaBaseballBall size={48} color="red" style={{ marginBottom: '1rem' }} />
            <Heading size="md" mb={2}>Exclusive Access</Heading>
            <Text>Unlock unique experiences and rewards.</Text>
          </Box>
        </SimpleGrid>

        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center">
          <Button bg={buttonBg} color={buttonColor} size="lg">Learn More</Button>
          <Button colorScheme="red" size="lg">Join the Waitlist</Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
