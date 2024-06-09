import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
        <div className="container mx-auto px-4 py-14">
        <div className="flex">
          <div className="w-1/2 px-0 py-4">
            <h1 className="text-7xl font-extrabold">
              Empowering Your Career Journey, <br />
              One Step at a Time!
            </h1>
            <h4 className="text-xl text-gray-500">
              <br />Welcome to our personalized career roadmap generator, where
              we tailor a strategic path just for you. Discover your strengths,
              explore opportunities, and achieve your career goals with
              confidence. Let's embark on this journey together, unlocking your
              full potential along <br />
              the way!
            </h4>
          </div>
          <div className="w-1/2 px-0">
            <img
              src="/Chart Process Roadmap Diagram Infographic Graph.png"
              alt="Career Roadmap Image"
              className="w-full h-auto mt-1"
            />
          </div>
        </div>
      </div>

        <div className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-xl w-36 content-center mx-auto mb-5"><Link href="/roadmap">Get started</Link></div>
    </div>
  )
}

export default Hero