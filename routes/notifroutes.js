const express=require('express');
const router=express.Router();
const {getnotifs,getuserNotif}=require('../controllers/notifcontrol');
router.post('/notifications',getnotifs);
router.route('/users/:id/notifications',getuserNotif);
module.exports=router;