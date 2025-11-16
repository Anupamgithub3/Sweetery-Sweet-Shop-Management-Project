import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [sweets, setSweets] = useState([
    { id: 1, name: "Gulab Jamun", price: 50, quantity: 10 },
    { id: 2, name: "Rasgulla", price: 40, quantity: 0 },
    { id: 3, name: "Barfi", price: 60, quantity: 25 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [sweetToDelete, setSweetToDelete] = useState(null);
  const [filterName, setFilterName] = useState("");
  const [filterAvailability, setFilterAvailability] = useState("all");

  const confirmDelete = (sweet) => {
    setSweetToDelete(sweet);
    setShowModal(true);
  };

  const handleDelete = () => {
    setSweets(sweets.filter((s) => s.id !== sweetToDelete.id));
    setShowModal(false);
  };

  // read any newly-added sweet passed via navigation state from AddSweet
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.newSweet) {
      setSweets((prev) => [...prev, location.state.newSweet]);
      // replace history entry to clear the state so it doesn't get added again
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  // derive filtered list from sweets based on current filters
  const filteredSweets = sweets.filter((s) => {
    // name filter (case-insensitive substring)
    const matchesName = s.name.toLowerCase().includes(filterName.trim().toLowerCase());

    // availability filter
    let matchesAvailability = true;
    if (filterAvailability === "in") matchesAvailability = s.quantity > 0;
    if (filterAvailability === "out") matchesAvailability = s.quantity === 0;

    return matchesName && matchesAvailability;
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>

          <input
            type="text"
            placeholder="Search sweets by name"
            className="p-2 border rounded w-60"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
          />

          <select
            className="p-2 border rounded"
            value={filterAvailability}
            onChange={(e) => setFilterAvailability(e.target.value)}
          >
            <option value="all">All</option>
            <option value="in">In Stock</option>
            <option value="out">Out of Stock</option>
          </select>

          <button
            className="px-3 py-1 border rounded"
            onClick={() => {
              setFilterName("");
              setFilterAvailability("all");
            }}
          >
            Clear
          </button>
        </div>

        <Link
          to="/admin/add"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Sweet
        </Link>
      </div>

      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Sweet Name</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Quantity</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredSweets.map((sweet) => (
            <tr key={sweet.id} className="border-b">
              <td className="p-3">{sweet.name}</td>
              <td className="p-3">₹{sweet.price}</td>
              <td className="p-3">{sweet.quantity}</td>

              <td className="p-3 text-center space-x-2">
                <Link
                  to={`/admin/edit/${sweet.id}`}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Edit
                </Link>

                <button
                  onClick={() => confirmDelete(sweet)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>

            <p className="mb-6">
              Are you sure you want to delete{" "}
              <strong>{sweetToDelete.name}</strong>?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
