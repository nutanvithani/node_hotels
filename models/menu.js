const mongoose = require ('mongoose');

const menuItemSchema  = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,   
        require: true,
        min: 0,
        },
    Taster:{
        type: Boolean,
        default: false,
        enum:['sweet','spicy','sour']
    },
    Is_drink:{
        type:Boolean,
        default:false
    },
    Is_vegetarian:{
        type:Boolean,
        default:false
        },
    ingredients:{
        type:Array,
        default:[]
    },
})
const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;

