import React from "react";


const Navbar =()=>{
    return(
        <>
           <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white ">
  <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
    <img class="h-12 inline-block"src="images/logoo.png" />
      <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span class="block relative w-6 h-px rounded-sm bg-white"></span>
        <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
    <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 hover:text-green-800" href="Home">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 hover:text-green-800" href="#About">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 hover:text-green-800" href="#Project">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 hover:text-green-800" href="#Consultant">
              Consultants
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 hover:text-green-800" href="#Partner">
              Partnership
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 hover:text-green-800" href="#Contact">
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