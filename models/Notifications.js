const mongoose = require("mongoose");
const notifiSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  msg: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum:['email','sms','in-app'],
  },
  Read:{
    type:Boolean,
    default:false,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports=mongoose.model("Notification",notifiSchema);