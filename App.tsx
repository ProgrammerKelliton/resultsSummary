// REACT NATIVE
import * as SlashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

// COMPONENTS
import ResultPainel from "./src/components/organisms/resultPainel/resultPainel";
import Summary from "./src/components/organisms/summary/summary";

// REACT
import { useCallback } from "react";
import { View } from "react-native";

SlashScreen.preventAutoHideAsync();

export default function App() {
  const fontPath = "./assets/fonts/HankenGrotesk-VariableFont_wght.ttf";

  const [fontsLoaded] = useFonts({
    HankenGrotesk: require(fontPath),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SlashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View className="flex-1 bg-white" onLayout={onLayoutRootView}>
      <ResultPainel />
      <Summary />
      <StatusBar style="auto" />
    </View>
  );
}
