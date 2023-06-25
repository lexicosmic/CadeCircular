import STYLES from "../styles/styles";
import { StatusBar, View } from "react-native";
import COLORS from "../styles/colors";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../components/Header";
import TimeList from "../components/TimeList";
import RoutesBottomSheet from "../components/RouteBottomSheet";

interface PageProps {
  navigation: NativeStackNavigationProp<any, any>;
}
const ViewTime = (props: PageProps): JSX.Element => {
  return (
    <SafeAreaView style={STYLES.container}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText="ROTA" />
      <View>
        <TimeList/>
      </View>
    </SafeAreaView>
  );
};
export default ViewTime;