import { AspectRatio } from "@mantine/core";

export default function VideoPlayer({
  src,
  ratio,
}: {
  src: string;
  ratio?: number;
}) {
  return (
    <AspectRatio ratio={ratio || 2} w="100%" maw={700}>
      <video src={src} controls></video>
    </AspectRatio>
  );
}
