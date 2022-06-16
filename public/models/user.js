const express = require('express');

const UserSchema = new express.Schema(
  {
    id: { 
        type: Number, 
        required: true 
    },
    customer_id: { 
        type: Object, 
        required: true 
    },
    username: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    }
  },
  { timestamps: true }
);

module.exports = express.model("user", UserSchema);