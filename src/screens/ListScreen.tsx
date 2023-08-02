import { FlatList, Text, View } from 'react-native';
import { styles } from '../styles';

type Skill = {
  name: string;
};

export const ListScreen = () => {
  const rnSkills: Skill[] = [
    { name: 'Pressable' },
    { name: 'Flat list' },
    { name: 'Safe area view' },
    { name: 'Expo router navigation' },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>My RN Skills</Text>
      <FlatList
        data={rnSkills}
        renderItem={({ item }) => {
          return <Text style={styles.text}>💡{item.name}</Text>;
        }}
      />
    </View>
  );
};
