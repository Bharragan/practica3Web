const express = require('express');
const profileController = require('../controllers/profileController');
const router = express.Router();

// Ruta para crear un nuevo perfil
router.post('/create-profile', profileController.createProfile);

// Ruta para editar el perfil existente
router.put('/edit-profile', profileController.editProfile);

// Ruta para obtener el perfil
router.get('/', profileController.getProfile);

// Ruta para eliminar todos los perfiles
router.delete('/delete-all-profiles', profileController.deleteAllProfiles);

module.exports = router;
