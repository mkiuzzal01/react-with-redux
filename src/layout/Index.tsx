import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-100 shadow-md">
        <Navbar />
      </nav>

      <main className="flex-1 container mx-auto px-4">
        <Outlet />
      </main>

      <footer className="bg-gray-500">
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
