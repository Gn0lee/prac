import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { add  } from "../store";

function Home ({toDos, addToDo}){   
    const [text , setText] = useState("");
    
    function onChange(e){
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        addToDo(text);
        setText("");
    }


    return (
        <div onSubmit={onSubmit}>
            <h1>To Do</h1>
            <form>
                <input type="text" value={text} onChange={onChange}/>
                <button>ADD</button>
            </form>
            <ul>{toDos.map(toDo =>(
                <ToDo {...toDo} key={toDo.id}/>
            ))}</ul>
        </div>
    );
}

function mapStateToProps(state){

    return{
        toDos : state
    };
}

function mapDispatchToProps(dispatch){
    return{
        addToDo : text => dispatch(add(text))
    };
}

export default connect(mapStateToProps,mapDispatchToProps) (Home);