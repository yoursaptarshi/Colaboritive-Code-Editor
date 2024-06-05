import React from 'react'
import './Header.css'
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {Button, HStack, Heading, VStack} from '@chakra-ui/react'
const Header = () => {
  return (
    <HStack className='header-parent'  >
        <ColorModeSwitcher/>
        <VStack>
        <Heading as='h2' size='xl'color={'white'}>CodeShare</Heading>
        <Heading as='h6' size='xs' color={'white'}>Code and Share in Real-Time</Heading>
        </VStack>
        <HStack style={{ margin: '1vw' }}>
        <Button background="#f7d65a" 
          color="black"
          border="1px solid #065af3"
          _hover={{ background: "#e6c24e" }} >Login</Button>

        <Button  background="white"
          color="black"
          border="1px solid #065af3"
          _hover={{ background: "#f0f0f0" }}>Register</Button>
        </HStack>
    </HStack>
  )
}

export default Header