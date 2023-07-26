import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator, SettingsStackNavigator } from './StackNavigator';

type TabNavigator = {
  Home: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabNavigator>();

export const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ tabBarIconStyle: { display: 'none' }, headerShown: false }}>
    <Tab.Screen name="Home" component={MainStackNavigator} />
    <Tab.Screen name="Settings" component={SettingsStackNavigator} />
  </Tab.Navigator>
);
