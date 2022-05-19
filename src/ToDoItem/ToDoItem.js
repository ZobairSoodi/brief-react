import s from './ToDoItem.module.css';

function ToDoItem(props) {

    const currentItemId = props.id;
    
    // function Hello(id){
    //     console.log(id);
    // }

    return (
        <li>
            {/* <input className="check_item" onClick={props.checkClick(currentItemId)} type="checkbox" defaultChecked={props.status ? "defaultChecked" : ""} /> */}
            <input className="check_item" onClick={() => props.checkClick(currentItemId)} type="checkbox" defaultChecked={props.status ? "defaultChecked" : ""} />
            <span className={props.status ? s.line_through + " title_item" : "title_item"}>
                {props.title}
            </span>
            <button className="delete_item" onClick={props.deleteClick(currentItemId)}>Delete</button>
        </li>
    )
}

export default ToDoItem;
