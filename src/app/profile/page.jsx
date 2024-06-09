"use client"

import React from 'react'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Profile = () => {

  const { data: session, user} = useSession();

  return (
    <div>
        <div class="container mx-auto px-4 py-8">
            <div class="bg-white shadow rounded-lg p-6">
                <h2 class="text-2xl font-semibold mb-6">Profile</h2>
                <form >
                    <div class="mb-4 flex items-center">
                        <div class="w-20 h-20 mr-6">
                            <img src="/account-avatar-profile-user-6-svgrepo-com.png" alt="Profile Image" class="rounded-full w-full h-full object-cover"/>
                        </div>
                        <div class="w-50">
                            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="username">
                            session.user.id
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                        </div>
                    </div>
                    
    
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="fullName">
                            Full Name
                        </label>
                        <input class="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullName" type="text" placeholder="Full Name"/>
                    </div>
                    
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">
                            Email ID
                        </label>
                        <input class="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email ID"/>
                    </div>

                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="resume">
                            Upload Resume (PDF)
                        </label>
                        <input class="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="resume" type="file" accept="application/pdf"/>
                    </div>
                    

                    <div class="mb-4">
                        <label class="block text-gray-700 text-lg font-bold mb-2 ml-5 mt-8" for="roadmaps">
                            Saved Roadmaps
                        </label>
                        <div class=" mx-auto px-4 mt-1 py-2">
                            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                                
                                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                                Machine Learning
                                </div>
                                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                                Data Science
                                </div>
                                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                                Next.js
                                </div>
                            </div>
                        </div>
                    
                        
                    </div>
                    <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6" type="button">
                                Edit
                            </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Profile