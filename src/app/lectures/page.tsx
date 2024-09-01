"use client";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import RepositoryButton from "@/components/RepositoryButton";
import SlidesPlayer from "@/components/SlidesPlayer";
import Tech from "@/components/Tech";
import VideoPlayer from "@/components/VideoPlayer";
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
  Anchor,
  Button,
} from "@mantine/core";
import { IconBrandGithub, IconPhoto } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import ReactPlayer from "react-player";

export default function Home() {
  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme("light");
  const router = useRouter();
  return (
    <Stack p={"xl"}>
      <Header
        src={"/my-site/images/lecture.png"}
        title={"Lectures"}
        c1={theme.colors.pink[4]}
        c2={theme.colors.yellow[3]}
      />
      <Text>
        Here are some lectures I created and delivered on math and robotics to
        teach students! Topics: PID control, linear programming, differential
        drive path planning, and model-based control.
      </Text>
      <Title order={3}>PID Control</Title>
      <RepositoryButton href="https://github.com/3LucasZ/PID-Ball-Balancer" />
      <VideoPlayer src="/my-site/images/lectures/1.mov" />
      <SlidesPlayer id="1SsCilJ8_-xjefiHWK2HbyPFe_U8Yne45-TY5TJqPWLk" />
      <Group>
        <Tech name="arduino" />
        <Tech name="Python" />
      </Group>
      <Title order={3}>Linear Programming</Title>
      <SlidesPlayer id="1QI23ldaP3E7aNKYEdA4NYThbPNhYLOIc6F2Kyz2p8-I" />
      <Title order={3}>Differential Drive Path Planning</Title>
      <SlidesPlayer id="19_3Enpmb7XumESu45YKt7CI6MsQEfUFTBCIkO0xmOqk" />
      <Title order={3}>Model-based Control</Title>
      <RepositoryButton href="https://github.com/3LucasZ/OctaveProjects" />
      <VideoPlayer src="/my-site/images/lectures/2.mov" />
      <SlidesPlayer id="1UqyjvtRFV6lkt6BIjRxQEEpnAoV-z98vRXAn3W6ilLo" />
      <Group>
        <Tech name="octave" />
      </Group>
    </Stack>
  );
}
