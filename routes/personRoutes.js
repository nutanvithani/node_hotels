const express = require('express')
const router = express.Router()
const Person = require('./../models/person')

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('Data saved successfully:', response); // Log successful save for debugging
        res.status(200).json(response);
    } catch (error) {
        console.error('Error saving data:', error.message); // Log specific error message
        res.status(500).json({ message: 'Error saving data' }); // Respond with a generic error message
    }
});
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('Fetched data successfully:', data); // Log fetched data for debugging
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error.message); // Log the specific error message
            
        res.status(500).json({ message: 'Error fetching data' }); // Respond with a generic error message
    }
});

router.get('/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType == 'teacher'|| workType == 'docter' || workType=='manager'){
            const response = await Person.find({work:workType});
            console.log('Fetched data successfully:', response); // Log fetched data for debugging
            res.status(200).json(response);
        }else{
            res.status(400).json({message:'Invalid work type'});
        }
    }
    catch(error){
        console.error('Error fetching data:', error.message); // Log the specific error message
        res.status(500).json({ message: 'Error fetching data' }); // Respond with a
    }
})
module.exports=router
