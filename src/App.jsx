import React from 'react'
import { useState } from 'react'
let i = 0
function App() {
  const [Form, showForm] = useState(false)
  const [button, updateButton] = useState(true)
  const [todo, newTodo] = useState('')
  const [kam, newKam] = useState([])
  const [done, setDone] = useState([])

  const handleClick = () => {
    console.log('clicked')
    showForm(true)
    updateButton(false)
  }

  const handleNewTodo = (event) => {
    newTodo(event.target.value)
    // JSON.stringify(todo)
  }


  const handleSubmit = () => {
    i++
    newKam((oldTodo) => {
      return [...oldTodo, [todo, i]]
    })
    localStorage.setItem('my_todo', JSON.stringify(newKam))
    newTodo('')
    console.log("id", i)
  }

  const handleDone = () => {
    setDone(kam)

    // setDone((oldDone) => {
    //   return [...oldDone, kam(id)]
    // })
  }

  return (
    <>
      <h1 className="mt-5 mb-5 ml-40 text-xl font-semibold">XTodo</h1>
      <div className="w-full h-px bg-gray-300"></div>
      <div className="ml-40">
        <h1 className="text-3xl font-bold mt-9 mb-9">Things to get done</h1>
        <h2 className="mb-5 text-lg font-medium">Things to do</h2>
        {kam.map((kamMap) => {
          return (
            <>
              <div id={i} className="flex">
                <input
                  className="w-4 mt-1 mb-5 mr-3 text-white bg-white checked:text-white accent-yellow-500"
                  type="checkbox"
                  onClick={handleDone}
                ></input>
                <lable htmlFor="id" className="mb-5 font-medium text-gray-700">
                  {kamMap}
                </lable>
              </div>
            </>
          )
        })}
        {button && (
          <button
            className="px-2 py-1 font-medium text-white bg-yellow-500 rounded-full hover:bg-yellow-600"
            onClick={handleClick}
          >
            + Add a todo
          </button>
        )}
        {Form && (
          <div>
            <input
              className="border-2"
              onChange={handleNewTodo}
              value={todo}
            ></input>
            <button
              className="px-2 py-1 ml-2 font-medium text-white bg-yellow-500 rounded-full hover:bg-yellow-600"
              onClick={handleSubmit}
            >
              SAVE
            </button>
          </div>
        )}
        <h2 className="mt-5 text-lg font-medium">Things done</h2>
        {<div className="mb-5 font-medium text-gray-700">{done}</div>}
      </div>
    </>
  )
}

export default App
