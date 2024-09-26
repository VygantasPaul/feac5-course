const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Sukurti JWT
const sukurtiToken = (userId) => {
    return jwt.sign({ userId }, 'slaptas_raktas', { expiresIn: '1h' });
};

// Registracijos funkcija
exports.registracija = async (req, res) => {
    const { vardas, elpastas, slaptazodis } = req.body;
    try {
        const naujasUseris = new User({ vardas, elpastas, slaptazodis });
        await naujasUseris.save();
        const tokenas = sukurtiToken(naujasUseris._id);
        res.status(201).json({ tokenas });
    } catch (error) {
        res.status(400).json({ error: 'Registracija nepavyko!' });
    }
};

// Prisijungimo funkcija
exports.prisijungimas = async (req, res) => {
    const { elpastas, slaptazodis } = req.body;
    try {
        const useris = await User.findOne({ elpastas });
        if (!useris || !(await useris.patikrinkSlaptazodi(slaptazodis))) {
            return res.status(400).json({ error: 'Neteisingas el. paštas arba slaptažodis!' });
        }
        const tokenas = sukurtiToken(useris._id);
        res.status(200).json({ tokenas });
    } catch (error) {
        res.status(400).json({ error: 'Prisijungimas nepavyko!' });
    }
};

// Middleware, apsaugantis API
// eslint-disable-next-line no-undef
exports.apsaugotas = (req, res, next) => {
    const tokenas = req.headers.authorization?.split(' ')[1];
    if (!tokenas) {
        return res.status(401).json({ error: 'Autentifikacija reikalinga' });
    }
    try {
        const patvirtintas = jwt.verify(tokenas, 'slaptas_raktas');
        req.userId = patvirtintas.userId;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Netinkamas tokenas' });
    }
};
