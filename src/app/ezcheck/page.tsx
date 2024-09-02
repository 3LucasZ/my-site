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
  List,
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
        date="November 2022 - June 2024"
      />
      <Text>
        A novel IoT authentication system to secure maker lab tools. Designed to
        provide enhanced security and controlled access to school’s expensive
        machines. Includes a full-stack platform for administrators to manage
        students, supervisors, and machines, streamlining operations.
      </Text>
      <Title>Module</Title>
      <RepositoryButton href={"https://github.com/3LucasZ/EZCheck2_Module"} />
      <SimpleGrid cols={3}>
        <Stack>
          <Image src={"/my-site/images/ezcheck/5.png"}></Image>
          <Text> Prototyping...</Text>
        </Stack>
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
        <Stack>
          <Image src={"/my-site/images/ezcheck/2.png"}></Image>
          <Text>Fabricating many modules.</Text>
        </Stack>
      </SimpleGrid>
      <List>
        <List.Item>Module is configurable via website.</List.Item>
        <List.Item>Each module interacts with a central server.</List.Item>
      </List>
      <Title>Dashboard</Title>
      <Group>
        <RepositoryButton href={"https://github.com/3LucasZ/ezcheck-v3"} />
        <WebappButton href={"https://ezcheck.questportal.org"} />
      </Group>
      <Text>{"<< Demo video in progress!! >>"}</Text>
      <List>
        <List.Item>
          Compatible with both computers and mobile devices.
        </List.Item>
        <List.Item>User pre-registration and email invites.</List.Item>
        <List.Item>
          Interactive 3D EZCheck simulator for added coolness.
        </List.Item>
      </List>
      <Title>Technology</Title>
      <Group>
        Module
        <Tech name="arduino" />
        <Tech name="espressif" />
        <Tech name="C++" />
        Webapp
        <Tech name="typescript" />
        <Tech name="nextjs" />
        <Tech name="chakra" />
        <Tech name="prisma" />
        <Tech name="three" />
        Deployment
        <Tech name="AWS" />
        <Tech name="nginx" />
        <Tech name="docker" />
      </Group>
    </Stack>
  );
}
