'use client';

import React, { useEffect, useState } from 'react';

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || '/job_listing.json';

  // This is a public token, treated like an API key, not user auth
  const PUBLIC_TOKEN = 'eyJrdHkiOiJvY3QiLCJrIjoiVTFrNnl1eW5abUVybUhodkZITDYtbjhqZnB4VG9pOG5UX1lvZ2puOURtQnF6TjVVbGtZaC1WQldsLXJJMmZyOXRWdVlmYURFenFmZGVTNHNNdmdsMnJGWXpySFhwb2ZpOGJnTjJlbWkydHBGejlrUXE3aFhtcjAxcldZNDZXNUhIdWJhY0FIcWQ0dUluemlySzVRY283ZUxlcFdzVkVJS3hSWGxIY3hyWG9NIn0=';

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `${PUBLIC_TOKEN}`, // API key-like bearer token
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }

        const data = await response.json();
        console.log('Fetched jobs:', data); // Debugging line to check fetched data
        setJobs(data);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
      {jobs.length === 0 ? (
        <p>No jobs available at the moment.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {jobs.map((job) => (
            <div key={job.id} className="p-4 border rounded shadow-sm">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company_name}</p>
              <p className="text-sm">{job.location || 'Remote'}</p>
              {job.url && (
                <a
                  href={job.url}
                  className="text-blue-600 hover:underline mt-2 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Job
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobBoard;
