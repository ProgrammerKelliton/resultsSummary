// REACT NATIVE
import { Text, View } from "react-native";

// TYPES
import { Props } from "./summaryCategory.types";

export default function SummaryCategory({
  backgroundColor,
  Icon,
  name,
  pontuation,
  textColor,
}: Props) {
  return (
    <View
      className={`${backgroundColor} p-5 rounded-xl flex justify-between flex-row mb-4`}
    >
      <View className="flex items-center flex-row justify-between w-2/6">
        <Icon />
        <Text className={`${textColor} font-bold`}>{name}</Text>
      </View>

      <View className="flex flex-row">
        <Text className="font-bold text-[#303b5a]">{pontuation}</Text>
        <Text className="text-[#c8c7ff] font-medium"> / 100</Text>
      </View>
    </View>
  );
}
