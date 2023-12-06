import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import Config from 'react-native-config';

const apiUrl = Config.REACT_NATIVE_API_URL;

const EditProfileForm = ({ initialProfileData, onSave, onCancel }) => {
  const [editedProfileData, setEditedProfileData] = useState(initialProfileData);

  const handleSave = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/profile/edit-profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedProfileData),
      });

      if (response.ok) {
        onSave(editedProfileData);
      } else {
        Alert.alert('Error', 'Hubo un problema al intentar editar el perfil.');
      }
    } catch (error) {
      console.error('Error editing profile:', error);
      Alert.alert('Error', 'Hubo un problema al intentar editar el perfil.');
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  const addNewHobby = () => {
    const newHobby = { name: '', description: '' };
    setEditedProfileData({
      ...editedProfileData,
      hobbies: [...editedProfileData.hobbies, newHobby],
    });
  };

  const removeHobby = (index) => {
    const updatedHobbies = [...editedProfileData.hobbies];
    updatedHobbies.splice(index, 1);
    setEditedProfileData({
      ...editedProfileData,
      hobbies: updatedHobbies,
    });
  };

  const updateHobby = (index, field, value) => {
    const updatedHobbies = [...editedProfileData.hobbies];
    updatedHobbies[index][field] = value;
    setEditedProfileData({
      ...editedProfileData,
      hobbies: updatedHobbies,
    });
  };

  const addNewFramework = () => {
    const newFramework = { name: '', level: '', year: '' };
    setEditedProfileData({
      ...editedProfileData,
      frameworks: [...editedProfileData.frameworks, newFramework],
    });
  };

  const removeFramework = (index) => {
    const updatedFrameworks = [...editedProfileData.frameworks];
    updatedFrameworks.splice(index, 1);
    setEditedProfileData({
      ...editedProfileData,
      frameworks: updatedFrameworks,
    });
  };

  const updateFramework = (index, field, value) => {
    const updatedFrameworks = [...editedProfileData.frameworks];
    updatedFrameworks[index][field] = value;
    setEditedProfileData({
      ...editedProfileData,
      frameworks: updatedFrameworks,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={editedProfileData.name}
        onChangeText={(text) => setEditedProfileData({ ...editedProfileData, name: text })}
      />

      <Text style={styles.label}>Apellido:</Text>
      <TextInput
        style={styles.input}
        value={editedProfileData.lastname}
        onChangeText={(text) => setEditedProfileData({ ...editedProfileData, lastname: text })}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={editedProfileData.email}
        onChangeText={(text) => setEditedProfileData({ ...editedProfileData, email: text })}
      />

      <Text style={styles.label}>Ciudad:</Text>
      <TextInput
        style={styles.input}
        value={editedProfileData.city}
        onChangeText={(text) => setEditedProfileData({ ...editedProfileData, city: text })}
      />

      <Text style={styles.label}>País:</Text>
      <TextInput
        style={styles.input}
        value={editedProfileData.country}
        onChangeText={(text) => setEditedProfileData({ ...editedProfileData, country: text })}
      />

      <Text style={styles.label}>Resumen:</Text>
      <TextInput
        style={styles.textarea}
        multiline
        numberOfLines={8}
        value={editedProfileData.summary}
        onChangeText={(text) => setEditedProfileData({ ...editedProfileData, summary: text })}
      />

      <Text style={styles.label}>Hobbies:</Text>
      {editedProfileData.hobbies.map((hobby, index) => (
        <View key={index} style={styles.hobbyContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={hobby.name}
            onChangeText={(text) => updateHobby(index, 'name', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Descripción"
            value={hobby.description}
            onChangeText={(text) => updateHobby(index, 'description', text)}
          />
          <Button
            title="Eliminar"
            onPress={() => removeHobby(index)}
            color="#e74c3c"
          />
        </View>
      ))}
      <Button title="Añadir Hobby" onPress={addNewHobby} color="#3498db" />

      <Text style={styles.label}>Frameworks:</Text>
      {editedProfileData.frameworks.map((framework, index) => (
        <View key={index} style={styles.frameworkContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={framework.name}
            onChangeText={(text) => updateFramework(index, 'name', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Nivel"
            value={framework.level}
            onChangeText={(text) => updateFramework(index, 'level', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Año"
            value={framework.year.toString()}
            onChangeText={(text) => updateFramework(index, 'year', text)}
          />

          <Button
            title="Eliminar"
            onPress={() => removeFramework(index)}
            color="#e74c3c"
          />
        </View>
      ))}
      <Button
        title="Añadir Framework"
        onPress={addNewFramework}
        color="#3498db"
      />

      <View style={styles.buttonContainer}>
        <Button title="Guardar" onPress={handleSave} color="#3498db" />
        <View style={styles.buttonSpacer} />
        <Button title="Cancelar" onPress={handleCancel} color="#e74c3c" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonSpacer: {
    width: 10,
  },
  textarea: {
    height: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
  hobbyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  frameworkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default EditProfileForm;
