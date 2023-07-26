import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerNavigator } from './DrawerNavigator';
import { TabNavigator } from './TabNavigator';

const Tab = createBottomTabNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
