import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import ProfileScreen from './screens/profileScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.flexContainer]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <ProfileScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexContainer: {
    flex: 1,
  },
});

export default App;
