// LoadingIndicator.js
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from '../styles'; // Asegúrate de importar los estilos adecuados

const LoadingIndicator = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#3498db" />
    </View>
  );
};

export default LoadingIndicator;
