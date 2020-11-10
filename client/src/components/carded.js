// import React from "react"
// import { Card, Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import axios from "axios"

function Carded() {
  // console.log(res.addtodo)
  const {todo , setTodo}=useState('')
  useEffect(() => {
    const Addtodo = axios.post("http://localhost:5000/todo")
      .then((res) => { setTodo(res.data) })
    .catch((err)=>{console.log(err,"err in addtodo in axios")})
  })
    console.log('hellooo')
    return (
        <div className="card">
        <h1>to do list : </h1>
        <input>{todo}</input>
        <button onClick={console.log(res.axios)}>add</button>
            </div>
        );
    }
export default Carded;
