import * as React from 'react';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { HorizonList } from 'react-native-horizon-list';

type TData = {
  id: number;
  title: string;
};

const DATA: TData[] = [
  {
    id: 1,
    title: 'First',
  },
  {
    id: 2,
    title: 'Second',
  },
  {
    id: 3,
    title: 'Third',
  },
  {
    id: 4,
    title: 'Fourth',
  },
  {
    id: 5,
    title: 'Fifth',
  },
  {
    id: 6,
    title: 'Sixth',
  },
  {
    id: 7,
    title: 'Seventh',
  },
];

export default function App() {
  return (
    <SafeAreaView>
      <HorizonList data={DATA} contentContainerStyle={styles.listWrapper}>
        {DATA.map((item, index) => (
          <View
            style={[styles.container, !!index && styles.startSpace]}
            key={index}
          >
            <Text>{item.title}</Text>
          </View>
        ))}
      </HorizonList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: '#6bbdb7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  listWrapper: {
    paddingHorizontal: 12,
  },
  secondListWrapper: {
    marginTop: 12,
  },
  startSpace: { marginStart: 10 },
});
