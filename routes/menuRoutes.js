const express = require('express')
const router = express.Router()
const MenuItem = require('./../models/menu')

router.post('/',async (req,res)=>{
    try{
        const data = req.body
        const newMenuItem = new MenuItem(data);

        const response = await newMenuItem.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Error saving data'});
        }
})


router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('Fetched data successfully:', data); // Log fetched data for debugging
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error.message); // Log the specific error message
        res.status(500).json({ message: 'Error fetching data' }); // Respond with a generic error message
    }
});

module.exports=router
