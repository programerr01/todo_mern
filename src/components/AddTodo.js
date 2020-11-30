
import React, {useState} from 'react';
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import url from "../Url";
const AddTodo = (props) => {
    const [data, setData] = useState({
        name: "",
        description: "",
    });

    function handleChange(e) {
        e.persist()
        setData(prev => ({...prev, [e.target.name]: e.target.value}))
        
    }

    function addActivity(){
        console.log("added activity");
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var todos1 = props.todos.slice()
        todos1.push({"title":data.name, "description":data.description})
        console.log(todos1)
        console.log(props.todos)
        props.getTodo(todos1)
        console.log(props.todos)

        var raw = JSON.stringify({"title":data.name,"description":data.description});

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch(url, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

        // fetch(url)
        // .then(response => response.json())
        // .then(data => props.getTodo(data))
        // .catch(err => console.log(err))
        // // console.log(todos);
    
    }

    if(props.show){
    return (

        <div  style={add}className={"add"}>
            <div className="input-section">
                <TextField
                    style={width_full}
                    required
                    onChange={(e) => handleChange(e)}
                    name="name"
                    variant="outlined"
                    label="Activity Name"
                    size="large"
                />
            </div>
            <br />
            <div className="input-section">
            
                <TextField
                    style={width_full}
                    multiline
                    rowsMax={4}
                    required
                    onChange={(e) => handleChange(e)}
                    name="description"
                    label="Description"
                    variant="outlined"
                    size="x-large"
                />
            </div>
            <Button
                size="large"
                style={buttonStyle}
                onClick={addActivity}
            > <AddCircleIcon  fontSize="large"/>
            </Button>
        </div>
    )
}
return ""
};
const add = {
    textAlign:"center",
    width:"100vw",
    height:"100vh",
    position:"fixed",
    top:"40vh",
    // backgroundColor:"#00000090"
}
const buttonStyle = {
    background: 'Linear-gradient(45deg,#b8f8f8 50% ,  #91ffff 50%)',
    border: 0,
    borderRadius: '10%',
    boxShadow: '0 1px 2px 1px #7fd9f0',
    height: 38,
    marginTop:'5px',
    padding: '22px 0px',

    
}
const width_full = {
    width:"80vw"
}

export default AddTodo;