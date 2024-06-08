"use client"

import React from 'react' 
import Link from 'next/link';
import styles from "./signup.module.css";
import { useSession } from 'next-auth/react';

const signup = () => {
  
  const {data, status} = useSession();
  return (
      <div className={styles.container}>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form action="#">
            <div className="mb-4">
                <label for="name" className="block text-gray-700">Name</label>
                <input type="text" id="name" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your name" required />
            </div>
            <div className="mb-4">
                <label for="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your email" required />
            </div>
            <div className="mb-6">
                <label for="password" className="block text-gray-700">Password</label>
                <input type="password" id="password" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Sign Up</button>
        </form>
        <p className="mt-4 text-center">Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Login</Link></p>
        <div class="mt-4 text-center">Or</div>
        <button type="button" class="w-full border border-slate-500 text-slate-500 bg-white hover:bg-blue-100 hover:text-black p-2 rounded-md mt-2 flex items-center justify-center">
            <div class="mr-2">
                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.52 12.275c0-.851-.076-1.67-.218-2.455H12v4.642h6.458a5.52 5.52 0 01-2.394 3.622v3.01h3.878c2.269-2.088 3.578-5.165 3.578-8.82z" fill="#4285F4"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.997 24.001c3.24 0 5.956-1.074 7.942-2.907l-3.878-3.01c-1.075.72-2.45 1.145-4.064 1.145-3.125 0-5.77-2.111-6.714-4.948h-4.01v3.11A11.995 11.995 0 0011.997 24z" fill="#34A853"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.285 14.278a7.213 7.213 0 01-.376-2.28c0-.79.136-1.56.376-2.28V6.61H1.276A11.995 11.995 0 000 12c0 1.936.464 3.769 1.276 5.389l4.01-3.11z" fill="#FBBC05"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.997 4.773c1.762 0 3.344.605 4.587 1.794l3.442-3.442C17.948 1.19 15.232 0 11.997 0 7.307 0 3.248 2.69 1.273 6.61l4.01 3.11c.943-2.836 3.589-4.947 6.714-4.947z" fill="#EA4335"></path></svg>
            </div>
            <div>Signup with Google</div>
        </button>
    </div>
     </div>
  )
}

export default signup