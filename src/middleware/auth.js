const bcrypt = require ("bcrypt");
const User = require ("../user/model");


const saltRounds = parseInt(process.env.SALT);

const hashPass = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    req.body.password = hashedPassword
    
    next();
  }catch (error){
    res.status(500).json({message:error.message, error:error});
  }
 
};

const comparePass = async (req, res, next ) => {
    try{
    // find the user with username req.body.username
    const user = await User.findOne({where:{username: req.body.username}})
    // use bcrypt to compare
    const passwordSame = await bcrypt.compare(req.body.password, user.password);
    // check the result
 
    // if false send response with message "passwords do not match"
    if (!passwordSame) {
    res.status(401).json({ message: 'Passwords do not match' });


    return 
    }

    
    // if it is true, add user to request
    req.user = user;

    next();
    }catch (error) {
        res.status(500).json({message:error.message, error:error});
    }
};
module.exports ={
    hashPass: hashPass,
    comparePass: comparePass,
}



