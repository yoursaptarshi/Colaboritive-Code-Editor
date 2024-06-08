import React from 'react'
import {HStack, VStack,Image, Heading, Text, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
const Profile = () => {
  const navigate = useNavigate();
    const {user} = useSelector((state)=>state.user)
    const codeSeletHandler = (codeId)=>{
      navigate(`/user-codes/${codeId}`)
    }
  return (
    <VStack height={'80vh'}>
        
        <HStack>
            <Heading as={'h6'} size={'s'} color={'white'}>
                Name:
            </Heading>
            <Text>{user.Name}</Text>
            </HStack>
            <HStack>
            <Heading as={'h6'} size={'s'} color={'white'}>
                UserName:
            </Heading>
            <Text>{user.UserName}</Text>
            </HStack>

        <VStack>
        <TableContainer>
  <Table variant='simple'>
    
    <Thead>
      <Tr>
        <Th>Title</Th>
        <Th>Language</Th>
        <Th>Last Modified</Th>
      </Tr>
    </Thead>
    <Tbody>
     { user && user.CodeBase ?
      (
        user.CodeBase.map((element,index)=>{
          return  <Tr key ={index}>
             <Td onClick={() => codeSeletHandler(element.codeBaseId)}>{element.title}</Td>
             <Td>{element.language}</Td>
             <Td>{element.modified.split('T')[0]}</Td>
           </Tr>
         })
      )
      :
      (
        null
      )
     }
      
    </Tbody>
    
  </Table>
</TableContainer>
        </VStack>  
    </VStack>
  )
}

export default Profile