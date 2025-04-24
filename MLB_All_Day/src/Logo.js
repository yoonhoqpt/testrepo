import React from 'react';
import { Box, Image } from '@chakra-ui/react';

export const Logo = props => {
  return (
    <Box {...props}>
      <Image src="mlb_logo.png" alt="MLB All Day Logo" height="50px" />
    </Box>
  );
};
