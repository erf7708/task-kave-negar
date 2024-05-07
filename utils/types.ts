export interface Post {
    id: number;
    title: string;
    body: string;
  }

 export interface PostTableManagementProps {
    posts: Post[] | undefined;
  }