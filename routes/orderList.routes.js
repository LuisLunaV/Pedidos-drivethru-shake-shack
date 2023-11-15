const { Router } = require('express');

const { postOrderList } = require("../controller/orderList.controller.js");

const router = Router();

router.post('/',  postOrderList );


module.exports = router;