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
      <Stack bg={computedColorScheme === "light" ? "red" : "blue"}>
        <Stack align="center">
          <Space h={"100"} />
          <Card withBorder shadow="sm" h={300} w={300} radius={200} p={0}>
            <Image src="/my-site/images/ljz.png" />
          </Card>
          <Text
            size="50px"
            h="60px"
            fw={700}
            // variant="gradient"
            // gradient={{ from: "red", to: "orange", deg: 90 }}
            c={computedColorScheme === "light" ? "white" : theme.colors.dark[0]}
          >
            Lucas Zheng
          </Text>
          <Text
            size="25px"
            h="30px"
            fw={400}
            // c="red"
            c={computedColorScheme === "light" ? "white" : theme.colors.dark[0]}
          >
            Problem solver and programmer
          </Text>
        </Stack>
        <Wave />
      </Stack>
      <Stack p={"xl"}>
        <Title>Projects</Title>
        <Text>Click any of the cards below for more information.</Text>
        <Title order={3}>Full-stack</Title>
        <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 3, lg: 4 }}>
          <ProjectCard
            src="/my-site/images/ezcheck.png"
            title="EZCheck"
            description="A novel authentication IoT system to secure maker lab tools."
            link=""
          />
          <ProjectCard
            src="/my-site/images/ezfind.png"
            title="EZFind"
            description="A novel inventory finding and tracking system."
            link=""
          />
          <ProjectCard
            src="/my-site/images/underwater360.png"
            title="Underwater360"
            description="A novel authentication IoT system to secure maker lab tools."
            link=""
          />
          <ProjectCard
            src="/my-site/images/flysafe.png"
            title="FlySafe"
            description="Cheapest, modern AGL plane flight altimeter."
            link="flysafe"
          />
        </SimpleGrid>
        <Title order={3}>Robotics</Title>
        <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 3, lg: 4 }}>
          <ProjectCard
            src="/my-site/images/ezcheck.png"
            title="EZCheck"
            description="A novel authentication IoT system to secure maker lab tools."
            link=""
          />
          <ProjectCard
            src="/my-site/images/ezcheck.png"
            title="EZCheck"
            description="A novel authentication IoT system to secure maker lab tools."
            link=""
          />
          <ProjectCard
            src="/my-site/images/ezcheck.png"
            title="EZCheck"
            description="A novel authentication IoT system to secure maker lab tools."
            link=""
          />
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
