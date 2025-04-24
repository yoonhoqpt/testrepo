import { Box, Heading, Text, Button, Container, SimpleGrid, Image } from '@chakra-ui/react';

const Feature = ({ title, desc, image }) => {
  return (
    <Box p={4} shadow='md' borderWidth='1px' borderRadius='md'>
      <Image src={image} alt={title} mb={4} />
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={2}>{desc}</Text>
    </Box>
  );
};

export default function Home() {
  return (
    <Container maxW='container.xl' mt={8}>
      <Box textAlign='center' mb={12}>
        <Heading as='h1' size='2xl' fontWeight='bold' color='blue.600'>
          MLB All Day
        </Heading>
        <Text mt={4} fontSize='xl'>
          The future of collecting MLB Moments is here.
        </Text>
        <Button colorScheme='blue' size='lg' mt={8}>
          Explore the Marketplace
        </Button>
      </Box>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
        <Feature
          title='Collect Iconic Moments'
          desc='Own officially licensed MLB highlights, showcasing the greatest plays.'
          image='https://via.placeholder.com/300x200?text=MLB+Moment'
        />
        <Feature
          title='Join a Vibrant Community'
          desc='Connect with fellow MLB fans and collectors from around the world.'
          image='https://via.placeholder.com/300x200?text=MLB+Community'
        />
        <Feature
          title='Experience the Thrill'
          desc='Buy, sell, and trade your favorite MLB Moments in our marketplace.'
          image='https://via.placeholder.com/300x200?text=MLB+Marketplace'
        />
      </SimpleGrid>

      <Box mt={12} textAlign='center'>
        <Text fontSize='sm' color='gray.500'>
          © {new Date().getFullYear()} MLB All Day. All rights reserved.
        </Text>
      </Box>
    </Container>
  );
}
