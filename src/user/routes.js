const { Router } = require("express");
const userRouter = Router();

const { addUser, getAllUsers, getUserByUsername, deleteUserByUsername, deleteAllUsers, updateUser } = require("./controllers");
const { hashPass } = require ("../middleware/auth");

userRouter.post("/users", hashPass ,addUser);
userRouter.get("/users/:username", getUserByUsername);
userRouter.get("/users", getAllUsers);
userRouter.delete("/users/:username", deleteUserByUsername);
// userRouter.delete("/users/deleteallusers", deleteAllUsers);
// userRouter.put("/users/:username", updateUser);

module.exports = userRouter;