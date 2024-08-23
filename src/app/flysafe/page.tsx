"use client";
import ProjectCard from "@/components/ProjectCard";
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
      <Title>North Aero Inc Video</Title>
      <iframe
        width="640"
        height="360"
        frameBorder={0}
        src="https://player.vimeo.com/video/855576591?h=8358392323"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Stack>
  );
}
