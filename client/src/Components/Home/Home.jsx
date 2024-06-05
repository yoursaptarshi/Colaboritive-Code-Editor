import React from 'react'
import { VStack, HStack, Box, Button, Heading, Text, Image } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect';
import LaptopImage from '../../assets/laptop.png'
import TeamCodingImage from '../../assets/code-with-team.jpeg'
import InterviewDeveloperImage from '../../assets/interview-developers.jpeg'
import TeachingPeopleImage from '../../assets/teach-people-coding.jpg'
const Home = () => {

    return (
        <VStack minHeight='80vh'  >
            <HStack style={{ display: 'flex', justifyContent: 'flex-start', width: '90vw', }}>
                <Box width='40vw' height='20vh' padding='2vw' backgroundColor={'#1E1E1E'} borderRadius={'1.5vh'} margin={'2vh 2vw'}>
                    <Heading as={'h6'} size={'xl'} color={'white'}>
                        <Typewriter
                            options={{
                                strings: ['Hello World!', 'Lorem Ipsum', 'CodeShare'],
                                autoStart: true,
                                loop: true,

                            }}
                        />
                    </Heading>
                </Box>
                <VStack>
                    <Heading as='h2' size='xl' >Colaborate and Code in Real-Time</Heading>
                    <Heading as='h6' size='xs' >An Online Code Editor With Colaborate and Code in Real-Time</Heading>
                    <Button backgroundImage={'linear-gradient(93deg, #53b2fe, #065af3)'} color='White' >Code Now</Button>
                </VStack>
            </HStack>
            <Box margin={'10vh 0'}>
                <Image src={LaptopImage} alt='Laptop Image' />
            </Box>
            <Heading
                as='h2'
                size='xl'
                backgroundImage={'linear-gradient(93deg, #53b2fe, #065af3)'}
                color='White'
                border="1px solid #065af3"
                borderRadius={'50vw'}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                padding={'1vw'}
            >
                Why Choose Us?
            </Heading>
            <HStack margin={'5vh 2vh'} alignItems='stretch'>
                <Box border={'solid 0.1px'} margin={'0  1vw'} padding='0 1vw' borderRadius={'1vw'}>
                    <VStack>
                        <Heading as='h6' size='lg' >Code with Team</Heading>
                        <Image src={TeamCodingImage} alt='Laptop Image' width={'15vw'} borderRadius={'50vw'} />
                        <Text >Collaboratively edit code in real-time with your team, ensuring seamless teamwork and productivity.</Text>
                    </VStack>
                </Box>

                <Box border={'solid 0.1px'} margin={'0  1vw'} padding='0 1vw' borderRadius={'1vw'}>
                    <VStack>
                        <Heading as='h6' size='lg' >Interview Developers</Heading>

                        <Image src={InterviewDeveloperImage} alt='Laptop Image' width={'15vw'} borderRadius={'50vw'} />

                        <Text >Conduct developer interviews seamlessly, with integrated coding environments for practical assessments and evaluations.</Text>
                    </VStack>
                </Box>

                <Box border={'solid 0.1px'} margin={'0  1vw'} padding='0 1vw' borderRadius={'1vw'}>
                    <VStack>
                        <Heading as='h6' size='lg' >Teach People</Heading>
                        <Image src={TeachingPeopleImage} alt='Laptop Image' width={'15vw'} borderRadius={'50vw'} />
                        <Text >Empower individuals to teach and learn coding skills through interactive coding tutorials and mentorship opportunities.</Text>
                    </VStack>
                </Box>
            </HStack>
        </VStack>
    )
}

export default Home