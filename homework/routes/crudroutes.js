const express = require("express")
const Crud = require("../models/Crud")

const router = express.Router()



router.get('/gettodo', (req, res) => {
    try {
        Crud.find().then(data => {
            res.status(200).json({ data: data })
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})


router.post('/createtodo', (req, res) => {
    try {
        const todo = new Crud({
            todo: req.body.todo
        })

        todo.save().then(data => {
            res.json({ message: "Success", data: data });
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})


router.put('/edittodo/:id', (req, res) => {
    const { todo } = req.body;
    try {
        const newTodo = {}
        if(todo){
            newTodo.todo = todo
        }
        Crud.findByIdAndUpdate(req.params.id, { $set: newTodo },{new:true}).then(data => {
          res.status(200).json({data:data})
      })


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}
)

router.delete('/deletetodo/:id', async(req, res) => {
    try {
           Crud.findByIdAndDelete(req.params.id).then(data => {
            res.status(200).json({ massage: "note has been deleted", data: data })
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}
)


module.exports = router;