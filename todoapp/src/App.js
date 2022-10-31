import React, { useState } from 'react'
import ToDoLists from './ToDoList'

const App = () => {
  const [inputList, SetInputList] = useState('hii ')
  const [items, setitems] = useState([])

  const itemEvent = (event) => {
    SetInputList(event.target.value)
  }

  const listOfItem = () => {
    setitems((oldItems) => {
      return [...oldItems, inputList]
    })
    SetInputList('')
  }
  const deleteItem = (id) => {
    console.log('deleted')

    setitems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      }); 
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h2>TODO List</h2>

          <input
            type="text"
            placeholder="Add a item"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItem}>Submit</button>

          <ul>
            {/* <li>{inputList}</li> */}

            {items.map((itemval, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                  text={itemval}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
