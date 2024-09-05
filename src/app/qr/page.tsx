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
  AspectRatio,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconDeviceLaptop,
  IconFileTypePdf,
  IconSchool,
} from "@tabler/icons-react";
import { useQRCode } from "next-qrcode";
import { useRouter } from "next/navigation";
const cols = { base: 1, xs: 2, sm: 3, md: 3, lg: 4 };
export default function Home() {
  const router = useRouter();
  const theme = useMantineTheme();
  const computedColorScheme = useComputedColorScheme("light");
  const { Canvas } = useQRCode();
  return (
    <Stack>
      <Stack bg={computedColorScheme === "light" ? "red" : "blue"}>
        <Stack align="center">
          <Space h={"25"} />
          <Image src="/my-site/images/ljz.png" w={150} h={150} radius={150} />
          <Text
            size="25px"
            h="30px"
            fw={700}
            // variant="gradient"
            // gradient={{ from: "red", to: "orange", deg: 90 }}
            c={computedColorScheme === "light" ? "white" : theme.colors.dark[0]}
          >
            Lucas Zheng
          </Text>
          <Text
            size="15px"
            h="20px"
            fw={400}
            // c="red"
            c={computedColorScheme === "light" ? "white" : theme.colors.dark[0]}
          >
            Problem solver and programmer
          </Text>
        </Stack>
        <Wave />
      </Stack>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Stack w={"100%"}>
          <Text>Resume</Text>
          <AspectRatio ratio={1} w={"100%"}>
            <Canvas
              text={"https://3lucasz.github.io/my-site/images/resume.pdf"}
            />
          </AspectRatio>
        </Stack>
        <Stack>
          <Text>Website</Text>
          <Canvas text={"https://3lucasz.github.io/my-site/"} />
        </Stack>
      </SimpleGrid>
    </Stack>
  );
}
