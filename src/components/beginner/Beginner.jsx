import React from 'react'

const Beginner = () => {
  return (
    <div className='mb-28'>
        <div className='my-10 mt-40'><span class="rounded-full bg-black px-4 py-3 text-base text-white mx-5">Beginner Roadmaps</span></div>
        <div class="px-4 py-2">
            <h1 class="text-5xl font-semibold">Are you an Absolute beginner?</h1>
            <p class="text-xl text-gray-500 font-medium py-4">
                Here are some beginner friendly roadmaps you should start with.
            </p>

            <div class="py-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">

                <a
                href="/frontend?r=frontend-beginner"
                target="_blank"
                class="group relative block rounded-xl border border-gray-300 bg-gradient-to-br from-gray-100 to-gray-50 p-3.5 sm:p-5 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:border-black/30 hover:bg-gray-50/70 hover:shadow-sm"
                >
                <div class="mb-2 sm:mb-5 flex flex-row items-center">
                    <div
                    class="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gray-900 text-white"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-earth h-4 sm:h-5"
                    >
                        <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
                        <path
                        d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"
                        ></path>
                        <path
                        d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
                        ></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                    </div>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-external-link absolute right-2 top-2 h-4 text-gray-300 transition group-hover:text-gray-700"
                >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path>
                </svg>
                <span class="mb-0 block text-lg sm:text-xl font-semibold sm:mb-2"
                    >Frontend Developer</span>
                <span class="text-sm text-gray-500"
                    >Develop the part of web apps that users interact with i.e. things
                    rendered in the browser.</span>
                </a>

                <a
                href="/backend?r=backend-beginner"
                target="_blank"
                class="group relative block rounded-xl border border-gray-300 bg-gradient-to-br from-gray-100 to-gray-50 p-3.5 sm:p-5 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:border-black/30 hover:bg-gray-50/70 hover:shadow-sm"
                >
                <div class="mb-2 sm:mb-5 flex flex-row items-center">
                    <div
                    class="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gray-900 text-white"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-server-cog h-4 sm:h-5"
                    >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path
                        d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"
                        ></path>
                        <path
                        d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"
                        ></path>
                        <path d="M6 6h.01"></path>
                        <path d="M6 18h.01"></path>
                        <path d="m15.7 13.4-.9-.3"></path>
                        <path d="m9.2 10.9-.9-.3"></path>
                        <path d="m10.6 15.7.3-.9"></path>
                        <path d="m13.6 15.7-.4-1"></path>
                        <path d="m10.8 9.3-.4-1"></path>
                        <path d="m8.3 13.6 1-.4"></path>
                        <path d="m14.7 10.8 1-.4"></path>
                        <path d="m13.4 8.3-.3.9"></path>
                    </svg>
                    </div>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-external-link absolute right-2 top-2 h-4 text-gray-300 transition group-hover:text-gray-700"
                >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path>
                </svg>
                <span class="mb-0 block text-lg sm:text-xl font-semibold sm:mb-2"
                    >Backend Developer</span>
                <span class="text-sm text-gray-500"
                    >Develop the part hidden from the user e.g. things like APIs,
                    databases, search engines etc.</span>
                </a>
                <a
                href="/full-stack"
                target="_blank"
                class="group relative block rounded-xl border border-gray-300 bg-gradient-to-br from-gray-100 to-gray-50 p-3.5 sm:p-5 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:border-black/30 hover:bg-gray-50/70 hover:shadow-sm"
                >
                <div class="mb-2 sm:mb-5 flex flex-row items-center">
                    <div
                    class="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gray-900 text-white"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-earth h-4 sm:h-5"
                    >
                        <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
                        <path
                        d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"
                        ></path>
                        <path
                        d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
                        ></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                    </div>
                    <span class="mx-2 text-gray-400">+</span>
                    <div
                    class="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gray-900 text-white"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-server-cog h-4 sm:h-5"
                    >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path
                        d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"
                        ></path>
                        <path
                        d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"
                        ></path>
                        <path d="M6 6h.01"></path>
                        <path d="M6 18h.01"></path>
                        <path d="m15.7 13.4-.9-.3"></path>
                        <path d="m9.2 10.9-.9-.3"></path>
                        <path d="m10.6 15.7.3-.9"></path>
                        <path d="m13.6 15.7-.4-1"></path>
                        <path d="m10.8 9.3-.4-1"></path>
                        <path d="m8.3 13.6 1-.4"></path>
                        <path d="m14.7 10.8 1-.4"></path>
                        <path d="m13.4 8.3-.3.9"></path>
                    </svg>
                    </div>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-external-link absolute right-2 top-2 h-4 text-gray-300 transition group-hover:text-gray-700"
                >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path>
                </svg>
                <span class="mb-0 block text-lg sm:text-xl font-semibold sm:mb-2"
                    >Full Stack Developer</span>
                <span class="text-sm text-gray-500"
                    >Develop both the frontend and backend side of the web apps i.e. the
                    whole development stack.</span>
                </a>
            </div>
        </div>
        <div class="rounded-xl border bg-white p-3 sm:p-4 mt-10">
          <h2 class="text-lg font-semibold sm:text-xl">Tips for Beginners</h2>
          <p class="text-sm sm:text-base">
            Learning to code can be overwhelming, here are some tips to help you
            get started:
          </p>
          <div class="mt-3 flex flex-col gap-1">
            <div class="flex flex-col">
              <div
                class="cursor-pointer rounded-lg sm:rounded-xl bg-black px-3 py-2 text-sm sm:text-base text-white"
              >
                Avoid Tutorial Hell
              </div>
            </div>
            <div class="flex flex-col">
              <div
                class="cursor-pointer rounded-lg sm:rounded-xl bg-black px-3 py-2 text-sm sm:text-base text-white"
              >
                Consistent study habits
              </div>
            </div>
            <div class="flex flex-col">
              <div
                class="cursor-pointer rounded-lg sm:rounded-xl bg-black px-3 py-2 text-sm sm:text-base text-white"
              >
                Set a clear goal
              </div>
            </div>
            <div class="flex flex-col">
              <div
                class="cursor-pointer rounded-lg sm:rounded-xl bg-black px-3 py-2 text-sm sm:text-base text-white"
              >
                Embrace the marathon mindset
              </div>
            </div>
            <div class="flex flex-col">
              <div
                class="cursor-pointer rounded-lg sm:rounded-xl bg-black px-3 py-2 text-sm sm:text-base text-white"
              >
                Build projects
              </div>
            </div>
            <div class="flex flex-col">
              <div
                class="cursor-pointer rounded-lg sm:rounded-xl bg-black px-3 py-2 text-sm sm:text-base text-white"
              >
                Learn to get unstuck
              </div>
            </div>
            <div class="flex flex-col">
              <div
                class="cursor-pointer rounded-lg sm:rounded-xl bg-black px-3 py-2 text-sm sm:text-base text-white"
              >
                Join a community
              </div>
            </div>
          </div>
        </div>
    </div>
    )
};

export default Beginner