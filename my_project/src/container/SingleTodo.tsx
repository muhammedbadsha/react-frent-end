import React from 'react';
import { Todo } from '../modal';
import {AiFillEdit,AiOutlineDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md'
import TodoList from './TodoList';

type Props = {
    todo : Todo;
    todos : Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({todo,todos,setTodos}:Props) =>{
  const handleDone=(id:number)=> {
    setTodos(
      todos.filter((todo) =>
                todo.id !== id 
                )
              );
  };
  const handleDelete = (id:number) =>{
    setTodos(
      todos.map((todo) => 
              todo.id === id ? { ...todo,is_done:!todo.is_done}:todo
      )
    );
  };
  return (
    
    <form action="" className="todos__single">
      {
        todo.is_done  ?(
          <s className="todos__single--text">{todo.todo}</s>

        ):(
          <span className="todos__single--text">{todo.todo}</span>


        )
      }
      <div className='todos_single--left'>
        {/* <span className="todos__single--text">{todo.todo}</span>  */}
        </div>
        <div className='todos_single--right'>
        <span className="icons" onClick = { ()=>handleDone(todo.id)}><AiFillEdit /></span>
        <span className="icons" onClick = { ()=>handleDelete(todo.id)}><AiOutlineDelete /></span>
        <span className="icons" onClick = { ()=>handleDone(todo.id)}><MdDone /></span>
        </div>
    </form>
   
  )
}

export default SingleTodo