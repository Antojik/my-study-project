import Footer from "../../widgets/layoutFooter/Footer";
import Header from "../../widgets/layoutHeader/Header";
import PostList from "../../widgets/postList/PostList";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <PostList />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
