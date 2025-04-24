import React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, Heading, Flex, Spacer, Button, Image, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Divider, Stack,ButtonGroup } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Flex w="100%" p={4} alignItems="center">
              <Logo h="40px" pointerEvents="none" />
              <Spacer />
              <Heading size="lg">MLB All Day</Heading>
              <Spacer />
              <ColorModeSwitcher justifySelf="flex-end" />
            </Flex>

            <Heading size="2xl">Welcome to MLB All Day</Heading>
            <Text>The future of collecting MLB highlights is here.</Text>

            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
              <Card>
                <CardHeader>
                  <Heading size="md">Featured Moment</Heading>
                </CardHeader>
                <CardBody>
                  <Image src="placeholder.png" alt="Placeholder" />
                  <Text>Description of featured moment.</Text>
                </CardBody>
                <CardFooter>
                  <Button>View Moment</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Heading size="md">Latest Drop</Heading>
                </CardHeader>
                <CardBody>
                  <Image src="placeholder.png" alt="Placeholder" />
                  <Text>Details about the latest drop.</Text>
                </CardBody>
                <CardFooter>
                  <Button>Explore Drop</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Heading size="md">Marketplace</Heading>
                </CardHeader>
                <CardBody>
                  <Image src="placeholder.png" alt="Placeholder" />
                  <Text>Browse and purchase MLB All Day moments.</Text>
                </CardBody>
                <CardFooter>
                  <Button>Visit Marketplace</Button>
                </CardFooter>
              </Card>
            </SimpleGrid>

            <Text fontSize="sm" color="gray.500">
              © {new Date().getFullYear()} MLB All Day. All rights reserved.
            </Text>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
