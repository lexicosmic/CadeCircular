import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { Driver } from "../types/types";
import { View } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CommonHeader from "../components/Header";
import { DriverButton } from "../components/buttons/DriverButton";
import { FlatList } from "react-native-gesture-handler";

interface SelectDriverProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const SelectDriver = (props: SelectDriverProps): JSX.Element => {
  function handlePress() {
    console.log("Apertou!");
  }

  return (
    <SafeAreaView style={STYLES.safeArea}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText="Motoristas" />
      <View>
        <FlatList
          data={[
            { key: "Devin" },
            { key: "Dan" },
            { key: "Dominic" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" },
          ]}
          renderItem={({ item }) => (
            <DriverButton driver={new Driver("0", item.key, "", "", "")} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectDriver;
