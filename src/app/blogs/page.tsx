'use client';

import Image from 'next/image';
import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Next.js 14',
    description: 'A deep dive into the features and improvements in Next.js 14.',
    image: 'https://img.freepik.com/free-photo/beautiful-wooden-pathway-going-breathtaking-colorful-trees-forest_181624-5840.jpg?t=st=1740738510~exp=1740742110~hmac=8e5626494abd6f619ef091ff73d09a8ae0c7996627d6703dfe9e526b5cfca394&w=1380',
  },
  {
    id: 2,
    title: 'Tailwind CSS Best Practices',
    description: 'Learn how to optimize your Tailwind CSS workflow for efficiency.',
    image: 'https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg',
  },
  {
    id: 3,
    title: 'Building Scalable React Apps',
    description: 'Tips and tricks to make your React applications more scalable.',
    image: 'https://img.freepik.com/free-photo/lake-mountains_1204-505.jpg?t=st=1740738648~exp=1740742248~hmac=5aca4ab466acd65341f5052dbd4356c4758523a122364a42a245286aad4ca85d&w=1380',
  },
  {
    id: 1,
    title: 'Understanding Next.js 14',
    description: 'A deep dive into the features and improvements in Next.js 14.',
    image: 'https://img.freepik.com/free-photo/beautiful-wooden-pathway-going-breathtaking-colorful-trees-forest_181624-5840.jpg?t=st=1740738510~exp=1740742110~hmac=8e5626494abd6f619ef091ff73d09a8ae0c7996627d6703dfe9e526b5cfca394&w=1380',
  },
  {
    id: 2,
    title: 'Tailwind CSS Best Practices',
    description: 'Learn how to optimize your Tailwind CSS workflow for efficiency.',
    image: 'https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg',
  },
  {
    id: 3,
    title: 'Building Scalable React Apps',
    description: 'Tips and tricks to make your React applications more scalable.',
    image: 'https://img.freepik.com/free-photo/lake-mountains_1204-505.jpg?t=st=1740738648~exp=1740742248~hmac=5aca4ab466acd65341f5052dbd4356c4758523a122364a42a245286aad4ca85d&w=1380',
  },
];

function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20 ">
      <h1 className="text-3xl font-bold text-left mb-6">Latest Blog Posts</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-dark ">
            <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;