import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Post } from "@/utils/types";
import { getOnePostById } from "@/services/postServices";
import Loading from "@/components/loading/Loading";
import { PostDetails } from "@/components/posts/PostDetails";
import ErrorMessage from "@/components/loading/ErrorMessage";
import NoData from "@/components/loading/NoData";

function page() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: post,
    error,
    isLoading,
  } = useQuery<Post | null, Error>(
    ["post", id],
    () => getOnePostById(id as string),
    {
      enabled: !!id,
    }
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage message={error.message} />
      ) : post ? (
        <PostDetails post={post} />
      ) : (
        <NoData />
      )}
    </>
  );
}

export default page;
