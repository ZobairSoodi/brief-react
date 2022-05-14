import s from './ToDoInput.module.css';

function add_to_list(btn){
    var inp1 = btn.previousSibling;
    alert(inp1.value);
}

function ToDoInput(props){
    return (
        <div>
            <input className={s.add_input} type="text" placeholder="Add todo ..." />
            <input onClick={props.func} className={s.add_button} type="button" value="Add" />
        </div>
    )
}
export default ToDoInput;