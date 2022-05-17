import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoInput from './ToDoInput/ToDoInput.js';
import ToDoItem from './ToDoItem/ToDoItem.js';
import ToDoList from './ToDoList/ToDoList.js';

if (localStorage.getItem("list") == null) {
  localStorage.setItem("list", "[]");
}
let myList = JSON.parse(localStorage.getItem("list"));

function add_to_list(e) {
  var inp2 = e.target;
  var inp1 = inp2.previousSibling;
  // myList.push({})
  localStorage.setItem
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ToDoInput func={add_to_list} />
    <ToDoList myList={myList}></ToDoList>
  </>
)
