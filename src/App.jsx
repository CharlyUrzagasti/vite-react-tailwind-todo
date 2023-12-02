import CrossIcons from "./components/icons/CrossIcons";
import IconMoon from "./components/icons/IconMoon";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-300  bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain">

      <header className="container mx-auto px-4 pt-8">

        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white"> Todo </h1>

          <button> <IconMoon fill="#fff"/> </button>

        </div>

        <form className="overflow-hidden rounded-md bg-white py-4 flex gap-4 items-center px-4 mt-8">
          <span className="rounded-full border-2 w-5 h-5 inline-block "></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            className=" w-full text-gray-400 outline-none"
          />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4 ">
        <div className="bg-white rounded -md ">
          <article className="flex border-b border-b-gray-400 gap-4 py-4 px-4">

            <button className="rounded-full border-2 w-5 h-5 inline-block  "> </button>
            <p className="grow text-gray-600">  complete online javascrpit</p>
            <button className="flex-none">
              <CrossIcons />
            </button>
          </article>

          <article className="flex border-b border-b-gray-400 gap-4 py-4 px-4">
            <button className="rounded-full border-2 w-5 h-5 inline-block "> </button>
            <p className="grow text-gray-600">  complete online javascrpit</p>
            <button className="flex-none" ><CrossIcons /></button>
          </article>

          <article className="flex border-b border-b-gray-400 gap-4 py-4 px-4">
            <button className="rounded-full border-2 w-5 h-5 inline-block " >  </button>
            <p className="grow text-gray-600" >  complete online javascrpit</p>
            <button className="flex-none"> <CrossIcons /></button>
          </article>

          <section className="flex justify-between py-4 px-4">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400" > Clear complete</button>
          </section>

        </div>


      </main>

      <section className="container mx-auto mt-8 px-4">
        <div className="flex justify-center gap-4 rounded-md bg-white">
        <button className="hover:text-blue-600">All</button>
        <button  className="hover:text-blue-600" >Active</button>
        <button  className="hover:text-blue-600" >Completed</button>
        </div>
        
      </section>

      <p className="text-center"> Drug & Drop</p>
    </div>

  )


}


export default App;