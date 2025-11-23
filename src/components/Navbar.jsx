import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const links = <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/products">Products</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </>
  return (
        
        
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         {links}
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
    {links}
 
    </ul>
  </div>
  <div className="navbar-end">
    <Link href="/login" className="btn">Login</Link>
    <div>
        <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className=" m-1">

    <div className="avatar cursor-pointer">
    <div className="w-12 h-12 rounded-full">
      <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
    </div>
  </div>
    
    </div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><Link href="/dashboard/addProduct">Add Product</Link></li>
    <li><Link href="/manageProduct">Manage Product</Link></li>
   <button className='btn'>Logout</button>
  </ul>
</div>
    </div>

  </div>
</div>

  )
}

{/* <Link href="/contact">Contact</Link> */}