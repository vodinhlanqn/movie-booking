import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/imgs/netflix-logo-png.png';
import { USER_LOGIN } from "../../utils/constant.js";

export default function Header() {
  let isLogin = localStorage.getItem(USER_LOGIN);
  let [reset, setReset] = useState(0);

  return (
    <header className="p-2 bg-black text-white  w-full z-10 fixed top-0 left-0 right-0">
      <div className=" flex justify-between h-16 mx-5">
        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
          <img src={logo} width={150} alt='logo' />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink rel="noopener noreferrer" to='/lichchieuphim' className="flex items-center px-4 -mb-1 border-b-2 border-transparent  text-white">Lịch chiếu phim</NavLink>
          </li>

          <li className="flex">
            <NavLink rel="noopener noreferrer" to='/contact' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white">Contact</NavLink>
          </li>

          <li className="flex">
            <NavLink rel="noopener noreferrer" to='/news' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white">News</NavLink>
          </li>

          <li className="flex">
            <NavLink rel="noopener noreferrer" to='' className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white">App</NavLink>
          </li>

        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {isLogin
            ?
            <button className="self-center px-8 py-3 rounded bg-red-700 mr-3"
              onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                setReset(reset + 1)
              }
              }>Logout</button>

            :
            <NavLink to='/' >
              <button className="self-center px-8 py-3 rounded">Sign in</button>
            </NavLink>
          }
          <NavLink to='/register' >
            <button className="self-center px-8 py-3 font-semibold rounded bg-emerald-600 text-gray-50">Sign up</button>
          </NavLink>
        </div>
        <button className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>



  )
}
