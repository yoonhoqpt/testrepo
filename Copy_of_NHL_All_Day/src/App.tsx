import React from 'react';
import { Box, Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button, Image } from '@chakra-ui/react';

function App() {
  return (
    <Box p={4}>
      <Heading mb={4} textAlign="center">NBA TopShot Prototype</Heading>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {/* Example Moment Card */}
        <Card>
          <CardHeader>
            <Heading size="md">LeBron James - Dunk</Heading>
          </CardHeader>
          <CardBody>
            <Image
              src="https://via.placeholder.com/300x200"
              alt="LeBron James Dunk"
              borderRadius="md"
            />
          </CardBody>
          <CardFooter
            justifyContent="space-between"
            flexWrap="wrap"
            sx={{
              '& > *:not(:last-child)': {
                mr: '12px',
                mb: '4px',
              },
            }}
          >
            <Button variant="solid" colorScheme="blue">
              View Moment
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to Collection
            </Button>
          </CardFooter>
        </Card>

        {/* Example Moment Card */}
        <Card>
          <CardHeader>
            <Heading size="md">Stephen Curry - Three Pointer</Heading>
          </CardHeader>
          <CardBody>
            <Image
              src="https://via.placeholder.com/300x200"
              alt="Stephen Curry Three Pointer"
              borderRadius="md"
            />
          </CardBody>
          <CardFooter
            justifyContent="space-between"
            flexWrap="wrap"
            sx={{
              '& > *:not(:last-child)': {
                mr: '12px',
                mb: '4px',
              },
            }}
          >
            <Button variant="solid" colorScheme="blue">
              View Moment
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to Collection
            </Button>
          </CardFooter>
        </Card>

         {/* Example Moment Card */}
         <Card>
         <CardHeader>
           <Heading size="md">Zion Williamson - Block</Heading>
         </CardHeader>
         <CardBody>
           <Image
             src="https://via.placeholder.com/300x200"
             alt="Zion Williamson Block"
             borderRadius="md"
           />
         </CardBody>
         <CardFooter
           justifyContent="space-between"
           flexWrap="wrap"
           sx={{
             '& > *:not(:last-child)': {
               mr: '12px',
               mb: '4px',
             },
           }}
         >
           <Button variant="solid" colorScheme="blue">
             View Moment
           </Button>
           <Button variant="ghost" colorScheme="blue">
             Add to Collection
           </Button>
         </CardFooter>
       </Card>
      </SimpleGrid>
    </Box>
  );
}

export default App;
