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
} from "@mantine/core";

export default function Home() {
  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme("light");
  return (
    <Stack p={"xl"}>
      <Header
        src={"/my-site/images/underwater360.png"}
        title={"Underwater360"}
        c1={"blue"}
        c2={"indigo"}
      />
      <Text>
        Software for a controllable underwater 360° camera system to enhance
        marine biology education through immersive experiences. Involves
        modifying an Insta360 camera by integrating it with a Khadas VIM4 SBC
        and creating an Android-based solution to interface with the camera.
        Includes a desktop app for remote camera operation, featuring
        interactive 360° live streaming and customizable capture settings.
      </Text>
      <Title>Under360</Title>
      <Group>
        <RepositoryButton href={"https://github.com/3LucasZ/Under360"} />
      </Group>
      <Title>Water360</Title>
      <Group>
        <RepositoryButton href={"https://github.com/3LucasZ/Water360"} />
      </Group>
      <Title>Technology</Title>
      <Group>
        Under360
        <Tech name="android" />
        <Tech name="kotlin" />
        Water360
        <Tech name="typescript" />
        <Tech name="nextjs" />
        <Tech name="mantine" />
        <Tech name="three" />
        <Tech name="electron" />
      </Group>
    </Stack>
  );
}
