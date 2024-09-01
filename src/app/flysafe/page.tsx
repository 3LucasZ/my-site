"use client";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import RepositoryButton from "@/components/RepositoryButton";
import SlidesPlayer from "@/components/SlidesPlayer";
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
        src={"/my-site/images/flysafe.png"}
        title={"FlySafe"}
        c1={"blue"}
        c2={"indigo"}
      />
      <Text>
        FlySafe is an affordable, modern AGL plane flight altimeter. The device
        helps amateur pilots improve their landing skills by delivering
        real-time visual and audio feedback integrated with aircraft sound
        systems. It is designed for easy and secure mounting on the plane wing.
        The project also includes a web app for real-time data monitoring,
        device configuration, and post-flight data analysis, providing pilots
        with insights to improve performance.
      </Text>

      <Title>North Aero Inc</Title>
      <AspectRatio ratio={2} w="100%" maw={1000}>
        <iframe
          frameBorder={0}
          src="https://player.vimeo.com/video/855576591?h=8358392323"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
      <Title>Module</Title>
      <RepositoryButton href={"https://github.com/3LucasZ/EZCheck2_Module"} />
      <SimpleGrid cols={3}>
        <Image src={"/my-site/images/flysafe/1.jpg"} />
        <Image src={"/my-site/images/flysafe/2.jpg"} />
        <Image src={"/my-site/images/flysafe/3.jpg"} />
      </SimpleGrid>
      <SlidesPlayer id="18bqkKovc0SLJF9rJ8Q3Yxa7ITi3hAPOzL8-3VdcD22E" />

      <Title>Dashboard</Title>
      <Group>
        <RepositoryButton
          href={"https://github.com/3LucasZ/FlySafe_Dashboard_2"}
        />
        <WebappButton href={"https://3lucasz.github.io/FlySafe_Dashboard_2/"} />
      </Group>
      <SimpleGrid cols={2}>
        <Image src={"/my-site/images/flysafe/4.png"} />
        <Image src={"/my-site/images/flysafe/5.png"} />
        <Image src={"/my-site/images/flysafe/6.png"} />
      </SimpleGrid>
      <Title>Technology Used</Title>
      <Group>
        <Tech name="espressif" />
        <Tech name="html5" />
        <Tech name="javascript" />
        <Tech name="tailwindcss" />
      </Group>
    </Stack>
  );
}
