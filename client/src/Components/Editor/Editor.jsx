import React, {  useEffect, useMemo, useState } from 'react';
import { Box, HStack, Select, VStack, useColorMode,Input, Button, Heading } from '@chakra-ui/react';
import  CodeEditor  from '@monaco-editor/react';
import {io} from "socket.io-client"
const Editor = () => {
  const { colorMode } = useColorMode();
  const socket = useMemo(
    () =>
      io("http://127.0.0.1:5000"),
    []
  );
  const [language,setLanguage] = useState("javascript");
  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
    { value: 'csharp', label: 'C#' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'go', label: 'Go' },
    { value: 'php', label: 'PHP' },
    { value: 'swift', label: 'Swift' },
  ]


  //socketIO
  useEffect(()=>{
    socket.on("connect",()=>{
      console.log("Connected",socket.id)
    })
    socket.on("New-User-Welcome",(data)=>{
      console.log(data)
    })
    socket.on("connect_error",(error)=>{console.error("error:",error)})

    return ()=>{
      socket.disconnect();
    }
  },[])
  return (
    <HStack alignItems='stretch' padding={'2vh 1vw'}>
        <VStack minWidth={'25vw'} display={'flex'} justifyContent={'start'} alignItems={'strech'} align={'strech'}  >
            <VStack >
                <Select onChange={(e)=>{setLanguage(e.target.value)}}>
                    {languages.map((element,index)=>{
                        return <option key={index} value={element.value}>
                            {element.label}
                        </option>
                    })}
                </Select>
            </VStack>
            <VStack marginTop={'2vh'} backgroundColor={'#F5F5DC'} height='72vh' >
           <Box width='100%'  >
           <HStack backgroundColor={'white'}><Heading as='h6' size='s' color='black' >Messages</Heading></HStack>
           <VStack padding={'1vw'} overflowY={'scroll'} sx={{
    '&::-webkit-scrollbar': {
      display: 'none'  // Hide scrollbar for WebKit browsers (Chrome, Safari, Opera)
    },
    '-ms-overflow-style': 'none',  // Hide scrollbar for Internet Explorer and Edge
    scrollbarWidth: 'none'  // Hide scrollbar for Firefox
  }} maxHeight={'70vh'} alignItems={'end'} color='black'>
           {languages.map((element,index)=>{
                        return <div key={index} value={element.value}>
                            {element.label}
                        </div>
                    })}
           </VStack>
           
           </Box>
           
            </VStack>
            <HStack width='100%' >
    
    <Input variant='filled' placeholder='Message' type='text'  />
    <Button backgroundImage={'linear-gradient(93deg, #0f9d58, #056a38)'}
              color='White'
              border="1px solid "
              borderRadius={'30vw'}
              
              >Send</Button>
    
           </HStack>
        </VStack>
        <VStack minWidth={'70vw'} alignItems={'stretch'} >
        <Box border={'solid 0.05px'}>
        <CodeEditor
      height="80vh"
      defaultLanguage="javascript"
      defaultValue="// hey! Welcome to CodeSHare by Saptarshi"
      language={language}
      theme={colorMode === 'dark' ? 'vs-dark' : 'vs-light'}
    />
        </Box>
    <HStack marginBottom={'2vh'}>
    
      <Input variant='filled' placeholder='Enter your Project Title' type='text'  />
      <Button backgroundImage={'linear-gradient(93deg, #0f9d58, #056a38)'}
                color='White'
                border="1px solid "
                borderRadius={'30vw'}
                
                >Save</Button>
      
    </HStack>
        </VStack>

    </HStack>
  );
};

export default Editor;
