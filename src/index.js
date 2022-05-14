import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoInput from './ToDoInput/ToDoInput.js';
import ToDoItem from './ToDoItem/ToDoItem.js';
import ToDoList from './ToDoList/ToDoList.js';

var myList = [];

function add_to_list(e){
  var inp2 = e.target;
  var inp1 =  inp2.previousSibling;
  alert(inp1.value);
}

fetch("list.json").then((response) => response.json()).then((data) => {
  console.log(data);
  myList = data;
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <>
      <ToDoInput func={add_to_list}></ToDoInput>
      <ToDoList myList={myList} ></ToDoList>
    </>
  )

})

