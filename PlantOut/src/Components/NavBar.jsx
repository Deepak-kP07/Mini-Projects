import logo from "../assets/logo.png";
export default function NavBar({ count, handleClick , onSearch}) {
 
 
  return ( 
    <>
      <nav className="flex justify-between items-center bg-green-200 px-8  h-[4rem] sticky top-0 z-10">
        <div className="flex items-center">
          <div className="rounded-full flex items-center justify-center">
            <img src={logo} alt="logo" className="h-[6rem]" />
          </div>
          <span className=" text-xl font-bold text-gray-800">
            {" "}
            PlantOut
          </span>
        </div>
        <div className="flex gap-6">
          <button
            className=" hover:bg-green-300 px-2 py-1 rounded-md"
            onClick={() => handleClick("discover")}
          >
            Discover
          </button>
          <button
            className=" hover:bg-green-300 px-2 py-1 rounded-md"
            onClick={() => handleClick("contribute")}
          >
            Contribute
          </button>
          <button
            className=" hover:bg-green-300 px-2 py-1 rounded-md"
            onClick={() => handleClick("mygarden")}
          >
            My Gardern ({count})
          </button>
          <button
            className=" hover:bg-green-300 px-2 py-1 rounded-md"
            onClick={() => handleClick("about")}
          >
            About
          </button>
        </div>
        <div className="flex gap-2 ">
          <input
            className="rounded px-2 focus:outline-none min-w-60 lg:w-[20rem]   py-1  bg-green-100"
            type="text"
            placeholder="Search for plants..."
            onChange={ onSearch}
          />
          {/* <button className='hover:bg-green-300 px-2 rounded'>Search</button> */}
        </div>
      </nav>
    </>
  );
}
