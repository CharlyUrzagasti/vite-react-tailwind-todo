import { useState } from "react"



const TodoCreate =({createTodo})=>{

const [title,setTitle]= useState("");


const handleSubmitAdd =(e)=>{

 e.preventDefault();
 
 if(!title.trim()){
  setTitle("");
 }else{
  createTodo(title);
  setTitle("")
 }
}


  return(

    <form onSubmit={handleSubmitAdd} className="overflow-hidden rounded-md bg-white py-4 flex gap-4 items-center px-4 mb-8">
          <span className="rounded-full border-2 w-5 h-5 inline-block "></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            className=" w-full text-gray-400 outline-none"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
          />
        </form>
  )
}

export default TodoCreate