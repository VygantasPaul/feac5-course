const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    vardas: {
        type: String,
        required: true
    },
    elpastas: {
        type: String,
        required: true,
        unique: true
    },
    slaptazodis: {
        type: String,
        required: true
    },
});

// Prieš išsaugant slaptažodį, jį užšifruojame
userSchema.pre('save', async function (next) {
    if (!this.isModified('slaptazodis')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.slaptazodis = await bcrypt.hash(this.slaptazodis, salt);
    next();
});

// Patikriname slaptažodį
userSchema.methods.patikrinkSlaptazodi = async function (ivedamasSlaptazodis) {
    return await bcrypt.compare(ivedamasSlaptazodis, this.slaptazodis);
};

const User = mongoose.model('User', userSchema);

// eslint-disable-next-line no-undef
module.exports = User;
