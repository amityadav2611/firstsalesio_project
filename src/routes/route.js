const express = require('express');
const router = express.Router();

const {getdirectory, createDirectory, removeDirectory, createTodo, markDone, markNotDone, moveToDirectory, getTodo} = require("../controllers/controller")

//directoryApi
router.post("/directory/list", getdirectory)
router.post("/directory/create", createDirectory)
router.post("/directory/remove", removeDirectory)


//todoApi
router.post("/todo-item/create", createTodo )
router.post("/todo-item/mark-as-done", markDone)
router.post("/todo-item/mark-as-not-done", markNotDone)
router.post("/todo-item/move-to-directory", moveToDirectory)
router.post("/todo-item/list", getTodo)



module.exports = router;


// Endpoints:

// /directory/list
// /directory/create
// /directory/remove
// /todo-item/create
// /todo-item/mark-as-done
// /todo-item/mark-as-not-done
// /todo-item/move-to-directory
// /todo-item/list 