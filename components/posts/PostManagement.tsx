import React from "react";
import { PostManagementProps } from "@/utils/types";
import Link from "next/link";

const PostManagement: React.FC<PostManagementProps> = ({ posts }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Posts
      </h1>
      <ul className="space-y-2 w-full max-w-4xl">
        {posts?.map((post) => (
          <li
            key={post.id}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col "
          >
            <Link href={`/posts/${post.id}`}>
              <button className="text-blue-500 hover:text-blue-600 font-medium text-lg ">
                {post.title}
              </button>
            </Link>
            <p className="text-gray-600 mt-2 ">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostManagement;
