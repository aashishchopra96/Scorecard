import React from 'react'
import { useState } from 'react'
import './ToDoList.css'

const ToDoList = () => {

    const [input, setInput] = useState("");
    const [list, setList] = useState([])
    function addItem() {
        if (!input) {
            alert("Please add an Item")
        }

        else {
            setList([...list, input]);
            setInput("Add Item")
        }
        

    }

    return (
        <div className='box_todo'>
            <h3 className='header'>To Do Lists</h3>
            <div className='input_container'><input className='input' type="text" placeholder='Add Item' onChange={(e) => setInput(e.target.value)} />
                <i onClick={() => addItem()} className="fa fa-plus add-btn"></i>
            </div>
            {list.map((element, index) => {
                return (
                    <div className='item_list'>
                        <div className='item_text'>
                            <span >{element}</span>
                        </div>
                        <div className='list_button'>
                            <i className="fa fa-solid fa-trash"></i><i className="fa fa-solid fa-edit"></i>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ToDoList
