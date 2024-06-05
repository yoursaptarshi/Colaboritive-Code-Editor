import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { GiChewedSkull } from "react-icons/gi";
const Nopage = () => {
  return (
    <VStack minHeight='80vh'  >
      <GiChewedSkull size={'30vh'}/>
      <Heading as='h2' size='xl' >OOPS!</Heading>
      <Heading as='h6' size='s' >No Page Found</Heading>
    </VStack>
  )
}

export default Nopage