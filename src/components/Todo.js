import React from "react";
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import url from "../Url";
const  Todo = (props) => {
	// console.log(props.data, "Data")
	const data = props.props

	const deleteTodo = () => {
		
		var todos1 = props.todos.slice()
		todos1 = todos1.filter((value) => {
			console.log(value._id == data._id)
			return value._id !== data._id;
		})
		console.log(todos1)
		props.getTodo(todos1)
		fetch(url+`/${data._id}`, {
			method:"DELETE"
		})
		 // fetch(url)
		 //    .then(response => response.json())
		 //    .then(data => props.getTodo(data))
		 //    .catch(err => console.log(err))
    // console.log(todos);

	}
	 return (
	 	<>
	 	<div style={container} className="container">
     
     		<span style={heading}>{data.title}</span>
     

 		<button style={button} onClick={() => deleteTodo()}><DeleteIcon /></button>

 		<div  style={description}className="description">
 			<h5>{data.description}</h5>

 		</div>
 		</div>

        </>
            
      
    )
}

const container = {
	margin:"0px 10%",
	height:"fit-content",
	textAlign:"Center",
	borderRadius:"2%",
  	position: "relative",
	background:"#8c3dff39",
	color:"black"

}
const heading = {

	fontSize:"24px",
	fontWeight:"600",
	color:"#777",
	fontFamily:"Courier New Courier monospace"
}

const button = {
    background: 'Linear-gradient(45deg,#ff434380 30% ,#ff434670 70%)',
    border: 0,
    borderRadius: '5%',
    boxShadow: '0 1px 1px 1px #7fd9f0',
    
    position:"absolute",
  right: 0,
  top: 0,
  height:" 100%",
  
}
const description = {
	marginTop:"-1%",
	
	textAlign:"left",
	fontSize:"22px",
	color:"white"
}

export default Todo;

