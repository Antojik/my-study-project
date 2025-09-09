import Footer from "../../widgets/layoutFooter/Footer";
import Header from "../../widgets/layoutHeader/Header";
import PostList from "../../widgets/postList/PostList";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <PostList />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
