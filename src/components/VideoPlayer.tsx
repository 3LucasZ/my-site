import { AspectRatio } from "@mantine/core";

export default function VideoPlayer({ src }: { src: string }) {
  return (
    <AspectRatio ratio={2} w="100%" maw={700}>
      <video src={src} controls></video>
    </AspectRatio>
  );
}
