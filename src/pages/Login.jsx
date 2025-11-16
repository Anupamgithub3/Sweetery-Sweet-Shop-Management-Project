import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    // simple client-side validation
    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password.");
      return;
    }
    setError("");

    // if backend not ready, we just simulate success
    // replace this with your backend fetch when ready
    // try { ... fetch(...) } catch ...
    // For now navigate to dashboard
    navigate("/dashboard");
  };

  return (
<div className="min-h-screen flex items-center justify-center relative candy-bg">
      <div className="w-full max-w-md p-6 rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-violet-700 drop-shadow brand-font">
            Sweetery
          </h1>
          <p className="text-sm text-violet-600 mt-1">Sign in to manage or shop</p>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Welcome back</h2>

          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 p-2 rounded">
              {error}
            </div>
          )}

          <label className="block mb-3">
            <span className="text-sm text-gray-600 flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none">
                <path d="M3 8.5L12 13l9-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              Email
            </span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@domain.com"
            />
          </label>

          <label className="block mb-4 relative">
            <span className="text-sm text-gray-600 flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none">
                <path d="M12 15v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="6" y="11" width="12" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 11V9a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Password
            </span>

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPass ? "text" : "password"}
              className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-12"
              placeholder="Your password"
            />

            <button
              type="button"
              onClick={() => setShowPass((s) => !s)}
              className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
              aria-label="Toggle password"
            >
              {showPass ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M10.58 10.58A3 3 0 0113.42 13.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>
              )}
            </button>
          </label>

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Sign in
          </button>

          <div className="text-center mt-4 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-indigo-600 font-medium">
              Create one
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
