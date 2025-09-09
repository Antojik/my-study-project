import { useParams } from "react-router-dom";
import { MemoizedPostCard } from "../../entities/post/ui/PostCard";
import { posts } from "../../entities/mocks/postsMock";

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <p>No posts yet!</p>;
  }

  return (
    <MemoizedPostCard
      id={post.id}
      title={post.title}
      content={post.content}
      comments={post.comment}
    />
  );
};
