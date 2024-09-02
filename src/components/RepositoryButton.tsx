import { Button, Text } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function RepositoryButton({
  text,
  href,
}: {
  text?: string;
  href: string;
}) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(href)}
      leftSection={<IconBrandGithub />}
      variant="filled"
      color="black"
      maw={150}
    >
      <Text>{text ? text : "Repository"}</Text>
    </Button>
  );
}
