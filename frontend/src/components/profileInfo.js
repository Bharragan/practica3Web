// ProfileInfo.js
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles'; // Asegúrate de importar los estilos adecuados

const ProfileInfo = ({ profileData, onEditProfile }) => {
  return (
    <View>
      <TouchableOpacity onPress={onEditProfile} style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar</Text>
      </TouchableOpacity>

      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar5.png' }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>{profileData.name}</Text>

        <Text style={styles.label}>Apellido:</Text>
        <Text style={styles.value}>{profileData.lastname}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{profileData.email}</Text>

        <Text style={styles.label}>Ciudad:</Text>
        <Text style={styles.value}>{profileData.city}</Text>

        <Text style={styles.label}>Pais:</Text>
        <Text style={styles.value}>{profileData.country}</Text>

        <Text style={styles.label}>Resumen:</Text>
        <Text style={styles.value}>{profileData.summary}</Text>
      </View>
    </View>
  );
};

export default ProfileInfo;
