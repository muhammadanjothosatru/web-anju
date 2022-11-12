import {
  Container,
  useColorMode,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import Head from "next/head";
import saveAs from "file-saver";

export default function Home() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1TihnMT0tmJcVRd20Klfn-o8Khfb3Sagv/view?usp=share_link"
    );
  };
  return (
    <>
      <Head>
        <title>Home - Muhammad Anjotho Satru</title>
      </Head>
      <Container maxW="container.md" py={20}>
        <Container px={5} maxW="container.md">
          <Heading mb={2}>Hi, I'm Muhammad Anjotho Satru</Heading>
          <Text mb={8} color={colorSecondary[colorMode]}>
            Graduate from Computer Engineering at Institut Teknologi Sepuluh
            Nopember. I have passion in technology. Especially in Web
            Development, Cloud Computing, and Network
          </Text>
          <Button onClick={saveFile}>View Resume</Button>
        </Container>
      </Container>
    </>
  );
}
