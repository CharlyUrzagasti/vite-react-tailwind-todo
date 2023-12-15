const TodoFilter = ({changeFilter}) => {
  return(
    <section className="container mx-auto mt-8 px-4">
    <div className="flex justify-center gap-4 rounded-md bg-white">
      <button className="hover:text-blue-600" onClick={()=>changeFilter("all")}>All</button>
      <button className="hover:text-blue-600" onClick={()=>changeFilter("active")}>Active</button>
      <button className="hover:text-blue-600" onClick={()=>changeFilter("completed")}>Completed</button>
    </div>

  </section>


  )
}

export default TodoFilter