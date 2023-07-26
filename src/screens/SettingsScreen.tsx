import { View, Text } from 'react-native';
import { styles } from '../styles';

export const SettingsScreen = () => (
  <View style={[styles.container, styles.settings]}>
    <Text style={styles.text}>Set your settings here...</Text>
  </View>
);
