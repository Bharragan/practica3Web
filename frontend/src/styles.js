// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  editButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  infoContainer: {
    marginTop: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginTop: 5,
  },
  frameworkContainer: {
    marginTop: 10,
  },
  subLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  subValue: {
    fontSize: 14,
    marginTop: 5,
  },
  hobbyContainer: {
    marginTop: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
