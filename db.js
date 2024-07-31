const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hotels', {

});

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('MongoDB connected')
})
db.on('disconnected',()=>{
    console.log('MongoDB disconnected')
})
db.on("error", console.error.bind(console, "connection error:"));
module.exports = db;

