import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CreateStoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CreateStory</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});