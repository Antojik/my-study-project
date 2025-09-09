import PostCard from "../../entities/post/ui/PostCard";

interface Post {
  id: number;
  title: string;
  content: string;
}

const posts: Post[] = [
  { id: 1, title: "First post", content: "Small content of first post" },
  {
    id: 2,
    title: "Second post",
    content:
      "Large content of first post, large content of first post, large content of first post, large content of first post, large content of first post, large content of first post, large content of first post, large content of first post",
  },
  { id: 3, title: "Third post", content: "Small content of first post" },
];

const PostList = () => {
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default PostList;
