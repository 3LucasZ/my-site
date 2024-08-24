import { Button, Text } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function RepositoryButton({ href }: { href: string }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(href)}
      leftSection={<IconBrandGithub />}
      variant="default"
      maw={150}
    >
      <Text>Repository</Text>
    </Button>
  );
}
