import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Form from './components/Form';


function App() {
  return (
    <Box my='6' mx={{base: '5', md:'20'}} fontFamily="'Poppins', sans-serif">
      <Navbar />
      <Form />
    </Box>
  );
}

export default App;
