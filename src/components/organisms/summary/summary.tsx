// REACT NATIVE
import { Text, TouchableOpacity, View } from "react-native";

// COMPONENTS
import SummaryCategory from "../../molecules/summaryCategory/summaryCategory";
import HeaderText from "../../atoms/headerText/headerText";

// SVG COMPONENTS
import IconReaction from "../../../../assets/icons/iconReaction";
import IconVisual from "../../../../assets/icons/iconVisual";
import IconMemory from "../../../../assets/icons/iconMemory";
import IconVerbal from "../../../../assets/icons/iconVerbal";

export default function Summary() {
  return (
    <View className="px-8 py-4">
      <HeaderText text="Summary" useBlackText />

      <View>
        <SummaryCategory
          backgroundColor="bg-red-100"
          Icon={IconReaction}
          name="Reaction"
          pontuation={80}
          textColor="text-red-500"
        />
        <SummaryCategory
          backgroundColor="bg-orange-100"
          Icon={IconMemory}
          name="Memory"
          pontuation={92}
          textColor="text-orange-500"
        />
        <SummaryCategory
          backgroundColor="bg-green-100"
          Icon={IconVerbal}
          name="Verbal"
          pontuation={61}
          textColor="text-green-500"
        />
        <SummaryCategory
          backgroundColor="bg-blue-100"
          Icon={IconVisual}
          name="Visual"
          pontuation={72}
          textColor="text-blue-500"
        />
      </View>

      <TouchableOpacity className="bg-[#303b5a] flex justify-center items-center rounded-3xl py-4">
        <Text className="text-white font-bold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
