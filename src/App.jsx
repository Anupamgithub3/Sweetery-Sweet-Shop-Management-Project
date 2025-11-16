import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-24 px-6">
        <Outlet />
      </div>
    </div>
  );
}
