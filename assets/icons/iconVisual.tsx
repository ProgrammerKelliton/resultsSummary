import { Svg, Path } from "react-native-svg";

export default function IconVisual() {
  return (
    <Svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <Path
        stroke="#1125D6"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
      />
      <Path
        stroke="#1125D6"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.25"
        d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
      />
    </Svg>
  );
}
