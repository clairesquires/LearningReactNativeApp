import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    fontSize: 30,
  },
  home: {
    backgroundColor: '#FFC6FF',
  },
  profile: {
    backgroundColor: '#FFC6FF',
  },
  settings: {
    backgroundColor: '#CAFFBF',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 2,
    backgroundColor: '#6CA6C1',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: 'white',
  },
});
