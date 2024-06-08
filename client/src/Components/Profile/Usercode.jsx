import { HStack, Heading, VStack ,Text, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { getCode } from '../../Actions/codeActions';
import cryptoRandomString from 'crypto-random-string';

const Usercode = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const {codeId} = useParams();
    const [Title,setTitle] = useState('title');
    const[Language,setLanguage]=useState('language');
    const[Versions,setVersions]=useState([]);
    
    useEffect(() => {
      dispatch(getCode(codeId))
      
    }, [dispatch])
    const {codeDetails} = useSelector((state)=>state.code)
    useEffect(()=>{
        console.log(codeDetails)
        if(codeDetails)
          {
            setTitle(codeDetails.Title);
        setLanguage(codeDetails.Language);
        setVersions(codeDetails.Versions)
          }
    },[codeDetails])

    const codeEditorLaunchHandler = (element)=>{
      const roomName = cryptoRandomString({ length:15, type: 'alphanumeric' });
      navigate(`/code/${roomName}/${codeId}/${element._id}`)
      console.log(codeId);
      console.log(element._id)
    }
  return (
    <VStack>
        <HStack>
        <Heading as='h6' size={'s'}>Title:</Heading>
        <Text>{Title}</Text>
        </HStack>
        <HStack>
        <Heading as='h6' size={'s'}>Language</Heading>
        <Text>{Language}</Text>
        </HStack>
        <Heading as='h6' size={'lg'}>Versions</Heading>
        <TableContainer>
  <Table variant='simple'>
    
    <Thead>
      <Tr>
        <Th>Version</Th>
        <Th>Date</Th>
      </Tr>
    </Thead>
    <Tbody>
    {Versions && Versions.length > 0 ? (
              Versions.map((element, index) => (
                <Tr onClick={()=>codeEditorLaunchHandler(element)} style={{cursor:'pointer'}}key={element._id || index}>
                  <Td>{index + 1}</Td>
                  <Td>{element.CreatedAt.split('T')[0]}</Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={2}>No versions available</Td>
              </Tr>
            )}
      
    </Tbody>
    
  </Table>
</TableContainer>
    </VStack>
  )
}

export default Usercode