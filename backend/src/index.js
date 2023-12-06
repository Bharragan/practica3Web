const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const profileRoutes = require('./routes/profileRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: '*', // Cambia esto a la URL específica de tu aplicación en producción
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/profile', profileRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
