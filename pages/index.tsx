import PostManagement from "@/components/posts/PostManagement";
import Loading from "@/components/loading/Loading";
import { usePosts } from "@/context/postContext";

export default function Home() {
  const { posts, isLoading } = usePosts();

  return <>{isLoading ? <Loading /> : <PostManagement posts={posts} />}</>;
}
