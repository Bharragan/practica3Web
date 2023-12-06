const ProfileModel = require('../models/profileModel');

const createProfile = async (req, res) => {
  const {
    name,
    lastname,
    email,
    city,
    country,
    summary,
    frameworks,
    hobbies,
  } = req.body;

  try {
    const newProfile = new ProfileModel({
      name,
      lastname,
      email,
      city,
      country,
      summary,
      frameworks,
      hobbies,
    });

    const savedProfile = await newProfile.save();
    
    res.json(savedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editProfile = async (req, res) => {
  const {
    name,
    lastname,
    email,
    city,
    country,
    summary,
    frameworks,
    hobbies,
  } = req.body;

  try {
    const existingProfile = await ProfileModel.findOne();

    if (!existingProfile) {
      return res.status(404).json({ message: 'Perfil no encontrado. Crea un perfil primero.' });
    }

    // Actualiza los campos del perfil
    existingProfile.name = name;
    existingProfile.lastname = lastname;
    existingProfile.email = email;
    existingProfile.city = city;
    existingProfile.country = country;
    existingProfile.summary = summary;
    existingProfile.frameworks = frameworks;
    existingProfile.hobbies = hobbies;

    // Guarda los cambios
    const updatedProfile = await existingProfile.save();
    res.json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const profile = await ProfileModel.findOne();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAllProfiles = async (req, res) => {
  try {
    await ProfileModel.deleteMany();
    res.json({ message: 'Todos los perfiles han sido eliminados.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProfile,
  editProfile,
  getProfile,
  deleteAllProfiles,
};
