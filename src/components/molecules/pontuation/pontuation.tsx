// REACT NATIVE
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

// COMPONENTS
import Title from "../../atoms/title/title";

export default function Pontuation() {
  return (
    <LinearGradient
      colors={["#4e21ca", "#2421ca"]}
      className="flex justify-center items-center w-40 h-40 rounded-full m-7"
    >
      <Title text="76" fontSize={"text-medium"} />
      <Text
        style={{ fontFamily: "HankenGrotesk" }}
        className="text-[#c8c7ff] font-bold\"
      >
        of 100
      </Text>
    </LinearGradient>
  );
}
