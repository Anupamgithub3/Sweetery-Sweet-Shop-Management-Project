import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Please fill all fields.");
      return;
    }
    setError("");
    // simulate success — later replace with API call
    navigate("/dashboard");
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-700 via-orange-500 to-yellow-400">
      <div className="w-full max-w-md p-6 rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow">
            Create Account
          </h1>
          <p className="text-sm text-white/80 mt-1">Join Sweetery today</p>
        </div>

        <div className="bg-white rounded-xl p-6">
          {error && <div className="mb-4 text-sm text-red-600 bg-red-50 p-2 rounded">{error}</div>}

          <label className="block mb-3">
            <span className="text-sm text-gray-600">Full name</span>
            <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Your full name"/>
          </label>

          <label className="block mb-3">
            <span className="text-sm text-gray-600">Email</span>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="you@domain.com"/>
          </label>

          <label className="block mb-4 relative">
            <span className="text-sm text-gray-600">Password</span>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type={showPass? "text": "password"} className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-12" placeholder="Choose a password"/>
            <button onClick={()=>setShowPass(s=>!s)} type="button" className="absolute right-3 top-10 text-gray-500">
              {showPass ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>
              )}
            </button>
          </label>

          <button onClick={handleRegister} className="w-full py-3 rounded-lg bg-rose-600 text-white font-semibold hover:bg-rose-700 transition">
            Create account
          </button>

          <div className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/" className="text-indigo-600 font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
