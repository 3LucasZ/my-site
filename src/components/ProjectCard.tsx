"use client";
import {
  Card,
  Title,
  Image,
  Text,
  useMantineTheme,
  useComputedColorScheme,
  Center,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { Icon, IconProps } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import Tilt from "react-parallax-tilt";

export default function ProjectCard({
  src,
  Icon,
  title,
  description,
  link,
}: {
  src?: string;
  Icon?: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  title: string;
  description: string;
  link: string;
}) {
  const computedColorScheme = useComputedColorScheme("light");
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();
  const router = useRouter();
  const url = link.includes("http") ? link : "/" + link;

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.4}
      glarePosition="all"
      scale={1.02}
      perspective={1000}
    >
      <Card
        onClick={() => router.push(url)}
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
          {src ? (
            <Image src={src} height={160} fit="contain" alt={title} py={20} />
          ) : Icon ? (
            <Center>
              <Icon size={160} stroke={1.5} />
            </Center>
          ) : (
            "Error"
          )}
        </Card.Section>
        <Title order={2}>{title}</Title>
        <Text>{description}</Text>
      </Card>
    </Tilt>
  );
}
