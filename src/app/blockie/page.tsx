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
        src={"/my-site/images/blockie.png"}
        title={"Blockie.io"}
        c1={theme.colors.green[4]}
        c2={theme.colors.teal[2]}
        date="September 2021"
      />
      <RepositoryButton href={"https://github.com/3LucasZ/blockie.io"} />
      <Text>Multiplayer fighting game inspired by moomoo.io.</Text>
      <Text>{"<< Demo video coming soon!! >>"}</Text>
      <List>
        <List.Item>Building</List.Item>
        <List.Item>Fighting</List.Item>
        <List.Item>Item bar + weapons</List.Item>
        <List.Item>Websocket server</List.Item>
      </List>
      <Title order={3}>Made with</Title>
      <Group>
        <Tech name="Flutter" />
        <Tech name="Dart" />
        <Tech name="Python" />
      </Group>
    </Stack>
  );
}
