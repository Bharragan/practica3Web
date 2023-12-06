// HobbiesList.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles'; // Asegúrate de importar los estilos adecuados

const Separator = () => <View style={localStyles.separator} />;

const HobbiesList = ({ hobbies }) => {
  return (
    <View>
      <Text style={styles.label}>Hobbies:</Text>
      {hobbies.map((hobby, index) => (
        <View key={index}>
          <View style={styles.hobbyContainer}>
            <Text style={styles.subLabel}>Nombre:</Text>
            <Text style={styles.subValue}>{hobby.name}</Text>

            <Text style={styles.subLabel}>Descripcion:</Text>
            <Text style={styles.subValue}>{hobby.description}</Text>
          </View>
          {index < hobbies.length - 1 && <Separator />}
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

export default HobbiesList;
