"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const RoadmapPage = ({ params }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { slug } = params;
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoadmap = async () => {
      setLoading(true);
      setError(null);
      try {
        const decodedSlug = decodeURIComponent(slug);
        const response = await fetch('https://generate-roadmap.up.railway.app/roadmap/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: decodedSlug }),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setRoadmap(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchRoadmap();
    }
  }, [slug]);

  if (status === "unauthenticated") {
    router.push(`/login`);
  }

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        roadmap && (
          <div className='mt-10'>
            <h1 className="text-2xl font-semibold mb-4">Roadmap for {decodeURIComponent(slug)}</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">{roadmap.topic}</p>
            <div className="relative border-l border-gray-200 dark:border-gray-700 ">
              {roadmap.steps.map((item, index) => (
                <div key={item.step} className={`mb-10 ml-4 `}>
                  <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">{item.date}</time>
                  <h3 className="text-lg font-semibold text-black">{item.step}</h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
                    <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black border rounded-lg hover:bg-slate-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 over:cursor-pointer">
                      Learn more
                      <svg className="w-3 h-3 ml-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                    </a>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default RoadmapPage;
