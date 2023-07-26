import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TabNavigator } from "./TabNavigator";
import { SettingsStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
  </Drawer.Navigator>
);
