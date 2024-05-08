export interface Post {
    id: number;
    title: string;
    body: string;
  }

 export interface PostManagementProps {
    posts: Post[] | undefined;
  }

  export interface PostDetailsProps {
    post: Post | null;
  }
  

  export interface FormInput {
    title: string;
    body: string;
  }

  export type PostContextType = {
    posts: Post[];
    addPost: (post: Post) => void;
    isLoading: boolean;
    isError: boolean;
    error: Error | null;

  };
  
   export interface ErrorMessageProps {
    message: string;
  }