import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
  <h1 className="text-2xl font-bold text-blue-600 brand-font">Sweetery</h1>

      <div className="space-x-6 text-lg">
        <Link className="hover:text-blue-600" to="/">Home</Link>
        <Link className="hover:text-blue-600" to="/dashboard">Dashboard</Link>
        <Link className="hover:text-blue-600" to="/admin">Admin</Link>
        <Link className="hover:text-blue-600" to="/login">Login</Link>
      </div>
    </nav>
  );
}
