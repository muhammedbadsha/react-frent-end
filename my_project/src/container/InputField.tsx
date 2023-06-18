import React, { useRef } from 'react'
import './style.css'
interface Props{
   todo:string;
   setTodo:React.Dispatch<React.SetStateAction<string>>;
   handleAdd:(e: React.FormEvent) => void;
}
const InputField = ({todo,setTodo,handleAdd }:Props) => {
   const inputRef = useRef<HTMLInputElement>(null);
 return(
    <form action="" onSubmit={(e) =>{ handleAdd(e);inputRef.current?.blur()}}  className='inp_form_main'>
        <input type="text" className='inp_form' name="" ref={inputRef} placeholder='enter here' value={todo} onChange={(e) => setTodo(e.target.value)} id="" />
        <button className='btn' type="submit">go</button>
    </form>
   //  <div>input</div>
 )
}

export default InputField