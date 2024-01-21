const { Router } = require("express");
const userRouter = Router();

const { addUser, getAllUsers, getUserByUsername, deleteUserByUsername, login , updateFavBook} = require("./controllers");
const { hashPass, comparePass,} = require ("../middleware/auth");

userRouter.post("/users", hashPass ,addUser);
userRouter.post("/users/login", comparePass, login)
userRouter.get("/users/:username", getUserByUsername);
userRouter.get("/users", getAllUsers);
userRouter.delete("/users/:username", deleteUserByUsername);
userRouter.put("/users/updateFavBook", updateFavBook);

// userRouter.delete("/users/deleteallusers", deleteAllUsers);
// userRouter.put("/users/:username", updateUser);

module.exports = userRouter;