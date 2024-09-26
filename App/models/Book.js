const mongoose = require('mongoose');

// Sukuriame knygos schemą
const knygosSchema = new mongoose.Schema({
    pavadinimas: {
        type: String,
        required: true,
    },
    autorius: {
        type: String,
        required: true,
    },
    metai: {
        type: Number,
        required: true,
    },
    zanras: {
        type: String,
        required: true,
    }
}, { timestamps: true }); // Pridėti timestamps, kad automatiškai sukurtų 'createdAt' ir 'updatedAt' laukus

// Sukuriame modelį
const Knyga = mongoose.model('Knyga', knygosSchema);

module.exports = Knyga;
