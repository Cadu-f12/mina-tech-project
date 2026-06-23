import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AccessibilityMenu } from "./AccessibilityMenu";
import './Layout.css';

export default function Layout() {
  return (
    <>
      <div className="header-controler">

      <Header />
      </div>

      <main>
        <Outlet />
      </main>

      <Footer />
      <AccessibilityMenu />
    </>
  );
}
