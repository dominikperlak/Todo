import React, { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { List } from "./List";

import getAll from './api/list';
import addTask from './api/add';
import deleteTask from './api/remove';
import updateTask from './api/update';
import { Typography } from 'antd';


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const { Title } = Typography;
function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false); 

  const getTasks = () => getAll()
    .then(items => {
      setItems(items)
      setLoading(false)
    })

  const addItem = () => {
    if (!newItem) {
      toast.error('Missing task')

      return
    }

    setLoading(true)

    return addTask(newItem)
      .then(() => {
        getTasks()
        setNewItem("")
      })
  }

  const deleteItem = (id) => {
    setLoading(true);
    deleteTask(id)
    .then(getTasks)
  }

  const editItem = (id, text) => {
    updateTask(id, text)
      .then(getTasks);
  }

  useEffect(() => {
    setLoading(true)
    getTasks()
  }, []);


  return (
    <div className="app">
      <ToastContainer 
        position="bottom-center"
      />

<Title> My Todo list</Title>

      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>

      {loading ? (
        <Spin indicator={antIcon} />
      ) : (
        <List items={items} deleteItem={deleteItem} changeItem={editItem}/>     
         )}
    </div>
  );
}

export default App;