const Notification=require('../models/Notifications');
const User=require('../models/Users');
const express = require('express');
const sendEmail = require('../utils/sendEmail');
const sendSms=require('../utils/sendSms');


exports.getnotifs = async (req, res) => {

const {userid,msg,type}=req.body;


    const user = await User.findById(userid);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    
    }
    const sent=[];
    for(let t of type){
        if(t=='email'){
            await sendEmail(user.email,msg);
            sent.push('email');
        }
        if(t=='sms'){
            await sendSms(user.phone,msg);
            sent.push('sms');
        }
        if(t=='in-app'){
            sent.push('in-app');
        }
    }
    res.json({status:"success",sent});
        };
exports.getUserNotif=async(req,res)=>{
    const notifications=await Notification.find({userid:req.params.id}).sort({date:-1});
    res.json(notifications);
}