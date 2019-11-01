import React from 'react';
import { StyleSheet } from 'react-native';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
        <Text>Serviços</Text>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Serviços Contratados',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
