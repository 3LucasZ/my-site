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
      <Text>Projects I made for courses I took.</Text>
      <Title order={3}>COVID 19 Data Analysis</Title>
      <Text>May 2024</Text>
      <Card withBorder maw={700} radius={"lg"} p={0} shadow="lg">
        <AspectRatio ratio={1}>
          <iframe
            src="https://docs.google.com/document/d/1pb-z1GuudQM58UyBkH-goRrfM3neAUDfWOA6ei8o0O8/pub?embedded=true"
            frameBorder={0}
          />
        </AspectRatio>
      </Card>
      <Text>Visualizations made with JMP.</Text>
      <Title order={3}>Voice to Music</Title>
      <Text>June 2024</Text>
      <Text>{"<< Documentation and demo video in progress!! >>"}</Text>
    </Stack>
  );
}
