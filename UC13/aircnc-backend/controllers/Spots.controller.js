const User = require('../models/User');
const Spots = require('../models/Spots');

const store = async (req, res) =>{
    const { company, pricem, techjs} = req.body
    const { user_id } = req.headers;

    const usuario = await user_id.findById(user_id);
    if(!usuario) return req.status(400).json({error: "Usuário não existe!!!"})

        const spot = await Spots.create({
            user: user_id,
            company,
            price,
            techs: techs.split(',').map(tech=> tech.trim()),

        })
        
        return res.json(spot)
}