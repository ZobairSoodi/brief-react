import s from './ToDoInput.module.css';


function ToDoInput(props){
    return (
        <div>
            <input className={s.add_input} type="text" placeholder="Add todo ..." />
            <input onClick={props.func} className={s.add_button} type="button" value="Add" />
        </div>
    )
}
export default ToDoInput;