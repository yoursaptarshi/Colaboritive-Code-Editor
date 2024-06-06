import React, {  useEffect, useMemo, useState } from 'react';
import { Box, HStack, Select, VStack, useColorMode,Input, Button, Heading } from '@chakra-ui/react';
import  CodeEditor  from '@monaco-editor/react';
import {io} from "socket.io-client"
import { useParams } from 'react-router-dom';
const Editor = () => {
  const {roomName} = useParams()
  const { colorMode } = useColorMode();
  const socket = useMemo(
    () =>
      io("http://127.0.0.1:5000",
        {
          withCredentials: true,
        }
      ),
    []
  );
  const [language,setLanguage] = useState("javascript");

  const [code,setCode] = useState('');
  const [codes,setCodes] = useState('//Please type your codes here');

  const [message,setMessage] = useState('');
  const [messages,setMessages] = useState(['']);
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
      socket.emit("Join-Room",{roomName})
      
    })
    
    socket.on('send-message-to-client',(data)=>{
      console.log(data)
      
      setMessages((prevMessages) => [...prevMessages, data])
      console.log(messages)
    })

    
    socket.on("connect_error",(error)=>{console.error("error:",error)})

    return ()=>{
      socket.on("disconnect",()=>{
        console.log('user disconnected')
      })
    }
  },[])
useEffect(() => {
  socket.emit('personal-code-to-server',{code,roomName})

  socket.on("all-codes-from-server", (data) => {
    setCodes(data);
  });
}, [code])



function messageSubmitHandler (e){
  e.preventDefault();
  socket.emit('send-message-to-server',{message,roomName})
}


  
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
           <VStack padding={'1vw'} overflowY={'scroll'} overflowX={'scroll'} sx={{
    '&::-webkit-scrollbar': {
      display: 'none'  // Hide scrollbar for WebKit browsers (Chrome, Safari, Opera)
    },
    '-ms-overflow-style': 'none',  // Hide scrollbar for Internet Explorer and Edge
    scrollbarWidth: 'none'  // Hide scrollbar for Firefox
  }} maxHeight={'70vh'} alignItems={'end'} color='black'>
           {messages.map((element,index)=>{
                        return <div key={index} style={{backgroundColor:'#59ba5e',padding:'1vw 2vw', borderRadius:'1vw'}}>
                            {element}
                        </div>
                    })}
           </VStack>
           
           </Box>
           
            </VStack>
            <HStack width='100%' >
    
    <Input variant='filled' placeholder='Message' type='text' onChange={(e)=>{setMessage(e.target.value)}} />
    <Button backgroundImage={'linear-gradient(93deg, #0f9d58, #056a38)'}
              color='White'
              border="1px solid "
              borderRadius={'30vw'}
              onClick={messageSubmitHandler}
              >Send</Button>
    
           </HStack>
        </VStack>
        <VStack minWidth={'70vw'} alignItems={'stretch'} >
        <Box border={'solid 0.05px'}>
        <CodeEditor
      height="80vh"
      defaultLanguage="javascript"
      
      language={language}
      theme={colorMode === 'dark' ? 'vs-dark' : 'vs-light'}
      value={codes}
      onChange={(value,event)=>setCode(value)}
      
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
