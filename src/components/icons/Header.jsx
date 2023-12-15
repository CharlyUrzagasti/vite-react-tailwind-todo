import IconMoon from "./IconMoon"

const Header = (props) => {

    return(

        <header className="container mx-auto px-4 pt-8">

        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white"> Todo </h1>

          <button> <IconMoon fill="#fff" /> </button>

        </div>


      </header>   
    )
  
}

export default Header