// InicioScreen.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InicioScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pantalla de Inicio</Text>
      {/* Puedes agregar contenido adicional de la pantalla de inicio aquí */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InicioScreen;
