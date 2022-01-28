//logout
exports.protect = async (req,res,next)=>{
    if (
        req.headers.authorization &&
        req.headers.authorization.startedwith('Baerer')
    ) {
        //Set token from Bearer token in header
        token = req.headers.authorization.split('') [1] 
        
    } else if (req.cookies.token){
       token = req.cookies.token; 
    }
    
    //Make sure that token exists
    if(!token){
       return next(new ErrorResponse('Not authorized to access this route',401))  
    }
    
    try {
        //Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
        req.user = await User.findById(decoded.id);
    
        next();
    } catch (error) {
        return next(new ErrorResponse('Not authorized to access this route',401))
    }
    
    
}
