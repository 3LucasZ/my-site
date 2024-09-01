"use client";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import RepositoryButton from "@/components/RepositoryButton";
import Wave from "@/components/Waves/Waves";
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
        src={"/my-site/images/ezcheck.png"}
        title={"EZCheck"}
        c1={"orange"}
        c2={"red"}
      />
      <Title>Module</Title>
      <RepositoryButton href={"https://github.com/3LucasZ/EZCheck2_Module"} />
      <SimpleGrid cols={3}>
        <Image src={"/my-site/images/ezcheck/5.png"}></Image>
        <Image src={"/my-site/images/ezcheck/6.png"}></Image>
        <Stack>
          <Image src={"/my-site/images/ezcheck/3.png"}></Image>
          Thank you to David Bai and Cory Duce for helping with the Schematic
          and PCB.
        </Stack>
        <Image src={"/my-site/images/ezcheck/4.png"}></Image>
        <Stack>
          <Image src={"/my-site/images/ezcheck/1.png"}></Image>
          Thank you to Jamin Xie for helping with the soldering.
        </Stack>
        <Image src={"/my-site/images/ezcheck/2.png"}></Image>
      </SimpleGrid>
      <Title>Dashboard</Title>
      <RepositoryButton href={"https://github.com/3LucasZ/ezcheck-v3"} />
    </Stack>
  );
}
