const router = require("express").Router;
const {createUser,getUsers,deleteUser,updateUser} = require("../controllers/users.controller")

const userRouter = router();

userRouter.get("/", getUsers);
userRouter.post("/", createUser);
userRouter.patch("/", updateUser);
userRouter.delete("/", deleteUser);

module.exports = userRouter;