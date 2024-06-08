import React from 'react'
import styles from "./login.module.css";
import Link from 'next/link';

const login = () => {
  return (
      <div className={styles.container}>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form action="#">
            <div className="mb-4">
                <label for="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your email" required/>
            </div>
            <div className="mb-6">
                <label for="password" className="block text-gray-700">Password</label>
                <input type="password" id="password" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your password" required/>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Login</button>
        </form>
        <p className="mt-4 text-center">Don't have an account? <Link href="/signup" className="text-blue-500 hover:underline">Sign up</Link></p>
    </div>
     </div>
  )
}

export default login