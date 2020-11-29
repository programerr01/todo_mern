import {React, useState ,useEffect} from "react";
import url from "../Url";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

	
const Todos = () => {
	const [todos, getTodo] = useState([]);
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
			<Todo todos={todos} getTodo={getTodo} props={each} />
		)
		)}
		<AddTodo todos={todos} getTodo={getTodo} />
		</>

	)
}

export default Todos;