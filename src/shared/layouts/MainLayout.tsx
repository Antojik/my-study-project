import { useEffect, useState } from "react";
import { Footer } from "../../widgets/layoutFooter/Footer";
import { Header } from "../../widgets/layoutHeader/Header";
import { PostList } from "../../widgets/postList/PostList";
import { WithLoading } from "../lib/hoc/WithLoading";

export const MainLayout = () => {
  const PostListWithLoading = WithLoading(PostList);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <main>
        <PostListWithLoading isLoading={loading} />
      </main>
      <Footer />
    </>
  );
};
