import { Center, Image, Text } from "@mantine/core";

export default function Header({
  src,
  title,
  c1,
  c2,
}: {
  src: string;
  title: string;
  c1: string;
  c2: string;
}) {
  return (
    <>
      <Image src={src} mah={200} fit="contain" alt={title} />
      <Center>
        <Text
          variant="gradient"
          gradient={{ from: c1, to: c2, deg: 90 }}
          size={"50px"}
          p={4}
          fw={800}
        >
          {title}
        </Text>
      </Center>
    </>
  );
}
