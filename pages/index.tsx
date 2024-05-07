import { useQuery } from "react-query";
import { Post } from "@/utils/types";
import { getPosts } from "@/services/postServices";
import PostTableManagement from "@/components/posts/PostTableManagement";

export default function Home() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<Post[], Error>("posts", getPosts);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <PostTableManagement posts={posts} />
      )}
    </>
  );
}
