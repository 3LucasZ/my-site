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
        src={"/my-site/images/ezgimbal.png"}
        title={"EZGimbal"}
        c1={"blue"}
        c2={"teal"}
      />
      <Text>
        A controllable 3-axis auto-stabilizing gimbal project: modified a
        RoninSC Gimbal with a serial inverter and SBUS, developed a ROS node for
        robot integration, and streamed stereoscopic camera to a VR headset.
      </Text>
      <Text>Co-developed with Advay Balakrishnan.</Text>
      <Title order={3}>Project</Title>
      <Group>
        <RepositoryButton
          href={"https://github.com/VCHS-R-D/Ronin-SC-Gimbal-Controller"}
        />
      </Group>{" "}
      <Container maw="50%">
        <VideoPlayer src="/my-site/images/ezgimbal/1.mp4" ratio={1 / 2} />
      </Container>
      <List>
        <List.Item>10 stars on GitHub!</List.Item>
        <List.Item>
          Gimbal could respond to velocities but not absolute positions
        </List.Item>
        <List.Item>
          Lost the stereoscoping streaming code. That part of the project was
          abandoned due to not being able to control the absolute position of
          the gimbal.
        </List.Item>
      </List>
      <Title order={3}>Technology</Title>
      <Group>
        <Tech name="ROS" />
        <Tech name="Arduino" />
        <Tech name="Raspberry Pi" />
      </Group>
    </Stack>
  );
}
