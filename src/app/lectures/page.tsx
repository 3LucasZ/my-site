"use client";
import ProjectCard from "@/components/ProjectCard";
import RepositoryButton from "@/components/RepositoryButton";
import SlidesPlayer from "@/components/SlidesPlayer";
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
      <Title>PID Control</Title>
      <RepositoryButton href="https://github.com/3LucasZ/PID-Ball-Balancer" />
      <VideoPlayer src="/my-site/images/lectures/1.mov" />
      <SlidesPlayer id="1SsCilJ8_-xjefiHWK2HbyPFe_U8Yne45-TY5TJqPWLk" />
      <Title>Linear Programming</Title>
      <SlidesPlayer id="1QI23ldaP3E7aNKYEdA4NYThbPNhYLOIc6F2Kyz2p8-I" />
      <Title>Differential Drive Path Planning</Title>
      <SlidesPlayer id="19_3Enpmb7XumESu45YKt7CI6MsQEfUFTBCIkO0xmOqk" />
      <Title>Model-based Control</Title>
      <RepositoryButton href="https://github.com/3LucasZ/OctaveProjects" />
      <VideoPlayer src="/my-site/images/lectures/2.mov" />
      <SlidesPlayer id="1UqyjvtRFV6lkt6BIjRxQEEpnAoV-z98vRXAn3W6ilLo" />
    </Stack>
  );
}
