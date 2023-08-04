import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar top-0 bg-white fixed px-10 flex border-b-2 justify-between w-screen items-center '>
      <div className="logo">
        <img className='w-24' src="https://www.livelaw.in/cms/wp-content/uploads/2014/06/Naukri.jpg" alt="" />
      </div>
      <div className="links">
        <ul className='flex w-72 justify-between'>
          <li className='hover:opacity-80 cursor-pointer'>Home</li>
          <li className='hover:opacity-80 cursor-pointer'>Jobs</li>
          <li className='hover:opacity-80 cursor-pointer'>Premium</li>
          <li className='hover:opacity-80 cursor-pointer'>Contact Us</li>
        </ul>
      </div>
      <div className="auth">
        <button className='hover:opacity-70 mx-4 py-1 px-5 border-2 rounded-full '>Login</button>
        <button className='bg-sky-500 py-1 px-5 border-2 rounded-full text-white hover:bg-sky-300'>Signup</button>
      </div>
    </div>
  )
}

export default Navbar
