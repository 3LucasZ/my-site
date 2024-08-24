"use client";
import {
  Card,
  Title,
  Image,
  Text,
  useMantineTheme,
  useComputedColorScheme,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useRouter } from "next/navigation";

export default function ProjectCard({
  src,
  title,
  description,
  link,
}: {
  src: string;
  title: string;
  description: string;
  link: string;
}) {
  const computedColorScheme = useComputedColorScheme("light");
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push("/" + link)}
      withBorder
      shadow="sm"
      radius={"lg"}
      ref={ref}
      style={
        hovered
          ? {
              outlineColor:
                computedColorScheme === "light"
                  ? theme.colors.red[3]
                  : theme.colors.blue[3],
              outlineWidth: 5,
              outlineStyle: "solid",
              cursor: "grab",
            }
          : {}
      }
    >
      <Card.Section>
        <Image src={src} height={160} fit="contain" alt="ezcheck" py={20} />
      </Card.Section>
      <Title order={2}>{title}</Title>
      <Text>{description}</Text>
    </Card>
  );
}
