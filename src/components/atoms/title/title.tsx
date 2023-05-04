import { Props } from "./title.types";
import { Text } from "react-native";

export default function Title({ text, fontSize }: Props) {
  return (
    <Text
      style={{ fontFamily: "HankenGrotesk" }}
      className={`font-extrabold text-white ${fontSize}`}
    >
      {text}
    </Text>
  );
}
