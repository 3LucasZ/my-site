"use client";

import {
  NavLink,
  AppShell,
  Burger,
  Title,
  Group,
  useMantineColorScheme,
  ActionIcon,
  useComputedColorScheme,
  Flex,
  Text,
  Stack,
  Space,
  Indicator,
  Divider,
  Container,
  Box,
  Tooltip,
  Kbd,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconDashboard,
  IconEye,
  IconSubmarine,
  IconBug,
  IconSettings,
  IconHome,
  IconCamera,
  IconSun,
  IconMoon,
  IconRefresh,
  IconReload,
  IconBrandGithub,
} from "@tabler/icons-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  //--ROUTER--
  const router = useRouter();

  //--COLOR MODE--
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  return (
    <Stack>
      <Group
        justify="end"
        flex={1}
        m={12}
        gap={12}
        pos={"absolute"}
        left={0}
        right={0}
      >
        <ActionIcon
          onClick={() => {
            router.push("/");
          }}
          variant="default"
          size="lg"
          aria-label="home"
        >
          <IconHome stroke={1.5} />
        </ActionIcon>
        <ActionIcon
          onClick={() => {
            router.push("https://github.com/3LucasZ");
          }}
          variant="default"
          size="lg"
          aria-label="github"
        >
          <IconBrandGithub stroke={1.5} />
        </ActionIcon>
        <ActionIcon
          onClick={() => {
            // updBodyColor();
            setColorScheme(computedColorScheme === "light" ? "dark" : "light");
          }}
          variant="default"
          size="lg"
          aria-label="Toggle color scheme"
        >
          {computedColorScheme === "dark" ? (
            <IconSun stroke={1.5} />
          ) : (
            <IconMoon stroke={1.5} />
          )}
        </ActionIcon>
      </Group>
      {children}
    </Stack>
  );
}
