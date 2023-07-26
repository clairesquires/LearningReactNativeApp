import { View, Text } from "react-native";
import { styles } from "../styles";

export const ProfileScreen = () => (
  <View style={[styles.container, styles.profile]}>
    <Text style={styles.text}>Here is your profile</Text>
  </View>
);
