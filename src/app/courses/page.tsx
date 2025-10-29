"use client";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import RepositoryButton from "@/components/RepositoryButton";
import Tech from "@/components/Tech";
import VideoPlayer from "@/components/VideoPlayer";
import Wave from "@/components/Waves/Waves";
import WebappButton from "@/components/WebappButton";
import {
  Box,
  Card,
  Group,
  Image,
  Stack,
  Title,
  Text,
  Divider,
  SimpleGrid,
  Space,
  useComputedColorScheme,
  useMantineTheme,
  AspectRatio,
  rem,
  Center,
  Container,
  List,
} from "@mantine/core";

export default function Home() {
  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme("light");
  return (
    <Stack p={"xl"}>
      <Header
        src={"/my-site/images/courses.png"}
        title={"Course Projects"}
        c1={theme.colors.indigo[4]}
        c2={theme.colors.grape[4]}
      />

      <Title order={3}>
        BR-AI-N: A Proposal for the Responsible use of AI in Brain Tumor
        Treatment
      </Title>
      <Text>December 2025</Text>
      <Card withBorder maw={700} radius={"lg"} p={0} shadow="lg">
        <AspectRatio ratio={1}>
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vTsp4oLUHkWJxeu8_XhUu5_R4z0gBklJhQJinlDbzthEOdbHg9TEqRK4NRmHuPRiik2Td8FZn9-1f1o/pub?embedded=true"
            frameBorder={0}
          />
        </AspectRatio>
      </Card>
      <Divider my="md" />

      <Title order={3}>MusicMe: Real-Time Voice to Music Converter</Title>
      <Text>June 2024</Text>
      <Text>{"<< Documentation and demo video in progress!! >>"}</Text>
      <Text>Made with MaxMSP.</Text>
      <Divider my="md" />

      <Title order={3}>COVID 19 Data Analysis</Title>
      <Text>May 2024</Text>
      <Card withBorder maw={700} radius={"lg"} p={0} shadow="lg">
        <AspectRatio ratio={1}>
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vQTNGPveh8nxhIr4pU-W3Tmqb8N70Ff8kslKWVE1rh1WKF70VJ5VRdyWKdrmZamS2UaPL6FoBGfKI9U/pub?embedded=true"
            frameBorder={0}
          />
        </AspectRatio>
      </Card>
      <Text>Visualizations made with JMP.</Text>
    </Stack>
  );
}
