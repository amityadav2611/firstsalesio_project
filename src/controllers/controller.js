const {todoModel, directModel} = require('../models/model')

//-----------------------------Get Directory-----------------------------------------------------------

const getdirectory = async(req, res) => {
    try{

        let data = req.query
        let {page, limit} = data

        let getDirectory = await directModel.find({isDeleted: false}).populate("directory")

        //let getDirectory = await directModel.find({isDeleted: false}).select({_id:0, dName:0, isDeleted:0, moveToDirectory:0, markDone:0, createdAt: 0, updatedAt: 0, __v: 0 }).skip(limit * (page - 1)).limit(limit);

        res.status(200).send({status: true, message: "Found", data:getDirectory})

    }catch(err){
        res.send(500).send({status: false, Error: err.message})
    }
}

//----------------------------Create Directory-------------------------------------------------

const createDirectory = async (req, res) =>{
    try{
        let data = req.body;

        if(!data) return res.status(400).send({status: false, message: "Enter the Todo List"})

        let directoryData = await directModel.create(data)
        res.status(201).send({status: true, message: "Created Successfully", data:directoryData})
    }catch(err){
        res.status(500).send({status: false, Error: err.message})
    }
}

//-----------------------------------Remove Directory--------------------------------------------

const removeDirectory = async (req, res) =>{
    try{
        let directoryId = req.query.directoryId; //collect the data from params 
    
          let findDirectory = await directModel.findById(directoryId);
          if (!findDirectory) return res.status(404).send({ status: false, message: "Invalid directoryId" }) 
  
          if (findDirectory.isDeleted == false) {
               let updatedDirectory = await directModel.findOneAndUpdate({ _id: findDirectory._id }, { isDeleted: true}, { new: true });
               if(!updatedDirectory) return res.status(404).send({ status: false, message: "deleted failed"})
                res.status(200).send({status: true, message: "Deleted", data:updatedDirectory})
           }else{
            return res.status(400).send({status: false, message:"Already Deleted"})
        }
    }catch(err){
        res.status(500).send({status: false, Error: err.message})
    }
}

//---------------------------------------Create Todo-----------------------------------------------

const createTodo = async (req, res) =>{
    try{
        let data = req.body;

        if(!data) return res.status(400).send({status: false, message: "Enter the Todo List"})

        let todoData = await todoModel.create(data)
        
        res.status(201).send({status: true, message: "Created Successfully",todoData})
    }catch(err){
        res.status(500).send({status: false, Error: err.message})
    }
}

//-------------------------------------mark as Done-----------------------------------------------

const markDone = async(req, res) => {
    try{
        let todoId = req.query.todoId;

        let findMark = await todoModel.findById(todoId);

        if (findMark.markDone == false) {
            let updatedmark = await todoModel.findOneAndUpdate({ _id: findMark._id }, { markDone: true}, { new: true });
            res.status(200).send({status: true, message: "Mark is Done",updatedmark})
        }else{
         return res.status(400).send({status: false, message:"Mark is Already Done"})
     }

        
    }catch(err){
        res.status(500).send({status: false, Error: err.message})
    }
}

//---------------------------------Mark as not done-------------------------------------------

const markNotDone = async(req, res) => {
    try{

        let todoId = req.query.todoId;

        let findMark = await todoModel.findById(todoId);
        //console.log("--->",findMark)

        if (findMark.markDone == false) {
            let markNDone = await todoModel.findById({_id:findMark._id});
            res.status(200).send({status: true, message: "Mark is not done", data:markNDone})
         //return res.status(400).send(findWork.workDone)
        }else{
            return res.status(200).send( {message:"Mark is Already Done"})
        }

    }catch(err){
        res.status(500).send({status: false, Error: err.message})
    }
}

//---------------------------------------Move to Directory-------------------------------------------

const moveToDirectory = async(req, res) => {
    try{

        //Here we move the item into directory
        let {directoryId, todoId} = req.body
        let findTodo = await directModel.findByIdAndUpdate({_id: directoryId}, {$push: { directory: todoId }}, {new: true}).populate("directory")
        console.log(findTodo)
        return res.status(200).send( {status: true, message: "success", data: findTodo})
        
    }catch(err){
        res.status(500).send({status: false, Error: err.message})
    }
}

//db.mycol.find({},{"title":1,_id:0}).sort({"title":-1}),,,,.find().sort({"createdAt":-1})



//-----------------------------------------------get Todo-------------------------------------------

const getTodo = async(req, res) => {
    try{
    
        //here we find all the item order by createdAt
        const todoList = await todoModel.find().sort({createdAt: 1})
        res.status(200).send({status: true, message: "Found", data: todoList})

    }catch(err){
        res.status(500).send({status: false, Error: err.message})
    }
}

module.exports = {getdirectory, createDirectory, removeDirectory, createTodo, markDone, markNotDone, moveToDirectory, getTodo }