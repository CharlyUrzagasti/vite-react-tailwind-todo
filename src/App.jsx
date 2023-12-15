import CrossIcons from "./components/icons/CrossIcons";
import IconMoon from "./components/icons/IconMoon";
import Header from "./components/icons/Header";
import TodoCreate from "./components/icons/TodoCreate";
import TodoList from "./components/icons/TodoList";
import TodoFilter from "./components/icons/TodoFilter";
import TodoComputed from "./components/icons/TodoComputed";
import { useState } from "react";


const initialStateTodos = [

  { id: 1, title: "complete online javascript", completed: true },
  { id: 2, title: "go to the gym", completed: false },
  { id: 3, title: "10 minutes meditation", completed: true },
  { id: 4, title: "play tennis", completed: false },
  { id: 5, title: "study programation", completed: false },
]


const App = () => {

  const [todos, setTodos] = useState(initialStateTodos)

  const createTodo = (title) => {

    const newTodo = {

      id: Date.now(),
      title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const removeTodo = (id) => {
    setTodos(todos, filter((todo) => todo.id !== id));
  }

  const updateTodo = (id) => {
    setTodos(todos.map(
      todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }
  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  }


  const [filter, setFilter] = useState("active");

const changeFilter=(filter)=>setFilter(filter)

  const filteredTodos = () => {

    switch (filter) {
      case "all":
        return todos;

      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);

      default:
        return todos;
    }

  }


  return (
    <div className="min-h-screen bg-gray-300  bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-no-repeat bg-contain">

      <Header />
      <main className="container mx-auto mt-8 px-4 ">

        <TodoCreate createTodo={createTodo} />

        <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo} />

        <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted} />

        <TodoFilter changeFilter={changeFilter}/>

      </main >

      <footer className="text-center">
        Drug & Drop
      </footer>
    </div>

  )


}


export default App;