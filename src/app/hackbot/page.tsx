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
        src={"/my-site/images/hackbot.png"}
        title={"Hackbot"}
        c1={"white"}
        c2={"grey"}
      />
      <Text>
        A robot capable of autonomous driving, VR teleoperation, and mapping.
        Part of research and development for the Quest Institute RoboQuest
        program.
      </Text>
      <VideoPlayer src="/my-site/images/hackbot/1.mp4" />
      <VideoPlayer src="/my-site/images/hackbot/7.mp4" />
      <Title order={3}>Robot</Title>
      <Group>
        <RepositoryButton href={"https://github.com/3LucasZ/ROS-scripts"} />
      </Group>
      <List>
        <List.Item>
          ROS scripts for controlling the robot with the provided control
          framework.
        </List.Item>
        <List.Item>
          The base robot chassis was provided, but everything else is cutom.
        </List.Item>
      </List>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        <Stack>
          <Image src="/my-site/images/hackbot/3.png" />
          <Text>Build 1</Text>
        </Stack>
        <Stack>
          <Image src="/my-site/images/hackbot/2.png" />
          <Text>Build 2</Text>
        </Stack>
        <Stack>
          <Image src="/my-site/images/hackbot/4.jpg" />
          <Text>Build 3</Text>
        </Stack>
      </SimpleGrid>
      <Title order={3}>Robot VR</Title>
      <Group>
        <RepositoryButton href={"https://github.com/3LucasZ/hackbot-vr"} />
      </Group>
      <List>
        <List.Item>
          Custom robot control framework to interface with the VR app.
        </List.Item>
      </List>
      <Title order={3}>VR App</Title>
      <Group>
        <RepositoryButton href="https://github.com/3LucasZ/hackbot-vr-app" />
      </Group>
      <List>
        <List.Item>Oculus Go Application made with Unity and C#.</List.Item>
        <List.Item>
          UDP for extremely fast video streaming and real-time joystick control.
        </List.Item>
      </List>
      <Title order={3}>Autonomous Robot</Title>
      <Group>
        <RepositoryButton href={"https://github.com/3LucasZ/hackbot-vr"} />
      </Group>
      <List>
        <List.Item>Streamlined data collection</List.Item>
        <List.Item>Model training from collected data</List.Item>
        <List.Item>
          Real time inference for behavioral cloning autonomous driving
        </List.Item>
      </List>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}></SimpleGrid>
      <Title order={5}>Virtual Donkey Car</Title>
      <VideoPlayer src={"/my-site/images/hackbot/5.mp4"} />
      <Title order={3}>Mapping Robot</Title>
      <RepositoryButton
        href={"https://github.com/3LucasZ/Raspberry-pi-web-control"}
      />
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        <Image src="/my-site/images/hackbot/6.jpeg" />
      </SimpleGrid>
      <List>
        <List.Item>2D lidar integration</List.Item>
        <List.Item>Custom robot control framework</List.Item>
        <List.Item>Websocket video streaming</List.Item>
      </List>
      <Title order={3}>Technology</Title>
      <Group>
        Robot
        <Tech name="ROS" />
        <Tech name="Python" />
        Robot VR
        <Tech name="Raspberry pi" />
        <Tech name="shellscript" />
        VR App
        <Tech name="c#" />
        <Tech name="meta" />
        Autonomous Robot
        <Tech name="Flask" />
        <Tech name="Socketio" />
        <Tech name="Tensorflow" />
        <Tech name="Keras" />
        <Tech name="Numpy" />
      </Group>
    </Stack>
  );
}
