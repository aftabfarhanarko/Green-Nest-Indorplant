import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaUser, FaLink, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContex";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";

const Register = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { creatUser, updeatUserProfile } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;

    const validPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!validPassword.test(password)) {
      setError("Password must have at least 6 characters, one uppercase and one lowercase letter.");
      toast.error("Weak Password");
      return;
    }

    setError("");
    creatUser(email, password)
      .then(() => {
        const profileUpdates = {
          displayName,
          photoURL,
        };
        updeatUserProfile(profileUpdates)
          .then(() => {
            toast.success("Account created successfully!");
            navigate("/");
          })
          .catch((err) => {
             toast.error(err.code || "Failed to update profile");
          });
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.code || "Registration failed");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] py-10 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="p-8">
          <div className="text-center mb-8">
            <img src={logo} alt="GreenNest" className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-primary" />
            <h1 className="text-2xl font-bold font-montserrat text-gray-800">Create Account</h1>
            <p className="text-gray-500 mt-2">Join GreenNest and start your journey</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full rounded-xl pl-10 focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="John Doe"
                    required
                />
                <FaUser className="absolute left-3 top-3.5 text-gray-400" />
              </div>
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
              <div className="relative">
                <input
                    type="text"
                    name="photo"
                    className="input input-bordered w-full rounded-xl pl-10 focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="https://example.com/photo.jpg"
                    required
                />
                <FaLink className="absolute left-3 top-3.5 text-gray-400" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full rounded-xl pl-10 focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="you@example.com"
                    required
                />
                <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                    type={show ? "text" : "password"}
                    name="password"
                    className="input input-bordered w-full rounded-xl pl-10 pr-10 focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="••••••••"
                    required
                />
                <FaLock className="absolute left-3 top-3.5 text-gray-400" />
                <button
                    type="button"
                    className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                    onClick={() => setShow(!show)}
                >
                    {show ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-xs text-center">{error}</p>}

            <button type="submit" className="btn btn-primary w-full rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all">
              Register
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-primary font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
