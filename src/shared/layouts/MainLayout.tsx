import { useEffect, useState } from "react";
import { Footer } from "../../widgets/layoutFooter/Footer";
import { Header } from "../../widgets/layoutHeader/Header";
import { PostListWithLoading } from "../../widgets/postList/PostListWithLoading";

export const MainLayout = () => {
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
