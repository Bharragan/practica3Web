// FrameworksList.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles'; // Asegúrate de importar los estilos adecuados

const Separator = () => <View style={localStyles.separator} />;

const FrameworksList = ({ frameworks }) => {
  return (
    <View>
      <Text style={styles.label}>Frameworks:</Text>
      {frameworks.map((framework, index) => (
        <View key={index}>
          <View style={styles.frameworkContainer}>
            <Text style={styles.subLabel}>Nombre:</Text>
            <Text style={styles.subValue}>{framework.name}</Text>

            <Text style={styles.subLabel}>Nivel:</Text>
            <Text style={styles.subValue}>{framework.level}</Text>

            <Text style={styles.subLabel}>Año:</Text>
            <Text style={styles.subValue}>{framework.year}</Text>

            <View style={styles.ratingContainer}>
              {Array.from({ length: framework.rating }, (_, i) => (
                <Text key={i} style={styles.ratingStar}>⭐</Text>
              ))}
            </View>
          </View>
          {index < frameworks.length - 1 && <Separator />}
        </View>
      ))}
    </View>
  );
};

const localStyles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
});

export default FrameworksList;
