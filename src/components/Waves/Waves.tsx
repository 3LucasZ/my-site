import classes from "@/components/Waves/Waves.module.css";
import { useComputedColorScheme } from "@mantine/core";
export default function Wave() {
  //--COLOR MODE--
  const computedColorScheme = useComputedColorScheme("light");
  const waveColor =
    computedColorScheme === "light" ? "255,255,255" : "36,36,36";
  return (
    <div>
      <svg
        className={classes.waves}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className={classes.parallax}>
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill={"rgba(" + waveColor + ",0.7"}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill={"rgba(" + waveColor + ",0.5"}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill={"rgba(" + waveColor + ",0.3)"}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            fill={"rgba(" + waveColor + ",1)"}
          />
        </g>
      </svg>
    </div>
  );
}
