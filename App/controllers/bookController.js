const Knyga = require('../models/Book'); // Priklausomai nuo to, kur laikote Knyga modelį

// Gauti visas knygas
exports.gautiKnygas = async (req, res) => {
    try {
        const knygos = await Knyga.find();
        res.status(200).json(knygos);
    } catch (error) {
        res.status(500).json({ error: 'Klaida gaunant knygas' });
    }
};

// Pridėti naują knygą
exports.pridetiKnyga = async (req, res) => {
    const { pavadinimas, autorius, metai, zanras } = req.body;
    const naujaKnyga = new Knyga({ pavadinimas, autorius, metai, zanras });

    try {
        await naujaKnyga.save();
        res.status(201).json(naujaKnyga);
    } catch (error) {
        res.status(400).json({ error: 'Klaida pridedant knygą' });
    }
};

// Atnaujinti knygą pagal ID
exports.atnaujintiKnyga = async (req, res) => {
    const { id } = req.params;
    const atnaujintiDuomenys = req.body;

    try {
        const atnaujintaKnyga = await Knyga.findByIdAndUpdate(id, atnaujintiDuomenys, { new: true });
        if (!atnaujintaKnyga) {
            return res.status(404).json({ error: 'Knyga nerasta' });
        }
        res.status(200).json(atnaujintaKnyga);
    } catch (error) {
        res.status(400).json({ error: 'Klaida atnaujinant knygą' });
    }
};

// Ištrinti knygą pagal ID
exports.istrintiKnyga = async (req, res) => {
    const { id } = req.params;

    try {
        const istrintaKnyga = await Knyga.findByIdAndRemove(id);
        if (!istrintaKnyga) {
            return res.status(404).json({ error: 'Knyga nerasta' });
        }
        res.status(200).json({ message: 'Knyga sėkmingai ištrinta' });
    } catch (error) {
        res.status(500).json({ error: 'Klaida ištrinant knygą' });
    }
};
