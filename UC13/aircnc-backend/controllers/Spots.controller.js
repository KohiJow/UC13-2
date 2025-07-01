const User = require('../models/User');
const Spots = require('../models/Spots');

const store = async (req, res) => {
    const { company, price, techs } = req.body;
    const { user_id } = req.headers;

    try {
        // Validate file upload
        if (!req.file) {
            return res.status(400).json({ error: "Arquivo não enviado!" });
        }
        const { filename } = req.file;
        console.log("Arquivo enviado:", filename);

        // Validate user existence
        const usuario = await User.findById(user_id);
        if (!usuario) {
            return res.status(400).json({ error: "Usuário não existe!" });
        }

        // Validate techs field
        if (!techs || typeof techs !== 'string') {
            return res.status(400).json({ error: "Techs inválido!" });
        }

        // Create a new spot
        const spot = await Spots.create({
            thumbnail: filename,
            user: user_id,
            company,
            price,
            techs: techs.split(',').map(tech => tech.trim()),
        });

        return res.json(spot);
    } catch (error) {
        console.error("Erro ao criar o spot:", error);
        return res.status(500).json({ error: "Erro ao criar o spot!" });
    }
};

module.exports = { store };