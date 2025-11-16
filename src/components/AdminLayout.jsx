import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="pt-24 px-6">
      <Outlet />
    </div>
  );
}
