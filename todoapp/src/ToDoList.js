import React from 'react'

const ToDoLists = (props) => {
  const deleteItem = () => {
    console.log('deleted')
  }
  return (
    <>
      <li>
        <span
          style={{
            color: 'white',
            marginRight: '5px',
            background: 'red',
            cursor: 'pointer',
          }}
          onClick={() => {
            props.onSelect(props.id)
          }}
        >
          dlt
        </span>
        {props.text}
      </li>
    </>
  )
}
export default ToDoLists
