'use client'
// import { headers } from 'next/headers';
import React from 'react'
import NotFound from './not-found';

export default function PostData() {
    const secretApiKey = process.env.SECRET_API_KEY;

    async function fetchPosts() {
        try {
            const response = await fetch('/api/posts', {});
            const data = await response.json();
            if (!data) {
                return <NotFound />;
            }
            console.log('Fetched posts:', data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }
    
  return (
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => fetchPosts()}>Fetch Posts</button>
  )
}
