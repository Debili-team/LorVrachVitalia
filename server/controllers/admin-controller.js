//const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Admin = require('../models/admin-model');

getAdmins = async (req, res) => {
    await Admin.find({}, (err, Admins) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Admins.length) {
            return res
                .status(404)
                .json({ success: false, error: `Admin not found` })
        }
        return res.status(200).json({ success: true, data: Admins })
    }).catch(err => console.log(err))
}

const signIn = (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    Admin.findOne({email})
        .exec()
        .then((admin)=>
        {
            if(!admin){
                 res.status(401).json({massage: 'Admin does not exist'});
            }
            else{
            const isValid = bcrypt.compareSync(password,admin.password);
            if(isValid){
                const token = jwt.sign(admin._id.toString(),'secKey');
                res.json({token});
            }
            else {
                res.status(401).json({message: 'Invalid password'});
            }}
        })
        .catch(err=> res.status(500).json({message:err.message}))
};

createAdmin = (req, res) => {
    const body = req.body;
    //   delete body._id;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an Admin',
        })
    }

    var admin = new Admin(body)

    if (!admin) {
        return res.status(400).json({ success: false, error: err })
    }

    admin
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: admin._id,
                message: 'Admin created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Admin not created!',
            })
        })
}

module.exports = {
    signIn,
    getAdmins,
    createAdmin
}

