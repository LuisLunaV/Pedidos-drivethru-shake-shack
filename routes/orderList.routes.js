const { request, response } = require('express');
const { Router } = require('express');

const router = Router();

router.post('/', ( req = request, res = response  ) =>{
    try {
        const body = req.body;
      
       return res.status(200).json({
             msg: body 
            });
        
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor" });
    }
} )

module.exports = router;