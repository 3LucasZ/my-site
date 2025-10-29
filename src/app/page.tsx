"use client";
import ProjectCard from "@/components/ProjectCard";
import RepositoryButton from "@/components/RepositoryButton";
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
  Center,
  Button,
  Container,
  Anchor,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconDeviceLaptop,
  IconFileTypePdf,
  IconSchool,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
const cols = { base: 1, xs: 2, sm: 3, md: 3, lg: 4 };
export default function Home() {
  const router = useRouter();
  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme("light");
  return (
    <Stack>
      <Stack bg={computedColorScheme === "light" ? "red" : "blue"}>
        <Stack align="center">
          <Space h={"100"} />

          <Image src="/my-site/images/ljz.png" w={300} h={300} radius={150} />

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
          <Center>
            <Group>
              {/* <Button
                onClick={() => router.push("/images/resume.pdf")}
                leftSection={<IconFileTypePdf />}
                variant="filled"
                color="red"
                maw={150}
                style={{
                  borderColor: computedColorScheme === "light" ? "white" : "",
                }}
              >
                <Text>{"Resume"}</Text>
              </Button> */}
              <Button
                onClick={() => router.push("https://github.com/3LucasZ")}
                leftSection={<IconBrandGithub />}
                variant="filled"
                color="black"
                maw={150}
              >
                <Text>{"Github"}</Text>
              </Button>
              <Button
                onClick={() =>
                  router.push(
                    "https://www.linkedin.com/in/lucas-zheng-7bbb60245/"
                  )
                }
                leftSection={<IconBrandLinkedin />}
                variant="filled"
                color="#0a66c2"
                maw={150}
                style={{
                  borderColor: computedColorScheme === "dark" ? "white" : "",
                }}
              >
                <Text>{"LinkedIn"}</Text>
              </Button>
            </Group>
          </Center>
        </Stack>
        <Wave />
      </Stack>
      <Stack p={"xl"}>
        <SimpleGrid cols={cols}>
          <ProjectCard
            src="/my-site/images/ezcheck.png"
            title="EZCheck"
            description="A novel authentication IoT system to secure maker lab tools."
            link="ezcheck"
          />
          <ProjectCard
            src="/my-site/images/ezfind.png"
            title="EZFind"
            description="A novel inventory finding and tracking system."
            link="ezfind"
          />
          <ProjectCard
            src="/my-site/images/underwater360.png"
            title="Underwater360"
            description="A novel authentication IoT system to secure maker lab tools."
            link="underwater360"
          />
          <ProjectCard
            src="/my-site/images/flysafe.png"
            title="FlySafe"
            description="Cheapest, modern AGL plane flight altimeter."
            link="flysafe"
          />
          <ProjectCard
            src="/my-site/images/profai.png"
            title="ProfAI"
            description="Have you ever felt lost watching a lecture? Meet ProfAI, your professor's virtual clone who answers any question you have, instantly!"
            link="https://devpost.com/software/profai"
          />
          <ProjectCard
            src="/my-site/images/bubby.png"
            title="Bubby Bear"
            description="An emotionally intelligent teddy that detects how a child feels and guides them through missions that build emotional and social skills."
            link="https://devpost.com/software/bubbybear"
          />
          <ProjectCard
            src="/my-site/images/petarduino.png"
            title="Pet Arduino"
            description="An interactive pet powered by edge AI. Submission for Google's TensorflowLite for Microcontrollers Challenge."
            link="petarduino"
          />
          <ProjectCard
            src="/my-site/images/jetbot.png"
            title="Jetbot"
            description="A remotely teleoperated Jetson Nano robot with a customizable dashboard."
            link="jetbot"
          />
          <ProjectCard
            src="/my-site/images/hackbot.png"
            title="Hackbot"
            description="A robot capable of autonomous driving, VR teleoperation, and SLAM with LiDAR."
            link="hackbot"
          />
          <ProjectCard
            src="/my-site/images/lecture.png"
            title="Lectures"
            description="Some lectures and demos Ive given."
            link="lectures"
          />
          <ProjectCard
            src="/my-site/images/courses.png"
            title="Course Projects"
            description="Projects I made for courses I took."
            link="courses"
          />
          <ProjectCard
            src="/my-site/images/blockie.png"
            title="blockie.io"
            description="Multiplayer fighting game inspired by moomoo.io"
            link="blockie"
          />
          <ProjectCard
            src="/my-site/images/ezgimbal.png"
            title="EZGimbal"
            description="A controllable 3-axis auto-stabilizing gimbal."
            link="ezgimbal"
          />
        </SimpleGrid>
        {/* <Title>Other work</Title> */}
        {/* <Text size="xl">
          I do freelancing and have made websites for 2 businesses.
        </Text> */}
        {/* <Text size="xl">
          One of my hobbies is competitive programming. I've solved over 1000
          problems so far.
        </Text>
        <Anchor href="https://github.com/3LucasZ/CP" size="xl">
          Java Solutions
        </Anchor>
        <Anchor href="https://github.com/3LucasZ/CP_C" size="xl">
          C++ Solutions
        </Anchor> */}
        {/* <Title order={3}>Hobbies</Title> */}
      </Stack>
    </Stack>
  );
}
