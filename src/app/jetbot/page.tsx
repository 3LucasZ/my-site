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
  List,
} from "@mantine/core";

export default function Home() {
  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme("light");
  return (
    <Stack p={"xl"}>
      <Header
        src={"/my-site/images/jetbot.png"}
        title={"Jetbot"}
        c1={"teal"}
        c2={"green"}
      />
      <Text>
        A remotely teleoperated Jetson Nano robot. I built this project to
        explore the potential for a new school program. This includes a website
        for remote teleoperation and live camera streaming.
      </Text>
      <VideoPlayer src="/my-site/images/jetbot/2.mp4" />
      <Title order={3}>Robot</Title>
      <Group>
        <RepositoryButton href={"https://github.com/3LucasZ/jetbot-ws"} />
      </Group>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        <Image src="/my-site/images/jetbot/1.png" />
      </SimpleGrid>
      <Title order={3}>Controller</Title>
      <Group>
        <RepositoryButton
          href={"https://github.com/3LucasZ/jetbot-controller"}
        />
      </Group>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        <Image src="/my-site/images/jetbot/3.jpg" />
      </SimpleGrid>
      <List>
        <List.Item>Draggable dashboard components.</List.Item>
        <List.Item>Livestreaming with websockets.</List.Item>
        <List.Item>
          Rosbridge to connect between the web and the robot.
        </List.Item>
      </List>
      <Title order={3}>Technology</Title>
      <Group>
        Robot
        <Tech name="ROS2" />
        <Tech name="Python" />
        Controller
        <Tech name="react" />
      </Group>
    </Stack>
  );
}
