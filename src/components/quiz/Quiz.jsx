"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Quiz = () => {

  const [skill, setSkill] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skill.trim()) {
      router.push(`/quiz/${skill}`);
    }
  };


  return (
    <>
    <div className='mb-56'>
        <form id="myForm" onSubmit={handleSubmit}>
            <div className="mx-auto px-4 py-4 flex justify-center items-center mt-20">
                <input  type="text"
                id="skill"
                name="skill"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                placeholder="Search..." className="border border-gray-300 px-4 py-2 rounded-md w-64 mr-2"/>
                <button type="submit" className="border text-white px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-700 hover:text-white">Take a quiz</button>
            </div>
        </form>

        <div className="mx-auto px-4 mt-14 mb-15">
            <p className='mb-5 text-slate-400'>Solve quizzes on these suggested tags*</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg content-center align-middle justify-center hover:border-2 hover:border-slate-500 hover:cursor-pointer" 
                onClick={() => router.push('/quiz/python')}>
                    Python
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg content-center align-middle justify-center hover:border-2 hover:border-slate-500 hover:cursor-pointer" onClick={() => router.push('/quiz/python')}>
                    Javascript
                    
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg content-center align-middle justify-center hover:border-2 hover:border-slate-500 hover:cursor-pointer" onClick={() => router.push('/quiz/python')}>
                    C#
                    
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg content-center align-middle justify-center hover:border-2 hover:border-slate-500 hover: cursor-pointer" onClick={() => router.push('/quiz/python')}>
                    C++
                    
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg content-center align-middle justify-center hover:border-2 hover:border-slate-500 hover: cursor-pointer" onClick={() => router.push('/quiz/python')}>
                    Git
                    
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg content-center align-middle justify-center hover:border-2 hover:border-slate-500 hover:cursor-pointer" onClick={() => router.push('/quiz/python')}>
                    Jenkins
                    
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg content-center align-middle justify-center hover:border-2 hover:border-slate-500 hover: cursor-pointer" onClick={() => router.push('/quiz/python')}>
                    C Programming
                    
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg content-center align-middle justify-center hover:border-2 hover:border-slate-500 hover: cursor-pointer" onClick={() => router.push('/quiz/python')}>
                    React.js
                    
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg content-center align-middle justify-center hover:border-2 hover:border-slate-500 hover: cursor-pointer" onClick={() => router.push('/quiz/python')}>
                    Next.js
                    
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg content-center align-middle justify-center hover:border-2 hover:border-slate-500 hover: cursor-pointer" onClick={() => router.push('/quiz/python')}>
                    Numpy
                    
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg content-center align-middle justify-center hover:border-2 hover:border-slate-500 hover: cursor-pointer" onClick={() => router.push('/quiz/python')}>
                    Pandas
                    
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg content-center align-middle justify-center hover:border-2 hover:border-slate-500 hover: cursor-pointer" onClick={() => router.push('/quiz/python')}>
                    R language
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Quiz