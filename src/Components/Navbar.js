import React from "react";


const Navbar =()=>{
    return(
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white min-h-10">
              <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                <img className="h-12 inline-block"src="images/logoo.png" />
                  <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                    <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                  </button>
                </div>
                <div className=" hidden md:flex flex-grow items-center" id="example-navbar-warning">
                  <ul className="flex flex-col lg:flex-row list-none ml-auto">
                      <li className="nav-item">
                        <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-red-800 hover:text-black" href="Home">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-red-800 hover:text-black" href="#About">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-red-800 hover:text-black" href="#Project">
                          Projects
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-red-800 hover:text-black" href="#Consultant">
                          Consultants
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-red-800 hover:text-black" href="#Partner">
                          Partnership
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-red-800 hover:text-black" href="#Contact">
                          Contact
                        </a>
                      </li>

                  </ul>
                </div>
              </div>
            </nav>

        </>
    );
};
export default Navbar;