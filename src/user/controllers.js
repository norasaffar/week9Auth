const User = require("./model");

const addUser = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    res.status(201).json({ message: "User created", user: user });

  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const login = async (req, res, next) => {
    try{
        console.log("hel;llo from login", req.user);
    } catch (error){
        res.status(500).json({message:error.message, error:error})
    }
};





const getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
  
      res.status(200).json({ message: "All users here", users: users });
  
    } catch (error) {
      res.status(500).json({ message: error.message, error: error });
    }
  };

  const getUserByUsername = async (req, res) => {
    try {
      const user = await User.findOne({ where: { username: req.params.username } });
  
      res.status(200).json({ message: `User by ${user.username}`, user: user });
  
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error });
    }
  };

  const deleteUserByUsername = async (req, res) => {
    try {
      const deletedUser = await User.destroy({
        where: {
          username: req.params.username,
        },
      });
  
      res.status(201).json({ message: "User deleted", deletedUser: deletedUser });
    } catch (error) {
      res.status(500).json({ message: error.message, error: error });
    }
  };
  
 


  module.exports = {
    addUser: addUser,
    getAllUsers: getAllUsers,
    getUserByUsername: getUserByUsername,
    deleteUserByUsername: deleteUserByUsername,
    login:login,
    // deleteAllUsers: deleteAllUsers,
    // dynamicChange: dynamicChange,
  };