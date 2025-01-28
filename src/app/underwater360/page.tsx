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
        src={"/my-site/images/underwater360.png"}
        title={"Underwater360"}
        c1={"blue"}
        c2={"indigo"}
        date="May 2023 - August 2024"
      />
      <Text>
        Software for a controllable underwater 360° camera system to enhance
        marine biology education through immersive experiences. Involves
        modifying an Insta360 camera by integrating it with a Khadas VIM4 SBC
        and creating an Android-based solution to interface with the camera.
        Includes a desktop app for remote camera operation, featuring
        interactive 360° live streaming and customizable capture settings.
      </Text>
      {/* <Text>{"<< Demo video in progress!! >>"}</Text> */}
      <Title order={2}>Under360</Title>
      <Group>
        <RepositoryButton href={"https://github.com/3LucasZ/Under360"} />
        <List>
          <List.Item>Android app that functions as a server.</List.Item>
          <List.Item>
            Accepts requests and performs operations on the camera.
          </List.Item>
        </List>
      </Group>
      <Title order={2}>Water360</Title>
      <Group>
        <RepositoryButton href={"https://github.com/3LucasZ/Water360"} />
      </Group>
      <SimpleGrid cols={{ base: 2, sm: 2, md: 2, lg: 3 }}>
        <Image src={"/my-site/images/water360/1.png"}></Image>
        <Image src={"/my-site/images/water360/2.png"}></Image>
      </SimpleGrid>
      <List>
        <List.Item>
          Desktop app that interacts with the host, Khadas, and Under360 app.
        </List.Item>
        <List.Item>
          Streamlining operations such as video previewing, youtube
          livestreaming, and media capture, downloading, and viewing.
        </List.Item>
        <List.Item>Built-in interactive 360 media viewer.</List.Item>
        <List.Item>
          Accepts requests and performs operations on the camera.
        </List.Item>
      </List>
      <Title order={3}>Using</Title>
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
