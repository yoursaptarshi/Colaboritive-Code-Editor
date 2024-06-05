import React from 'react'
import {HStack,VStack,Button,Heading,Text} from '@chakra-ui/react'
import { FaGithub,FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <HStack style={{background: '#000',padding: '50px 0 60px', display:'flex',justifyContent:'space-between', padding:'3vw 5vw'}}>
        <VStack>
        <VStack>
        <Heading as='h2' size='xl'color={'white'}>CodeShare</Heading>
        <Heading as='h6' size='xs' color={'white'}>Code and Share in Real-Time</Heading>
        </VStack>

        <VStack>
        <Text fontSize='lg' color={'white'} >Hi! I am Saptarshi Samanta, Hope You like my RealTime Code Editor</Text>
        </VStack>
        </VStack>
        <VStack>
        <Heading as='h6' size='s' color={'white'}>Important Links</Heading>
        <Text fontSize='lg' color={'white'} >Home</Text>
        <Text fontSize='lg' color={'white'} >Login</Text>
        <Text fontSize='lg' color={'white'} >Register</Text>
        </VStack>

        <VStack>
        <Heading as='h6' size='s' color={'white'}>Contact</Heading>
        
        <MdEmail color='white' size='35px'/>
        <FaLinkedin color='white' size='35px'/>
        <FaGithub color='white' size='35px'/>
        </VStack>
    </HStack>
  )
}

export default Footer