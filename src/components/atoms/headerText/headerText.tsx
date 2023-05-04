// REACT NATIVE
import { Text } from "react-native";

// TYPES
import { Props } from "./headerText.types";

export default function HeaderText({ text, useBlackText }: Props) {
  const textColor = useBlackText ? "text-[#303b5a]" : "text-[#c8c7ff]";

  return (
    <Text
      style={{ fontFamily: "HankenGrotesk" }}
      className={`${textColor} text-lg font-extrabold`}
    >
      {text}
    </Text>
  );
}
