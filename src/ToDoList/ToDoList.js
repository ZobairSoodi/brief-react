import { useState } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem.js';


function ToDoList(props) {
    
    return (
        <ul>
            {props.myList.map((item) => <ToDoItem checkClick={props.checkClick} key={item.id} title={item.title} status={item.status} id={item.id} />)}
        </ul>
    )
}
export default ToDoList;