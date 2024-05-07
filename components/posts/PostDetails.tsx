import Link from "next/link";
import { PostDetailsProps } from "@/utils/types";

export const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
      <Link href="/">
        <button className="inline-block mb-5 px-4 py-2 bg-blue-500 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
          ← Back to posts
        </button>
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{post?.title}</h1>
      <p className="text-gray-700 text-lg">{post?.body}</p>
    </div>
  );
};
