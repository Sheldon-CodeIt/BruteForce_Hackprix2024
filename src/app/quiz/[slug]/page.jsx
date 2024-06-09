  "use client"

  import React, { useEffect, useState } from 'react';
  import { useSession } from 'next-auth/react';
  import { useRouter } from 'next/navigation';

  const QuizPage = ({ params }) => {
    const { status } = useSession();
    const router = useRouter();
    const { slug } = params;
    const [quiz, setQuiz] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
      const fetchQuiz = async () => {
        setLoading(true);
        setError(null);
        try {
          const decodedSlug = decodeURIComponent(slug);
          const response = await fetch('https://generate-roadmap.up.railway.app/quiz/', {
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
          setQuiz(data);
          
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      if (slug) {
        fetchQuiz();
      }
    }, [slug]);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setAnswers({ ...answers, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle submission of answers
      console.log('Submitted answers:', answers);
    };

    if(status === "unauthenticated"){
      router.push(`/login`);
    }

    return (
      <div className="quiz">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          quiz && (
            <>
              <div className='mt-20 mb-20'>
                <h1 className="text-3xl font-semibold mb-4">Quiz on {decodeURIComponent(slug)}</h1>
                <p className="my-5">{quiz.topic}</p>
                <form onSubmit={handleSubmit}>
                  {quiz.questions.map((item) => (
                    <div key={item.id} className="my-4">
                      <p className="font-semibold mb-2">{item.question}</p>
                      <ul>
                        {item.options.map((option, index) => (
                          <li key={index} className="flex items-center mb-2">
                            <input 
                              type="radio" 
                              name={`question-${item.id}`} 
                              value={option[0]} 
                              id={`option-${item.id}-${index}`} 
                              className="mr-2"
                              onChange={handleInputChange}
                            />
                            <label htmlFor={`option-${item.id}-${index}`}>{option}</label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">Submit</button>
                </form>
              </div>
            </>
          )
        )}
      </div>
    );
  };

  export default QuizPage;
