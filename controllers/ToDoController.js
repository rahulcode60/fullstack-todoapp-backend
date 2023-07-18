const ToDoModel = require('../models/ToDoModel');

module.exports.getTodo = async (req,res) =>{
    const toDo = await ToDoModel.find();
    res.send(toDo);
}

module.exports.saveToDo = async (req,res)=>{
    const {text} = req.body;
    console.log(text);
    ToDoModel.create({text}).then((data)=>{
        console.log("Added sucessfully");
        console.log(data);
        res.send(data);
    })
   
}

module.exports.updateToDo = async (req,res)=>{
    const{_id,text} = req.body;
    ToDoModel.findByIdAndUpdate(_id,{ text: text }).then(()=> res.send("Updated Sucessfully")).catch((err)=>{
        console.log(err);
        res.status(500).send("Error occurred while updating the todo.");
    })

}

module.exports.deleteToDo = async (req,res)=>{
    const{_id} = req.body;
    ToDoModel.findByIdAndDelete(_id).then(()=> res.send("Deleted Sucessfully")).catch((err)=>{
        console.log(err);
    })

}