import { Button, Text } from "@mantine/core";
import { IconDevices } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function WebappButton({ href }: { href: string }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(href)}
      leftSection={<IconDevices />}
      variant="filled"
      maw={150}
    >
      <Text>Webapp</Text>
    </Button>
  );
}
