exports.getUsers =(req, res, next) =>{
    res.status(200).json({success:true, msg:"Show all users"});
};
exports.getUser =(req, res, next) =>{
    es.status(200).json({success:true, msg:`Show user ${req.param.id}`});
};
exports.createUser =(req, res, next) =>{
    const user = await User.create(req.body)
    res.status(201).json({success:true, data:user});
};
exports.updateUser =(req, res, next) =>{
    res.status(200).json({success:true, msg:`Update user ${req.param.id}`});
};
exports.deleteUser =(req, res, next) =>{
    res.status(200).json({success:true, msg:`Delete user ${req.param.id}`});
};