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
    </Container>
    
  )
}
