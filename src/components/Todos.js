import {React, useState ,useEffect} from "react";
import url from "../Url";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import Button from "@material-ui/core/Button";

	
const Todos = () => {
	const [todos, getTodo] = useState([]);
	const [show ,changeShow] = useState(false);
	//Fetch the data
	useEffect(() => {
		fetch(url)
		.then(response => response.json())
		.then(data => getTodo(data))
		.catch(err => console.log(err))
		// console.log(todos);

	}, [])
	
	return(
	
		<>
		{todos.map((each) => (
			// {console.log(each)}
			<Todo show={show}todos={todos} getTodo={getTodo} props={each} />
		)
		)}
		<div style={align_item}>
        <Button onClick={() => changeShow(!show)} style={button_style}>Add Activity</Button>
        </div>
		<AddTodo show={show}  changeShow={changeShow} todos={todos} getTodo={getTodo} />
		</>

	)
}
const align_item = {
	width:"100vw",
	textAlign:'center'

}
const button_style = {
	textAlign:"center",
	background: 'Linear-gradient(45deg,#b8f8f8 50% ,  #91ffff 50%)',
    border: 0,
    borderRadius: '10%',
    boxShadow: '0 3px 5px 2px #7fd9f0',
    height:40,
    color: 'white',

    padding:'0 20px',
}

export default Todos;