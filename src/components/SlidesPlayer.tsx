import { AspectRatio, rem } from "@mantine/core";

export default function SlidesPlayer({ id }: { id: string }) {
  return (
    <AspectRatio ratio={2} w={"100%"} maw={700}>
      <iframe
        src={
          "https://docs.google.com/presentation/d/" +
          id +
          "/embed?start=false&loop=false&delayms=3000"
        }
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </AspectRatio>
  );
}
