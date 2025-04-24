import { Box, Heading, Text, Image, Flex, SimpleGrid } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box bg="#003277" color="white" minH="100vh">
      <Box maxW="container.xl" mx="auto" py={10} px={6}>
        <Heading size="2xl" textAlign="center" mb={8}>MLB All Day</Heading>

        {/* Hero Section */}
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" mb={12}>
          <Box flex="1" mr={{ md: 8 }}>
            <Heading size="xl" mb={4}>Own the Moment</Heading>
            <Text fontSize="lg" mb={6}>
              Collect officially licensed MLB Highlights as limited edition digital collectibles.
            </Text>
            {/* Add a button or link here if needed */}
          </Box>
          <Box flex="1">
            <Image src="/mlb_hero.png" alt="MLB All Day Hero" borderRadius="md" />
          </Box>
        </Flex>

        {/* Features Section */}
        <Heading size="lg" mb={4}>Features</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={10}>
          <Box p={5} bg="#0351ad" borderRadius="md">
            <Heading size="md" mb={2}>Collect</Heading>
            <Text>Discover and collect your favorite MLB Moments.</Text>
          </Box>
          <Box p={5} bg="#0351ad" borderRadius="md">
            <Heading size="md" mb={2}>Showcase</Heading>
            <Text>Display your collection and share it with friends.</Text>
          </Box>
          <Box p={5} bg="#0351ad" borderRadius="md">
            <Heading size="md" mb={2}>Trade</Heading>
            <Text>Buy, sell, and trade Moments with other fans.</Text>
          </Box>
        </SimpleGrid>

        {/* More Content - can be customized further */}
        <Text textAlign="center" fontSize="sm">© {new Date().getFullYear()} MLB All Day. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default HomePage;