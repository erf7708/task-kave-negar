// در فایل PostTableManagement.tsx
import React from 'react';
import {PostTableManagementProps } from '@/utils/types';
import Link from 'next/link';



const PostTableManagement: React.FC<PostTableManagementProps> = ({ posts }) => {
  return (
    <div className="p-4">
    <h1 className="text-xl font-bold">Posts</h1>
    <ul>
      {posts?.map(post => (
        <li key={post.id} className="mb-2">
          <Link href={`/posts/${post.id}`}>
            <button className="text-blue-500 hover:underline">{post.title}</button>
          </Link>
        </li>
      ))}
    </ul>
  </div>

  );
}

export default PostTableManagement;
