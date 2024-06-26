import { Box, Button, Heading, Input, InputGroup, VStack ,Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,} from '@chakra-ui/react';
import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { clearErrors, userRegister } from '../../Actions/userAction';
const Register = () => {
  const dispatch = useDispatch();
  const {error,message,isAuthenticated} = useSelector((state)=>state.user);
    const [name,setName] = useState('');
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const registerHandler = (e)=>{
      e.preventDefault();
      dispatch(userRegister({Name:name,UserName:userName,Password:password}));
      dispatch(clearErrors());
    }
    return (
      <VStack minHeight='80vh'  >
        <Heading as='h2' size='xl' marginTop={'5vh'}>Sign up to Access </Heading>
        <Box width={'50vw'} marginTop={'10vh'}>
        <VStack>
        <Heading as='h6' size='xs' >Name</Heading>
        <Input variant='filled' placeholder='Enter your Name' type='text' onChange={(e)=>setName(e.target.value)} />
        </VStack>
        <VStack marginTop={'5vh'}>
        <Heading as='h6' size='xs'  >UserName</Heading>
        <Input variant='filled' placeholder='Enter your username' type='text' onChange={(e)=>setUserName(e.target.value)} />
        </VStack>
  
        <VStack marginTop={'5vh'}>
        <Heading as='h6' size='xs' >Password</Heading>
        <InputGroup>
        <Input variant='filled' placeholder='Enter your Password' type={show ? 'text' : 'password'}  onChange={(e)=>setPassword(e.target.value)}/>
        <Button h='1.75rem' size='sm' variant='outline' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputGroup>
        </VStack>
  
        </Box>
        {
       (error || isAuthenticated) && (<Alert status={error ? 'error':'success'}>
        <AlertIcon />
        <AlertTitle>{error ? 'Login Failed' : 'Login Success'}</AlertTitle>
        <AlertDescription>{error ? (error) : (message)}</AlertDescription>
      </Alert>)
      }
        <Button backgroundImage={'linear-gradient(93deg, #53b2fe, #065af3)'}
                  color='White'
                  border="1px solid #065af3"
                  borderRadius={'50vw'}
                  
                  padding={'1vw'} marginTop={'5vh'} onClick={registerHandler}>Register</Button>
      </VStack>
    )
}

export default Register