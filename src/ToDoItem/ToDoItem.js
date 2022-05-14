import s from './ToDoItem.module.css';

function ToDoItem(props){
    return (
        <div>
            <input className="check_item" type="checkbox" defaultChecked={props.status?"defaultChecked":""}/>
            <span className="title_item">
                {props.title}
            </span>
            <button className="delete_item"></button>
        </div>
    )
}

export default ToDoItem;