"use client"
import Link from 'next/link'
import React from 'react'

import { useSession, signIn } from 'next-auth/react';

export default function Login() {
   const {status} = useSession();
  return (
    <div className='flex justify-center'>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border">
      <div className="card-body">
         <h1 className="text-3xl font-bold">Login now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>

<button onClick={()=>signIn("google",{ callbackUrl: "/" })} className="btn bg-white text-black border-[#e5e5e5]">
   Login with Google
</button>

        </fieldset>
        <p>New Account Please <Link href="/register" className='text-blue-700 font-semibold underline'>Register</Link></p>
      </div>
      
    </div>

    </div>
  )
}
