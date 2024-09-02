import { Center, Group, Image, Stack, Text } from "@mantine/core";

export default function Header({
  src,
  title,
  c1,
  c2,
  date,
  duotone,
}: {
  src: string;
  title: string;
  c1: string;
  c2: string;
  date?: string;
  duotone?: boolean;
}) {
  const gradientText = (
    <Text
      variant="gradient"
      gradient={{ from: c1, to: c2, deg: 90 }}
      size={"50px"}
      p={4}
      fw={800}
    >
      {title}
    </Text>
  );
  const duotoneText = (
    <Text size={"50px"} p={4} fw={800} c={c1}>
      {title.substring(0, 3)}
      <Text span size={"50px"} fw={800} c={c2}>
        {title.substring(3)}
      </Text>
    </Text>
  );
  return (
    <Stack>
      <Image src={src} mah={200} fit="contain" alt={title} />
      <Center>{duotone ? duotoneText : gradientText}</Center>
      {date && (
        <Center>
          <Text>{date}</Text>
        </Center>
      )}
    </Stack>
  );
}
