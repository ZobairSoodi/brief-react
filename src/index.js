import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoInput from './ToDoInput/ToDoInput.js';
import ToDoItem from './ToDoItem/ToDoItem.js';
import ToDoList from './ToDoList/ToDoList.js';
import { useState } from 'react';


function Main(props) {

  if (localStorage.getItem("list") == null) {
    localStorage.setItem("list", "[]");
  }
  let temp_list = JSON.parse(localStorage.getItem("list"));
  const [myList, setMyList] = useState(temp_list);
  //const [count, setCount] = useState(0);

  const add_to_list = (e) => {

    var inp2 = e.target;
    var inp1 = inp2.previousSibling.value;
    temp_list.push(
      {
        "id": temp_list.length + 1,
        "title": inp1,
        "status": ""
      }
    );
    localStorage.setItem("list", JSON.stringify(temp_list));
    
    var obj = {
      "id": temp_list.length + 1,
      "title": inp1,
      "status": ""
    };
    setMyList([...myList, obj]);
    //console.log(temp_list);
    // setMyList([{'id': 2, 'name': 'test', 'status':'done'}]);
    //setMyList([temp_list]);
  }

  return (
    <>
      <ToDoInput func={add_to_list} />
      <ToDoList myList={myList}></ToDoList>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Main />
)
