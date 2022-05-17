import { useState } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem.js';


function ToDoList(props) {
    const [myList, setMyList] = useState(props.myList);
    return (
        <ul>
            {myList.map((item) => <ToDoItem key={item.id} title={item.title} status={item.status} />)}
        </ul>
    )
}
export default ToDoList;