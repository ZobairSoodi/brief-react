import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import ToDoInput from './ToDoInput/ToDoInput.js';
import ToDoItem from './ToDoItem/ToDoItem.js';
import ToDoList from './ToDoList/ToDoList.js';
import s from './ToDoItem/ToDoItem.module.css';
import { useState } from 'react';


function Main(props) {

  if (localStorage.getItem("max_id") == null) {
    localStorage.setItem("max_id", "0");
  }

  if (localStorage.getItem("list") == null) {
    localStorage.setItem("list", "[]");
  }
  let temp_list = JSON.parse(localStorage.getItem("list"));
  const [myList, setMyList] = useState(temp_list);
  //const [count, setCount] = useState(0);

  const add_to_list = (e) => {

    var inp2 = e.target;
    var inp1 = inp2.previousSibling.value;
    var max_id = Number(localStorage.getItem("max_id"));
    temp_list.push(
      {
        "id": temp_list.length + 1,
        "title": inp1,
        "status": ""
      }
    );
    localStorage.setItem("list", JSON.stringify(temp_list));


    var obj = {
      "id": max_id + 1,
      "title": inp1,
      "status": 0
    };
    setMyList([...myList, obj]);
    //console.log(temp_list);
    // setMyList([{'id': 2, 'name': 'test', 'status':'done'}]);
    //setMyList([temp_list]);
    localStorage.setItem("max_id", JSON.stringify(max_id + 1));
  }

  function checkClick(id) {
    // var title = e.target.nextElementSibling;
    // title.classList.toggle(s.line_thorugh);

    var status = 0;
    if (myList[id - 1].status) {
      status = 0;
    }
    else {
      status = 1;
    }

    var obj = {
      "id": id,
      "title": myList[id - 1].title,
      "status": status
    };
    setMyList(
      [
        ...myList.slice(0, id - 1),
        obj,
        ...myList.slice(id, myList.length + 1)
      ]
    );


  }

  function deleteClick(id) {
    setMyList(
      [
        ...myList.slice(0, id - 1),
        ...myList.slice(id + 1, myList.length + 1)
      ]
    );
  }

  // const checkClick = (e) => {
  //   var title = e.target.nextElementSibling;
  //   title.classList.toggle(s.line_thorugh);
  // }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(myList));
  }, [myList])

  return (
    <>
      <ToDoInput func={add_to_list} />
      <ToDoList myList={myList} checkClick={checkClick} deleteClick={deleteClick}></ToDoList>
    </>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Main />
)
