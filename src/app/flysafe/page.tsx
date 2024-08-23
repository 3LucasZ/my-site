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
} from "@mantine/core";

export default function Home() {
  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme("light");
  return (
    <Stack>
      <iframe
        src="https://player.vimeo.com/video/855576591?h=8358392323"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Stack>
  );
}
