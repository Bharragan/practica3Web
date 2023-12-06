const express = require('express');
const profileController = require('../controllers/profileController');
const router = express.Router();

router.post('/create-profile', profileController.createProfile);

router.get('/', profileController.getProfile);

router.delete('/delete-all-profiles', profileController.deleteAllProfiles);

module.exports = router;
