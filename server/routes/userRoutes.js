const express = require('express');
const router = express.Router();
const app = express();
const userModel = require('../models/User');


router.get('/getusers', async (req, res) => {
    try {
        const allUsers = await userModel.find({});
        res.json(allUsers);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Server error" });
    }
})

router.get('/users/:userId', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "User not found" });
    }
})

router.post('/createUser', async (req, res) => {
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();
    res.json(user);
})

router.put('/users/edit/:id', async (req, res) => {
    const user = req.body;
    const editedUser = await userModel.findByIdAndUpdate(req.params.id, user);
    res.json(editedUser);
})

router.delete('/deleteuser/:id', async (req, res) => {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
})

module.exports = router;