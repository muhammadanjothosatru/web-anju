import {
  Container,
  Text,
  useColorMode,
  IconButton,
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import Head from 'next/head';

export default function Home() {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Container>
      <Head>
        <title>Home - Muhammad Anjotho Satru</title>
      </Head>
        {/* <Container
          my="40px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          >
            <Text>Hello, World!</Text>

            {colorMode === "light" ? (
              <IconButton
                my="20px"
                isRound
                color="gray.800"
                icon={<MoonIcon/>}
                variant="outline"
                onClick={toggleColorMode}
                />
            ) : (
              <IconButton
                my="20px"
                isRound
                color="yellow.500"
                icon={<SunIcon/>}
                variant="outline"
                onClick={toggleColorMode}
                />
            )
            }

        </Container> */}
    </Container>
    
  )
}
