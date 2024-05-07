export interface Post {
    id: number;
    title: string;
    body: string;
  }

 export interface PostManagementProps {
    posts: Post[] | undefined;
  }