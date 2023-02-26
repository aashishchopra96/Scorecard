import React, { useEffect } from 'react'
import { useState } from 'react'
import './ToDoList.css'

const ToDoList = () => {

    const [input, setInput] = useState("");
    const [list, setList] = useState([])
    const [isEdit, setIsEdit] = useState("")
    const [listName, setListName] = useState("");
    const [tempList, setTempList] = useState({});
    const [savedList, setSavedList] = useState([]);


    useEffect(() => {
        console.log("ssssss", Object.keys(tempList));
        if (Object.keys(tempList).length !== 0 ) {
            setSavedList([...savedList, tempList])
            setList([]);
            // setTempList(null); 
            setListName("")
        }
    }, [tempList]);

    function addItem() {
        if (!input) {
            alert("Please add an Item")
        }

        else if (input && isEdit !== null) {
            list.splice(isEdit, 1, input)
            setInput("")
            setIsEdit(null);
            // setEditState(0)
        }
        else {
            setList([...list, input]);
            setInput("")
        }
    }

    function deleteItem(i) {
        const deleteListItem = list.filter((value, valueindex) => {
            return valueindex !== i
        })
        // alert(element)
        setList(deleteListItem)
        setInput("")

    }

    function editItem(i) {
        const updatelist = list.find((element, index) => {
            return index === i
        })
        setInput(updatelist)
        setIsEdit(i)
    }

    const savelist = () => {
        setTempList({
            name: listName,
            list: list
        })
        alert(listName)
        // setSavedList([...savedList, tempList])
        // setList([]);
        // // setTempList(null); 
        // setListName("")
    }




    return (
        <div className='box_todo'>
            <h3 className='header'>To Do Lists</h3>


            <div className='input_container'><input className='input' type="text" value={input} placeholder='Add Item' onChange={(e) => setInput(e.target.value)} />
                <i onClick={() => addItem()} className="fa fa-plus add-btn"></i>
            </div>
            {list.length ?
                <div className='List_name_box'>
                    <input className='List_name' type="text" value={listName} placeholder='List Name' onChange={(e) => setListName(e.target.value)} />
                    <button onClick={() => savelist()}>Save</button>
                </div> : null}

            {list.map((element, index) => {
                return (
                    <div className='item_list' key={index}>
                        <div className='item_text'>
                            <span >{element}</span>
                        </div>
                        <div className='list_button'>
                            <i className="fa fa-solid fa-trash" onClick={() => deleteItem(index)}></i>
                            <i className="fa fa-solid fa-edit" onClick={() => editItem(index)}></i>
                            {/* <i class="fa fa-check"></i> */}
                        </div>
                        {/* <button>button</button> */}
                    </div>
                )
            })}

            {list.length ? <div><button className='clear_All' onClick={() => setList([], setInput(""))}>Clear All</button></div> : null}

        </div>

    )

}

export default ToDoList
