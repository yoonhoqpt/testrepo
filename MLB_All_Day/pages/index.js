import { Box, Heading, Center, VStack, Button, Link, Flex, Spacer } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box bg="#F2F2F2" minH="100vh">
      <Flex as="nav" align="center" p={4} bg="white" boxShadow="md">
        <Heading size="lg" color="mlbBlue">MLB All Day</Heading>
        <Spacer />
        <Button colorScheme="blue" mr={4}>
          Sign In
        </Button>
        <Button colorScheme="blue">
          Sign Up
        </Button>
      </Flex>

      <Center>
        <VStack spacing={8} mt={20} align="center" maxW="600px" textAlign="center">
          <Heading size="4xl" fontWeight="bold" color="mlbRed">
            Own the Game.
          </Heading>
          <Heading size="xl" color="gray.600">
            Collect, Trade, and Play with Official MLB Digital Collectibles.
          </Heading>
          <Button colorScheme="blue" size="lg">
            Discover Packs
          </Button>
          <Link color="blue.500">Learn More</Link>
        </VStack>
      </Center>

      <Box as="footer" textAlign="center" py={4} color="gray.500">
        © {new Date().getFullYear()} MLB All Day. All rights reserved.
      </Box>
    </Box>
  )
}