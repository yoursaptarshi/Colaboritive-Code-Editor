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
import Home from './Components/Home/Home';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Home/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
