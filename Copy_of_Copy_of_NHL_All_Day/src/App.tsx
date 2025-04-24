import React from 'react';
import { Box, Heading, Text, Button, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Image } from '@chakra-ui/react';

function App() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Heading fontWeight="extrabold" size="2xl" mt={8} mb={4}>NBA Top Shot Prototype</Heading>
      <Text color="gray.500" mb={8}>Experience the future of collecting iconic NBA moments.</Text>

      <Button colorScheme="blue" size="lg" mb={8}>Discover Moments</Button>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8} mx="auto" width="90%" mb={8}>
        <Card>
          <CardHeader>
            <Heading size="md">Featured Moment</Heading>
          </CardHeader>
          <CardBody>
            <Image src="" alt="Featured Moment Placeholder" borderRadius="md" /> {/* Replace with actual image */}
            <Text>Highlighting an incredible play from last season.</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="teal">View Moment</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">Latest Drop</Heading>
          </CardHeader>
          <CardBody>
            <Image src="" alt="Latest Drop Placeholder" borderRadius="md" /> {/* Replace with actual image */}
            <Text>Get your hands on the newest legendary moments.</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="teal">Explore Drop</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">Community Showcase</Heading>
          </CardHeader>
          <CardBody>
            <Image src="" alt="Community Showcase Placeholder" borderRadius="md" /> {/* Replace with actual image */}
            <Text>See the best moments collected by our community members.</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="teal">See More</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>

      <Text color="gray.500">© {new Date().getFullYear()} NBA Top Shot Prototype</Text>
    </Box>
  );
}

export default App;
