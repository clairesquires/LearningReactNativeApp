import { View, Text, Button } from 'react-native';
import { styles } from '../styles';

export const HomeScreen = ({ navigation }: any) => (
  <View style={[styles.container, styles.home]}>
    <Text style={styles.text}>This is my home screen :)</Text>
    <Button
      title="See profile"
      onPress={() => navigation.navigate('Profile')} // We added an onPress event which would navigate to the About screen
    />
  </View>
);
