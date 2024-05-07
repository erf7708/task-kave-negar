import axiosInstance from "@/utils/axios";
import { Post } from "@/utils/types";

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await axiosInstance.get<Post[]>("posts");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const getOnePostById = async (id: string): Promise<Post | null> => {
  try {
    const response = await axiosInstance.get<Post>(`posts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};
