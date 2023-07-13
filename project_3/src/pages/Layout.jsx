import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Layout () {
  return (
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
  )
}

export default Layout;
