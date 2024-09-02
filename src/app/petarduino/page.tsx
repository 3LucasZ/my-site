"use client";
import Header from "@/components/Header";
import RepositoryButton from "@/components/RepositoryButton";
import Tech from "@/components/Tech";
import WebappButton from "@/components/WebappButton";
import {
  Stack,
  Title,
  Text,
  Group,
  Image,
  SimpleGrid,
  Center,
} from "@mantine/core";

export default function Home() {
  return (
    <Stack p={"xl"}>
      <Header
        src={"/my-site/images/petarduino.png"}
        title={"My Pet Arduino"}
        c1={"yellow"}
        c2={"orange"}
        date="May 2021 - June 2021"
      />
      <Group>
        <RepositoryButton href={"https://github.com/3LucasZ/my-pet-arduino"} />
        <WebappButton href={"https://3lucasz.github.io/My-Pet-Arduino/HTML"} />
      </Group>
      <Text>
        {`This project was my submission to Google\'s TensorflowLite for
        Microcontrollers Challenge. It is an interactive AI-powered Arduino pet
        integrating Arduino Nano, BLE, IMU, and Tensorflow to enable real-time
        \"pet emotion\" tracking. The project also involved creating a website to
        monitor the pet\'s emotions. Self-taught myself TinyML through EdX
        Harvard courses.`}
      </Text>
      <Center>
        <Stack>
          <Image
            src="https://user-images.githubusercontent.com/72239682/126031693-65152aaa-a979-4996-a2a4-2abcac813ae9.gif"
            maw={700}
          />
          <SimpleGrid cols={{ base: 3, sm: 4 }} maw={700}>
            <Image src="https://user-images.githubusercontent.com/72239682/125380326-e5f22680-e346-11eb-92bd-1d29f4684639.GIF" />
            <Image src="https://user-images.githubusercontent.com/72239682/125383399-2ef8a980-e34c-11eb-8e5f-da17f2aa0e3d.gif" />
            <Image src="https://user-images.githubusercontent.com/72239682/125383427-3c159880-e34c-11eb-9e60-7500b264df80.gif" />
            <Image src="https://user-images.githubusercontent.com/72239682/125384602-070a4580-e34e-11eb-9a3e-e3b9429c337f.gif" />
          </SimpleGrid>
        </Stack>
      </Center>
      <Title order={3}>Made with</Title>
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
