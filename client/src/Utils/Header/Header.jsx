import React from 'react'
import './Header.css'
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {Button, HStack, Heading, Image, Link, VStack} from '@chakra-ui/react'
import logo from '../../assets/logo-no-background.png'
import { useSelector } from 'react-redux';

const Header = () => {
  const {isAuthenticated} = useSelector((state)=>state.user)
  return (
    <HStack className='header-parent' width='100vw' >
        <HStack>
        <ColorModeSwitcher/>
        <Image src={logo} alt={'site logo'} width={'6.5vw'} padding={'0.5vw'}/>
        </HStack>
        <VStack >
        <Heading as='h2' size='xl'color={'white'}><Link href='/'>CodeShare</Link></Heading>
        <Heading as='h6' size='xs' color={'white'}><Link href='/'>Code and Share in Real-Time</Link></Heading>
        </VStack>
        {isAuthenticated ? 
        (<HStack style={{ margin: '1vw' }}>
          <Button background="#f7d65a" 
            color="black"
            border="1px solid #065af3"
            _hover={{ background: "#e6c24e" }} ><Link href='/profile'>Profile</Link></Button>
            </HStack>)
        :(
          <HStack style={{ margin: '1vw' }}>
          <Button background="#f7d65a" 
            color="black"
            border="1px solid #065af3"
            _hover={{ background: "#e6c24e" }} ><Link href='/login'>Login</Link></Button>
  
          <Button  background="white"
            color="black"
            border="1px solid #065af3"
            _hover={{ background: "#f0f0f0" }}><Link href='/register'>Register</Link></Button>
          </HStack>
        )
        
        }
    </HStack>
  )
}

export default Header