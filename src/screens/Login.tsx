import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { useState } from "react";
import { StatusBar, View } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../components/Header";
import StyledButton from "../components/Buttons/StyledButton";
import CommonInput, { PasswordInput } from "../components/Input";

interface LoginProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const Login = (props: LoginProps): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function authenticate() {
    props.navigation.navigate("Profile");
    setPassword("");
    setUsername("");
  }

  return (
    <SafeAreaView style={STYLES.column}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText="Login" />
      <View style={[STYLES.container, STYLES.spaceBetweenRows24]}>
        <View style={STYLES.spaceBetweenRows12}>
          <CommonInput
            placeholder="Nome de usuário"
            autocomplete="username"
            value={username}
            setValue={setUsername}
          />
          <PasswordInput value={password} setValue={setPassword} />
        </View>
        <StyledButton text="Entrar" handlePress={authenticate} />
      </View>
    </SafeAreaView>
  );
};
export default Login;
