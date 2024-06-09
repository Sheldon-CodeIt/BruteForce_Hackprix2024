import React from 'react'

const More = () => {
  return (
    <div>
        <div className="mb rounded-3xl mx-auto bg-black p-10 px-15">
        <h2 className="mb-0.5 text-xl font-semibold text-white sm:mb-1 sm:text-2xl">
            There is more!
        </h2>
        <p className="text-sm text-gray-400 sm:text-base">
            We have a lot more content for you to explore.
        </p>
        <div
            className="my-4 grid grid-cols-1 gap-2 sm:my-5 sm:grid-cols-2 sm:gap-3 md:grid-cols-3"
        >
            <a
            href="/roadmaps"
            className="flex-grow rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 p-4 text-sm text-white transition-all hover:from-gray-700 hover:to-gray-700 sm:text-base"
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
                className="lucide lucide-waypoints mb-3 h-5 w-5 text-gray-500 sm:mb-2"
            >
                <circle cx="12" cy="4.5" r="2.5"></circle>
                <path d="m10.2 6.3-3.9 3.9"></path>
                <circle cx="4.5" cy="12" r="2.5"></circle>
                <path d="M7 12h10"></path>
                <circle cx="19.5" cy="12" r="2.5"></circle>
                <path d="m13.8 17.7 3.9-3.9"></path>
                <circle cx="12" cy="19.5" r="2.5"></circle>
            </svg>
            Explore all Roadmaps
            </a>
            <a
            href="/best-practices"
            className="flex-grow rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 p-4 text-sm text-white transition-all hover:from-gray-700 hover:to-gray-700 sm:text-base"
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
                className="lucide lucide-square-check-big mb-3 h-5 w-5 text-gray-500 sm:mb-2"
            >
                <path d="m9 11 3 3L22 4"></path>
                <path
                d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                ></path>
            </svg>
            Explore Best Practices
            </a>
            <a
            href="/questions"
            className="flex-grow rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 p-4 text-sm text-white transition-all hover:from-gray-700 hover:to-gray-700 sm:text-base"
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
                className="lucide lucide-square-check-big mb-3 h-5 w-5 text-gray-500 sm:mb-2"
            >
                <path d="m9 11 3 3L22 4"></path>
                <path
                d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                ></path>
            </svg>
            Explore Questions
            </a>
        </div>
        <p className="text-sm text-gray-400 sm:text-base">
            Or visit our
            <a
            href="/guides"
            className="rounded-lg bg-gray-700 px-2 py-1 text-gray-300 transition-colors hover:bg-gray-600 hover:text-white"
            >guides</a
            >
            and
            <a
            href="/videos"
            className="rounded-lg bg-gray-700 px-2 py-1 text-gray-300 transition-colors hover:bg-gray-600 hover:text-white"
            >videos</a
            >
            for long-form content.
        </p>
        </div>
        <div className="border-b border-t bg-white py-6 text-left sm:py-16 sm:text-center">
        <div className="container !max-w-[650px] mx-auto mt-24">
            <p className="text-2xl font-bold sm:text-5xl">Join the Community</p>
            
            <div
            className="mt-5 grid grid-cols-1 justify-between gap-2 divide-x-0 sm:my-11 sm:grid-cols-3 sm:gap-0 sm:divide-x mb-4 sm:mb-0"
            >
            <div
                className="flex items-start sm:items-center justify-start flex-col sm:justify-center sm:gap-0 gap-2 sm:bg-transparent sm:rounded-none rounded-xl p-0 sm:p-4 mb-3 sm:mb-0"
            >
                
                <a
                href="https://github.com/kamranahmedse/developer-roadmap"
                target="_blank"
                className="group mt-0 flex flex-col items-center rounded-lg border border-black bg-white px-3 py-2 text-sm hover:bg-black hover:text-white"
                >
                <div className="mb-0.5 flex items-center font-semibold">
                    <svg
                    className="-ml-1 fill-current"
                    focusable="false"
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M6.99999 11.1515L2.88574 13.4545L3.80449 8.82984L0.342407 5.6285L5.02482 5.07317L6.99999 0.791504L8.97516 5.07317L13.6576 5.6285L10.1955 8.82984L11.1142 13.4545L6.99999 11.1515Z"
                    ></path>
                    </svg>
                    <span className="ml-1.5 hover:block">Star us on GitHub</span>
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-100">
                    Help us reach #1
                </span>
                </a>
            </div>
            <div
                className="flex items-start sm:items-center justify-start flex-col sm:justify-center sm:gap-0 gap-2 sm:bg-transparent sm:rounded-none rounded-xl p-0 sm:p-4 mb-3 sm:mb-0"
            >
                <div className="flex flex-row items-center sm:flex-col my-1 sm:my-0">
                
                </div>
                <a
                href="/signup"
                className="group mt-0 flex flex-col items-center rounded-lg border border-black bg-white px-3 py-2 text-sm hover:bg-black hover:text-white"
                >
                <div className="mb-0.5 flex items-center font-semibold">
                    <svg
                    data-v-f24af897=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    strokelinejoin="round"
                    className="-ml-1 h-[15px] fill-current"
                    >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span className="ml-1 hover:block">Register yourself</span>
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-100">
                    Commit to your growth
                </span>
                </a>
            </div>
            <div
                className="flex items-start sm:items-center justify-start flex-col sm:justify-center sm:gap-0 gap-2 sm:bg-transparent sm:rounded-none rounded-xl p-0 sm:p-4 mb-3 sm:mb-0"
            >
                <div className="flex flex-row items-center sm:flex-col my-1 sm:my-0">
                
                </div>
                <a
                href="https://discord.gg/cJpEt5Qbwa"
                target="_blank"
                className="group mt-0 flex flex-col items-center rounded-lg border border-black bg-white px-3 py-2 text-sm hover:bg-black hover:text-white"
                >
                <div className="mb-0.5 flex items-center font-semibold">
                    <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="-ml-1 h-[13px] fill-current"
                    >
                    <g clip-path="url(#clip0_1303_4)">
                        <path
                        d="M2.79481 1.71886C2.80349 1.70994 2.81651 1.70101 2.82953 1.68762C3.86686 0.830474 5.25576 0.392973 6.23667 0.183152C7.20455 -0.0266694 8.17242 0.540293 8.48492 1.50012C8.48925 1.51798 8.49792 1.53136 8.5023 1.54922C6.87467 1.71886 5.42067 2.17869 4.24013 2.89744C3.93196 3.08494 3.83214 3.49565 4.01443 3.81708C4.13596 4.0269 4.35296 4.14298 4.57434 4.14298C4.68717 4.14298 4.80438 4.11172 4.90855 4.04923C6.23667 3.23672 7.9988 2.80815 9.99967 2.80815C12.0005 2.80815 13.7627 3.23672 15.0908 4.04923C15.4033 4.23673 15.8026 4.13404 15.9849 3.81708C16.1672 3.49565 16.0674 3.08494 15.7592 2.89744C14.5787 2.17869 13.1247 1.71886 11.4971 1.54922C11.5014 1.53136 11.5101 1.51798 11.5144 1.50012C11.8269 0.540293 12.7948 -0.0266694 13.7627 0.183152C14.7436 0.392973 16.1325 0.830474 17.1698 1.68762C17.1828 1.70101 17.1958 1.70994 17.2045 1.71886C18.1681 2.63851 19.9476 7.31707 19.9476 11.5671C19.9476 11.6831 19.9215 11.7947 19.8651 11.8974C18.8061 13.8126 16.3104 14.5135 15.2818 14.7233C15.1559 14.7501 15.03 14.7635 14.9042 14.7635C14.2879 14.7635 13.6933 14.4599 13.3243 13.9331L13.0986 13.6162C15.3339 13.0715 16.4797 12.0894 16.5448 12.0314C16.8183 11.7903 16.853 11.3707 16.6186 11.0894C16.3842 10.8082 15.9763 10.7724 15.7028 11.009C15.6681 11.0403 13.754 12.6341 9.99967 12.6341C6.22796 12.6341 4.31392 11.0269 4.29655 11.009C4.02311 10.7724 3.61078 10.8082 3.38075 11.0939C3.15071 11.3751 3.1811 11.7947 3.45453 12.0314C3.51964 12.0894 4.66546 13.0715 6.90071 13.6162L6.67501 13.9331C6.30609 14.4599 5.71146 14.7635 5.09517 14.7635C4.9693 14.7635 4.84342 14.7501 4.71755 14.7233C3.68891 14.5135 1.19325 13.8126 0.134222 11.8974C0.0777986 11.7947 0.0517578 11.6831 0.0517578 11.5671C0.0517578 7.31707 1.83127 2.63851 2.79481 1.71886ZM12.8078 10.3573C13.6368 10.3573 14.3096 9.56707 14.3096 8.58941C14.3096 7.61171 13.6368 6.82156 12.8078 6.82156C11.9745 6.82156 11.3018 7.61171 11.3018 8.58941C11.3018 9.56707 11.9745 10.3573 12.8078 10.3573ZM7.20455 10.393C8.04221 10.393 8.72363 9.59386 8.72363 8.60724C8.72363 7.62067 8.04221 6.82156 7.20455 6.82156C6.36251 6.82156 5.68542 7.62067 5.68542 8.60724C5.68542 9.59386 6.36251 10.393 7.20455 10.393Z"
                        fill="currentColor"
                        ></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_1303_4">
                        <rect width="20" height="15" fill="currentColor"></rect>
                        </clipPath>
                    </defs>
                    </svg>
                    <span className="ml-1 hover:block">Join on Discord</span>
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-100">
                    Join the community
                </span>
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>

  )
}

export default More