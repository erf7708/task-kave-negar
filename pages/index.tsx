import PostManagement from "@/components/posts/PostManagement";
import Loading from "@/components/loading/Loading";
import { usePosts } from "@/context/postContext";
import ErrorMessage from "@/components/loading/ErrorMessage";

export default function Home() {
  const { posts, isLoading, isError, error } = usePosts();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError && error ? (
        <ErrorMessage message={error.message} />
      ) : (
        <PostManagement posts={posts} />
      )}
    </>
  );
}
