"use client";
import Header from "@/components/Header";
import RepositoryButton from "@/components/RepositoryButton";
import Tech from "@/components/Tech";
import WebappButton from "@/components/WebappButton";
import { Stack, Title, Text, Group, Image, SimpleGrid } from "@mantine/core";

export default function Home() {
  return (
    <Stack p={"xl"}>
      <Header
        src={"/my-site/images/petarduino.png"}
        title={"My Pet Arduino"}
        c1={"yellow"}
        c2={"orange"}
      />
      <Text>
        An innovative inventory management webapp used across school storages
        for efficient item filling and locating. Simplifies the management of
        users, organizations, storages, and inventory and integrates a QR-code
        system and automatic label printing functionality.
      </Text>
      <Title>Project</Title>
      <Group>
        <RepositoryButton href={"https://github.com/3LucasZ/my-pet-arduino"} />
        <WebappButton href={"https://3lucasz.github.io/My-Pet-Arduino/HTML"} />
      </Group>
      <Image
        src="https://user-images.githubusercontent.com/72239682/126031693-65152aaa-a979-4996-a2a4-2abcac813ae9.gif"
        maw={700}
      />
      <SimpleGrid cols={3}>
        <Image src="https://user-images.githubusercontent.com/72239682/125380326-e5f22680-e346-11eb-92bd-1d29f4684639.GIF" />
        <Image src="https://user-images.githubusercontent.com/72239682/125383399-2ef8a980-e34c-11eb-8e5f-da17f2aa0e3d.gif" />
        <Image src="https://user-images.githubusercontent.com/72239682/125383427-3c159880-e34c-11eb-9e60-7500b264df80.gif" />
        <Image src="https://user-images.githubusercontent.com/72239682/125384602-070a4580-e34e-11eb-9a3e-e3b9429c337f.gif" />
      </SimpleGrid>
      <Title>Technology</Title>
      <Group>
        Module
        <Tech name="arduino" />
        <Tech name="tensorflow" />
        Site
        <Tech name="HTML" />
        <Tech name="javascript" />
      </Group>
    </Stack>
  );
}
