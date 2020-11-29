import React from "react";
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import url from "../Url";
const  Todo = (props) => {
	// console.log(props.data, "Data")
	const data = props.props

	const deleteTodo = () => {
		fetch(url+`/${data._id}`, {
			method:"DELETE"
		})

	 fetch(url)
	    .then(response => response.json())
	    .then(data => props.getTodo(data))
	    .catch(err => console.log(err))
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
textAlign:"Center",
  position: "relative",
	background:"red",
	color:"black"

}
const heading = {

	fontSize:"24px",
	fontWeight:"600",
	color:"white",
	fontFamily:"Courier New Courier monospace"
}

const button = {
 position:"absolute",
  right: 0,
  top: 0,
  height:" 100%",
  
}
const description = {
	textAlign:"left",
}

export default Todo;

