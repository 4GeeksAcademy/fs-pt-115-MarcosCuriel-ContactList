import { Outlet } from "react-router-dom/dist";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
  return (
    <ScrollToTop>
      <main className="d-flex flex-column min-vh-100">
        <Navbar />
        <section className="container">
          <Outlet />
        </section>
        <Footer />
      </main>
    </ScrollToTop>
  );
};
