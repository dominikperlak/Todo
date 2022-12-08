import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { List } from "./List";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");



  function addItem() {
    if (!newItem) {
      toast.error('Missing item')

      return
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };


    setItems((oldList) => [...oldList, item]);

    setNewItem("");
  }


  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }


  function editItem(id, newText) {

    const currentItem = items.filter((item) => item.id === id);
  

    const newItem = {
      id: currentItem.id,
      value: newText,
    };
    deleteItem(id);

    setItems((oldList) => [...oldList, newItem]);
    setUpdatedText("");
    setShowEdit(-1);
  }


  return (
    <div className="app">
      <ToastContainer 
        position="bottom-center"
      />

      <h1>My Todo List</h1>

      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>

      <List items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;