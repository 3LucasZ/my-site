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
  List,
  Anchor,
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
        date="April 2023 - January 2024"
      />
      <Text>
        FlySafe is an affordable, modern AGL plane flight altimeter. It helps
        amateur pilots improve their landing skills by delivering real-time
        visual and audio feedback integrated with aircraft sound systems. The
        project includes a web app for real-time data monitoring, device
        configuration, and post-flight data analysis, providing pilots with
        insights to improve performance.
      </Text>
      <AspectRatio ratio={2} w="100%" maw={1000}>
        <iframe
          frameBorder={0}
          src="https://player.vimeo.com/video/855576591?h=8358392323"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
      Thank you to North Aero Inc for the support!
      <Title order={2}>Module</Title>
      <RepositoryButton
        href={"https://github.com/3LucasZ/FlySafe-Module-Ardesp"}
      />
      <SimpleGrid cols={3}>
        <Stack>
          <Image src={"/my-site/images/flysafe/1.jpg"} />
          Failed designs.
        </Stack>
        <Image src={"/my-site/images/flysafe/2.jpg"} />
        <Stack>
          <Image src={"/my-site/images/flysafe/3.jpg"} />
          Easy mounting on the wing.
        </Stack>
      </SimpleGrid>
      <SlidesPlayer id="18bqkKovc0SLJF9rJ8Q3Yxa7ITi3hAPOzL8-3VdcD22E" />
      <Title order={2}>Dashboard</Title>
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
      <List>
        <List.Item>
          Compatible with most mobile devices such as iPads and iPhones.
        </List.Item>
      </List>
      <Title order={2}>Old versions</Title>
      <List>
        <List.Item>
          The first module connected to the airplane’s sound system via A2DP
          Bluetooth protocol and streamed sound call-outs.
        </List.Item>
        <List.Item>
          The second module streamed altimeter data to the airplane’s onboard
          tablet using Bluetooth Low Energy. I also developed a dashboard for
          the device.{" "}
        </List.Item>
        <List.Item>
          The next versions fixed bugs, added small features like different
          auditory feedback types, and incorporated an airplane friendly design.
        </List.Item>
        <List.Item>
          Below are some links with scattered code from the old versions.
        </List.Item>
      </List>
      <Group>
        {/* Module #1:{" "} */}
        <Anchor href="https://github.com/3LucasZ/Flysafe_Module">Link 1</Anchor>
        {/* Module #2:{" "} */}
        <Anchor href="https://github.com/3LucasZ/FlySafe-Module-Vwss">
          Link 2
        </Anchor>
        <Anchor href="https://github.com/3LucasZ/FlySafe_Dashboard">
          Link 3
        </Anchor>
      </Group>
      <Title order={3}>Made with</Title>
      <Group>
        Module
        <Tech name="espressif" />
        <Tech name="C++" />
        Dashboard
        <Tech name="html5" />
        <Tech name="javascript" />
        <Tech name="tailwindcss" />
      </Group>
    </Stack>
  );
}
