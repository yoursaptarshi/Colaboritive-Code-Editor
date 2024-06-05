import { Box, Button, Heading, Input, InputGroup, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <VStack minHeight='80vh'  >
      <Heading as='h2' size='xl' marginTop={'5vh'}>Log in to access </Heading>
      <Box width={'50vw'} marginTop={'10vh'}>
      <VStack>
      <Heading as='h6' size='xs' >UserName</Heading>
      <Input variant='filled' placeholder='Enter your username' type='text' />
      </VStack>

      <VStack marginTop={'5vh'}>
      <Heading as='h6' size='xs' >Password</Heading>
      <InputGroup>
      <Input variant='filled' placeholder='Enter your Password' type={show ? 'text' : 'password'} />
      <Button h='1.75rem' size='sm' variant='outline' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputGroup>
      </VStack>

      </Box>

      <Button backgroundImage={'linear-gradient(93deg, #53b2fe, #065af3)'}
                color='White'
                border="1px solid #065af3"
                borderRadius={'50vw'}
                
                padding={'1vw'} marginTop={'5vh'}>Login</Button>
    </VStack>
  )
}

export default Login