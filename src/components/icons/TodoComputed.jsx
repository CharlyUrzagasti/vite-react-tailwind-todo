const TodoComputed = ({computedItemsLeft,clearCompleted}) => {
  return(

<section className="flex justify-between  rounded-m-py-4 px-4 bg-white">
          <span className="text-gray-400"> {computedItemsLeft} items left</span>
          <button className="text-gray-400" onClick={clearCompleted}> Clear complete</button>
        </section>
      


  )
}
export default TodoComputed