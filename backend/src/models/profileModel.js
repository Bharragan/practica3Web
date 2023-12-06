const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  city: String,
  country: String,
  summary: String,
  frameworks: [
    {
      name: String,
      level: String,
      year: Number,
    },
  ],
  hobbies: [
    {
      name: String,
      description: String,
    },
  ],
});

const ProfileModel = mongoose.model('Profile', profileSchema);

module.exports = ProfileModel;
