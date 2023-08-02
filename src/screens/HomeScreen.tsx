import { View, Text } from 'react-native';
import { styles } from '../styles';
import { Link } from 'expo-router';

export const HomeScreen = ({ navigation }: any) => (
  <>
    <View style={[styles.container, styles.home]}>
      <Text style={styles.text}>This is my home screen :)</Text>
      <Link href="/profile" style={styles.button}>
        <Text style={styles.buttonText}>See profile</Text>
      </Link>
      <Link href="/overflowing" style={styles.button}>
        <Text style={styles.buttonText}>See overflowing</Text>
      </Link>
      <Link href="/safeView" style={styles.button}>
        <Text style={styles.buttonText}>See not overflowing</Text>
      </Link>
    </View>
  </>
);
