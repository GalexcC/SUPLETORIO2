import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';

const Screen1: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handlePress = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Screen2',
      })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Button title="Acceder" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Screen1;
