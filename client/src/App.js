import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './Utils/Header/Header';
import Footer from './Utils/Footer/Footer';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
