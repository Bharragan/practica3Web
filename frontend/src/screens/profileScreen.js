// ProfileScreen.js
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import Config from 'react-native-config';
import ProfileInfo from '../components/profileInfo';
import FrameworksList from '../components/frameworksList';
import HobbiesList from '../components/hobbiesList';
import LoadingIndicator from '../components/loadingIndicator';
import EditProfileForm from '../components/editProfileForm';
import styles from '../styles'; // Asegúrate de importar los estilos adecuados

const apiUrl = Config.REACT_NATIVE_API_URL;

const ProfileScreen = () => {
  const defaultProfileData = {
    name: 'Nombre',
    lastname: 'Apellido',
    email: 'correo@example.com',
    city: 'Ciudad',
    country: 'País',
    summary: 'Este es un resumen por defecto.',
    frameworks: [],
    hobbies: [],
  };

  const [profileData, setProfileData] = useState(defaultProfileData);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/profile`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleSaveProfile = async (editedData) => {
    try {
      const response = await fetch(`${apiUrl}/api/profile/edit-profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedData),
      });

      if (response.ok) {
        setProfileData(editedData);
        setEditing(false);
      } else {
        console.error('Error saving profile data:', response.status);
        // Puedes manejar el error de manera adecuada (mostrar un mensaje, etc.)
      }
    } catch (error) {
      console.error('Error saving profile data:', error);
      // Puedes manejar el error de manera adecuada (mostrar un mensaje, etc.)
    }
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  return (
    <ScrollView style={styles.container}>
      {!editing ? (
        <View>
          <ProfileInfo profileData={profileData} onEditProfile={handleEditProfile} />
          <FrameworksList frameworks={profileData.frameworks} />
          <HobbiesList hobbies={profileData.hobbies} />
        </View>
      ) : (
        <EditProfileForm
          initialProfileData={profileData}
          onSave={handleSaveProfile}
          onCancel={handleCancelEdit}
        />
      )}

      {/* Indicador de carga */}
      {loading && <LoadingIndicator />}
    </ScrollView>
  );
};

export default ProfileScreen;
