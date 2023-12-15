import CheckIcon from "./CheckIcon";
import CrossIcons from "./CrossIcons"


const TodoItem = ({ todo, removeTodo, updateTodo}) => {

    const { id, title, completed } = todo;
    return (

        <article className="flex border-b border-b-gray-400 gap-4 py-4 px-4">

            {/* <button className="rounded-full border-2 w-5 h-5 inline-block  ">  
            <CheckIcon/>
            </button> */}
            <button className={`${completed ? "flex flex-none items-center justify-center rounded-full border-2 w-5 h-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "rounded-full border-2 w-5 h-5 inline-block"}`}
            
                onClick={() => updateTodo(id)}
>


                
                {completed && <CheckIcon />}
            </button>

            <p className={`grow text-gray-600 ${completed && "line-through"}`}>
                {title}
            </p>
            <button className="flex-none "   onClick ={()=> removeTodo(id)}>
                <CrossIcons />
            </button>
        </article>
    )

}

export default TodoItem