exports.getUsers = async(req, res, next) =>{
    try{
        const users = await User.find();
        res.status(200).json({success:true, data:users})
    }catch(err){
        res.status(400).json({success:false})
    }
   
};
exports.getUser = async(req, res, next) =>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({success:true, data:user})
    } catch (error) {
        res.status(400).json({success:false});
    }

   
};
exports.createUser = async(req, res, next) =>{
    const user = await User.create(req.body)
    res.status(201).json({success:true, data:user});
};
exports.updateUser = async(req, res, next) =>{
    const user = await User.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    })
    if(!user){
        return res.staus(400).json({success:false})
    }
    res.status(200).json({success:true, data:user})

    
};
exports.deleteUser = async(req, res, next) =>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(400).json({success:false})
        }
        res.status(200).json({success:true, data:{}})

    } catch (error) {
        res.status(400).json({success:false});
    }
    
};
