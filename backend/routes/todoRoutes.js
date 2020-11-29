const express = require("express")
const mongoose = require("mongoose")
const Todo = require("../schemas/Post")

const router = express.Router()


router.get("/", async (req,res) => {
	try{
		const posts = await Todo.find();
		res.json(posts);
	}
	catch(err){
		res.json({message:err});
	}

})
router.post("/",async(req,res) => {
	const todo = new Todo({
		title: req.body.title,
		description:req.body.description
	});
	todo.save()
		.then(data => {
			res.json(data);
		})
			.catch(err => {
				res.json({message: err})
			})
})
router.delete("/:id" , (req,res) =>{
		Todo.remove({_id: req.params.id}, (err,result) => {
			if(err){
				res.json({message: err})
			}
			else{
				res.json(result);
			}
		})
})
module.exports = router;