import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useQuery } from 'react-query';
import { getPosts } from '@/services/postServices';
import { PostContextType,Post } from '@/utils/types';


const PostContext = createContext<PostContextType | undefined>(undefined);

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostProvider');
  }
  return context;
};

interface PostProviderProps {
  children: ReactNode;
}

export const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { data, isLoading, isError, error } = useQuery<Post[], Error>('posts', getPosts);

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  const addPost = (post: Post) => {
    setPosts(prevPosts => [...prevPosts, post]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost, isLoading, isError, error }}>
      {children}
    </PostContext.Provider>
  );
};
