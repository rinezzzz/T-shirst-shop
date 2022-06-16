const express = require('express');

const DeliveryAddress = new express.Schema(
  {
    id: { 
        type: Number, 
        required: true 
    },
    firstname: { 
        type: String, 
        required: true 
    },
    lastname: { 
        type: String, 
        required: true 
    },
    address: { 
        type: Object, 
        required: true 
    },
    postcode: { 
        type: Number, 
        required: true 
    },
    phone: { 
        type: Number, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },

  },
  { timestamps: true }
);

module.exports = express.model("DeliveryAddress", DeliveryAddress);