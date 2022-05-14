import ToDoItem from '../ToDoItem/ToDoItem.js';

var myList = [];


function ToDoList(props) {
    return (
        <ul>
            {props.myList.map((item) => <ToDoItem key={item.id} title={item.title} status={item.status} />)}
        </ul>
    )
}
export default ToDoList;