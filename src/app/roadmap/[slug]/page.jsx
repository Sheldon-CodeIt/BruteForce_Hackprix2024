"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import prisma from "@/utils/connect";


const RoadmapPage = ({ params }) => {

  const {status} = useSession()
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
          body: JSON.stringify({ title: decodedSlug  }),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setRoadmap(data);


        // Send data to API route to store in database
        const storeResponse = await fetch(`/api/roadmaps/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                slug: slug,
                title: decodedSlug,
                desc: "aklsdjjjlskdf;l",
                steps: roadmap.steps,
            }),
          });
  
          if (!storeResponse.ok) {
            throw new Error('Failed to store roadmap data');
          }


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
 
  if(status === "unauthenticated"){
    router.push(`/login`);
  }
  
  return (
    <div className="roadmap">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        roadmap && (
          <>
            <div>
              <h1>Roadmap on {decodeURIComponent(slug)}</h1>
              <p className="my-5">{roadmap.topic}</p>
              {roadmap.steps.map((item) => (
                <div key={item.step}>
                  <Link href={`/roadmap/${item.step}`} className="font-bold">{item.step}</Link>
                  <span> : {item.description}</span>
                </div>
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default RoadmapPage;
