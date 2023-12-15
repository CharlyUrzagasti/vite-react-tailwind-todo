import TodoItem from "./TodoItem"

const TodoList = ({todos,removeTodo,updateTodo}) => { 
    return(

<div className="mt-8 bg-white [&>article]:p-4  rounded-t-md ">


{todos.map((todo)=>( 

<TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>

))}

</div>


    )
  
}



export default TodoList;


