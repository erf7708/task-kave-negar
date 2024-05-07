import { useQuery } from "react-query";
import { Post } from "@/utils/types";
import { getPosts } from "@/services/postServices";
import PostManagement from "@/components/posts/PostManagement";
import Loading from "@/components/loading/Loading";

export default function Home() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<Post[], Error>("posts", getPosts);
  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <PostManagement posts={posts} />
      )}
    </>
  );
}
