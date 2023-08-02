import { View, Text, Pressable } from 'react-native';
import { styles } from '../styles';
import { Link } from 'expo-router';

export const HomeScreen = () => (
  <View style={[styles.container, styles.home]}>
    <Text style={styles.h1}>This is my home screen :)</Text>
    <Link href="/profile" style={styles.button}>
      <Text style={styles.buttonText}>See profile</Text>
    </Link>
    <Link href="/overflowing" style={styles.button}>
      <Text style={styles.buttonText}>See overflowing</Text>
    </Link>
    <Link href="/safeView" style={styles.button}>
      <Text style={styles.buttonText}>See not overflowing</Text>
    </Link>
    <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
      <Text style={styles.buttonText}>My pressable</Text>
    </Pressable>
    <Link href="/list" style={styles.button}>
      <Text style={styles.buttonText}>My list</Text>
    </Link>
  </View>
);
