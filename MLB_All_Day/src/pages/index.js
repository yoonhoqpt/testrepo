import { Box, Heading, Container, Text, Button, Stack, useColorModeValue } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          MLB All Day
          <br />
          <Text as={'span'} color={'orange.400'}>
            Own the Moment
          </Text>
        </Heading>
        <Text color={useColorModeValue('gray.500', 'gray.400')}>
          Collect, trade, and showcase officially licensed MLB digital collectibles.
          Experience the future of fandom.
        </Text>
        <Stack
          direction={'column'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}>
          <Button
            colorScheme={'orange'}
            bg={'orange.400'}
            px={6}
            _hover={{ bg: 'orange.500' }}>
            Get Started
          </Button>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn More
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
