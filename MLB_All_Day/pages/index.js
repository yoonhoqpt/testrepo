import { Box, Heading, Text, Button, Stack, Container, useColorModeValue } from '@chakra-ui/react';

export default function Home() {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.50');

  return (
    <Box bg={bgColor} color={textColor} minH="100vh">
      <Container maxW="container.xl" py={12}>
        <Heading as="h1" size="4xl" textAlign="center" mb={8}>
          MLB All Day
        </Heading>

        <Box textAlign="center" mb={10}>
          <Text fontSize="xl">Welcome to the future of collecting MLB Moments.</Text>
        </Box>

        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center">
          <Button colorScheme="blue" size="lg">Discover Moments</Button>
          <Button colorScheme="green" size="lg">Learn More</Button>
        </Stack>

        {/* Add more content here, mimicking NBA Top Shot/NFL All Day layout */}
      </Container>
    </Box>
  );
}
