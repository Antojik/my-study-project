import { Footer } from "../../widgets/layoutFooter/Footer";
import { Header } from "../../widgets/layoutHeader/Header";
import { Outlet } from "react-router-dom";
export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
