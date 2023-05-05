const {user,thought} = require('../models');

module.exports = {
    // get all users
    async getAllUsers(req,res){
        try{
            const userData = await user.find({});
            res.json(userData);
        }catch(err){
            res.status(400).json(err);
        }
    },
    // get one user by id
    async getOneUser (req,res){
        try{
            const userData = await user.findOne({_id:req.params.id});
            .select('-__v');
            populate('thoughts','friends')

            if(!userData){
                res.status(404).json({message:'No user with this id!'});
                return;
            }
            res.json(userData);
        }catch(err){
            res.status(500).json(err);
        }
    },
