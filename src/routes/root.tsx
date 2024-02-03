import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Root() {
  return (
    <div className="body_container">
      <Header />

      <div className="main-sidebar_container">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
