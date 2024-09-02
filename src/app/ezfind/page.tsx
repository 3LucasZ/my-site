"use client";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import RepositoryButton from "@/components/RepositoryButton";
import Tech from "@/components/Tech";
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
} from "@mantine/core";

export default function Home() {
  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme("light");
  return (
    <Stack p={"xl"}>
      <Header
        src={"/my-site/images/ezfind.png"}
        title={"EZFind"}
        c1={"indigo"}
        c2={"grape"}
        date="April 2023 - January 2024"
      />
      <Group>
        <RepositoryButton href={"https://github.com/3LucasZ/EZFindV2"} />
        {/* <WebappButton href={"https://ezfind.questportal.org"} /> */}
      </Group>
      <Text>
        An innovative inventory management webapp used across school storages
        for efficient item filling and locating. Simplifies the management of
        users, organizations, storages, and inventory and integrates a QR-code
        system and automatic label printing functionality.
      </Text>
      <Text>{"<< Demo video in progress!! >>"}</Text>
      <Title order={3}>Made with</Title>
      <Group>
        Webapp
        <Tech name="typescript" />
        <Tech name="nextjs" />
        <Tech name="chakra" />
        <Tech name="prisma" />
        Deployment
        <Tech name="AWS" />
        <Tech name="nginx" />
        <Tech name="docker" />
      </Group>
    </Stack>
  );
}
