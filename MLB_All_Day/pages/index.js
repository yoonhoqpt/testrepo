import { Box, Heading, Text, Button, Stack, useColorModeValue } from '@chakra-ui/react';

export default function Home() {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('gray.800', 'gray.50');
  return (
    <Box bg={bg} color={color} minH="100vh" py={12} px={4} fontFamily='sans-serif'>
      <Box maxW="7xl" mx="auto" textAlign="center">
        <Heading as="h1" size="4xl" fontWeight="bold" mb={4}>
          MLB All Day
        </Heading>
        <Text fontSize="xl" mb={8}>
          The future of collecting MLB Moments is here.
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center">
          <Button colorScheme="blue" size="lg">
            Discover Moments
          </Button>
          <Button colorScheme="green" size="lg">
            Learn More
          </Button>
        </Stack>
        <Box mt={12}>
          <Text fontSize="sm">
            © {new Date().getFullYear()} MLB All Day. All rights reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
