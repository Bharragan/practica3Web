// seeders/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ProfileModel = require('../models/profileModel.js');

dotenv.config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Conexión a MongoDB establecida correctamente');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
};

const seedData = {
  name: 'Nicolas',
  lastname: 'Henriquez',
  email: 'nicolas.henriquez01@alumnos.ucn.cl',
  city: 'Antofagasta',
  country: 'Chile',
  summary: 'Esto es un resumen de prueba para el perfil.',
  frameworks: [
    {
      name: 'React',
      level: 'Intermedio',
      year: 2023,
    },
    {
      name: 'Node',
      level: 'Principiante',
      year: 2023,
    },
  ],
  hobbies: [
    {
      name: 'Leer',
      description: 'Disfruto leyendo libros de diversos géneros.',
    },
    {
      name: 'Cocinar',
      description: 'Me gusta experimentar en la cocina y probar nuevas recetas.',
    },
  ],
};

const seedDatabase = async () => {
  try {
    // Limpiar la colección antes de insertar
    await ProfileModel.deleteMany();

    // Insertar el nuevo perfil
    await ProfileModel.create(seedData);
    console.log('Datos de perfil insertados correctamente');
  } catch (error) {
    console.error('Error al insertar datos de perfil:', error.message);
  } finally {
    mongoose.connection.close();
    console.log('Conexión a MongoDB cerrada');
  }
};

// Llamada a funciones
connectToDatabase().then(() => {
  seedDatabase();
});
