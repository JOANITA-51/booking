const express = require('express')
const modelUser = require('../models/user')
const router = express.Router()
 /*
const {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
    } = require ('../controllers/user')


router
    .route('/')
    .get(getUsers)
    .post(createUser)

    router
    .route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)



       
        routerUser.get('/users/email/:email', async(req,res)=>{
            const {email} = req.params
            try {
                const user = await modelUser.getUser(email);
                if(user !== null)
                    return res.json({
                        'result':'success',
                        'user':user
                    });
                return res.json({
                    'result':'failure',
                    'message':`${email} not found`
                })
            } catch (error) {
                console.log(error);
                return res.json({
                    'result':'failure',
                    'message':`user : ${email} not found`
                })
            }
        })*/
        router.get('/', async(req, res, next) =>{
            try{
                const users = await User.find();
                res.status(200).json({success:true, data:users})
            }catch(err){
                res.status(400).json({success:false})
            }
           
        });
        router.get('/:id',async(req, res, next) =>{
            try {
                const user = await User.findById(req.params.id);
                res.status(200).json({success:true, data:user})
            } catch (error) {
                res.status(400).json({success:false});
            }
        
           
        });
        router.post('/',async(req, res, next) =>{
            const user = await User.create(req.body)
            res.status(201).json({success:true, data:user});
        });
        router.put('/:id', async(req, res, next) =>{
            const user = await User.findByIdAndUpdate(req.params.id, req.body,{
                new:true,
                runValidators:true
            })
            if(!user){
                return res.staus(400).json({success:false})
            }
            res.status(200).json({success:true, data:user})
        
            
        });
        router.delete('/:id', async(req, res, next) =>{
            try {
                const user = await User.findByIdAndDelete(req.params.id)
                if(!user){
                    return res.status(400).json({success:false})
                }
                res.status(200).json({success:true, data:{}})
        
            } catch (error) {
                res.status(400).json({success:false});
            }
            
        });    


module.exports =router;