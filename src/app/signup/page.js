import React from 'react' 
import Link from 'next/link';
import styles from "./signup.module.css";

const signup = () => {
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
    </div>
     </div>
  )
}

export default signup