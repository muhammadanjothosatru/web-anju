import {
  Container, useColorMode, Stack, Flex, Heading, Text, Button
} from '@chakra-ui/react'
import Head from 'next/head';
import saveAs from 'file-saver'

export default function Home() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1TihnMT0tmJcVRd20Klfn-o8Khfb3Sagv/view?usp=share_link"
    );
  }
  return (
    <Container>
      <Head>
        <title>Home - Muhammad Anjotho Satru</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          py={20}
        >
          
          <Heading mb={2}>Hi, I'm Muhammad Anjotho Satru</Heading>
          <Text color={colorSecondary[colorMode]}>Graduate from Computer Engineering at Institut Teknologi Sepuluh Nopember. I have passion in technology. Especially in Web Development, Cloud Computing, and Network</Text>
          <br></br>
          <Button onClick={saveFile}>View Resume</Button>
        </Flex>
      </Stack>
    </Container>
    
  )
}
