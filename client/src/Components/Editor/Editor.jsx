import React, { useRef, useEffect, useState } from 'react';
import { Box, HStack, Select, VStack, useColorMode } from '@chakra-ui/react';
import  CodeEditor  from '@monaco-editor/react';

const Editor = () => {
  const { colorMode } = useColorMode();
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
  return (
    <HStack alignItems='stretch' padding={'2vh 1vw'}>
        <VStack minWidth={'25vw'} display={'flex'} justifyContent={'start'}>
            <VStack>
                <Select onChange={(e)=>{setLanguage(e.target.value)}}>
                    {languages.map((element,index)=>{
                        return <option key={index} value={element.value}>
                            {element.label}
                        </option>
                    })}
                </Select>
            </VStack>
        </VStack>
        <VStack minWidth={'70vw'} border={'solid 0.05px'}>
        <CodeEditor
      height="80vh"
      defaultLanguage="javascript"
      defaultValue="// hey! Welcome to CodeSHare by Saptarshi"
      language={language}
      theme={colorMode === 'dark' ? 'vs-dark' : 'vs-light'}
    />
        </VStack>

    </HStack>
  );
};

export default Editor;
