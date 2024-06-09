"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Roadmap = () => {
  const [career, setCareer] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (career.trim()) {
      router.push(`/roadmap/${career}`);
    }
  };

  return (
    <>
      <div>
        <form id="myForm" onSubmit={handleSubmit} className="mt-5">
          <label htmlFor="career" className="form-label mx-1">Enter a job role</label>
          <input
            type="text"
            id="career"
            name="career"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
            className="border-black border-2"
          />
          <button type="submit" className="btn mx-4 px-2 border-neutral-400 border-2 text-2xl">Generate</button>
        </form>
      </div>
      <br />
      <hr />
      <br />
      <div>Skill-based Roadmaps</div>
      <button className='mx-2'>Python</button>
      <button className='mx-2'>JavaScript</button>
      <button className='mx-2'>Git</button>
      <button className='mx-2'>Machine Learning</button>
      <button className='mx-2'>Data Science</button>
      <button className='mx-2'>Data Analytics</button>
    </>
  );
}

export default Roadmap;
