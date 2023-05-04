// REACT NATIVE
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

// COMPONENTS
import Pontuation from "../../molecules/pontuation/pontuation";
import HeaderText from "../../atoms/headerText/headerText";
import Title from "../../atoms/title/title";

export default function ResultPainel() {
  return (
    <LinearGradient
      colors={["#7857ff", "#2e2be9"]}
      className="w-screen py-10 flex justify-center items-center rounded-b-[50px]"
    >
      <HeaderText text="Your Result" />
      <Pontuation />

      <View className="w-2/3 flex items-center">
        <Title text="Great" fontSize={"text-small"} />
        <Text
          style={{ fontFamily: "HankenGrotesk" }}
          className="text-[#c8c7ff] text-center font-bold mt-2"
        >
          You scored higher than 65% of the people who have taken these tests.
        </Text>
      </View>
    </LinearGradient>
  );
}
