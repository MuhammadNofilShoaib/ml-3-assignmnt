// @typescript-eslint/no-explicit-any
'use client';
import Comment from '@/components/Comment';
import { post } from '@/data/post';
import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {

  const { id } = useParams();

  const currentPost = post.find((p) => p.id === id);

  const postId = Array.isArray(id) ? id[0] : id;


  if (!currentPost) return <div>Post not found!</div>;

  return ( 
    <div className="max-w-4xl mx-auto font-sans my-5 px-5">

      <h1 className="text-3xl font-bold">{currentPost.title}</h1>

      <p className="text-xl mt-2">{currentPost.content}</p>

      <Comment postId={postId} />
    </div>
  );
};

export default Page;    