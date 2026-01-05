import React, { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContex";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef(null);

  const { userLogin, googleLogin, emailVerify } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    userLogin(email, password)
      .then(() => {
        toast.success("Welcome back!");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message);
        toast.error("Login failed. Please check your credentials.");
      });
  };

  const handleGoogleSignIn = () => {
    googleLogin()
      .then(() => {
        toast.success("Successfully logged in with Google");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  const handlePasswordReset = () => {
    const email = emailRef.current.value;
    if (!email) {
        toast.error("Please enter your email first.");
        return;
    }
    emailVerify(email)
      .then(() => {
        toast.success("Password reset email sent!");
        window.open("https://mail.google.com/mail/u/0/", "_blank");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] py-10 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="p-8">
          <div className="text-center mb-8">
            <img src={logo} alt="GreenNest" className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-primary" />
            <h1 className="text-2xl font-bold font-montserrat text-gray-800">Welcome Back</h1>
            <p className="text-gray-500 mt-2">Sign in to continue to GreenNest</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                ref={emailRef}
                name="email"
                type="email"
                className="input input-bordered w-full rounded-xl focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type={show ? "text" : "password"}
                className="input input-bordered w-full rounded-xl focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Enter your password"
                name="password"
                required
              />
              <button
                type="button"
                className="absolute right-4 top-10 text-gray-400 hover:text-gray-600"
                onClick={() => setShow(!show)}
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handlePasswordReset}
                className="text-sm text-primary hover:underline font-medium"
              >
                Forgot Password?
              </button>
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <button type="submit" className="btn btn-primary w-full rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all">
              Login
            </button>
          </form>

          <div className="divider my-6 text-gray-400">OR</div>

          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline btn-block rounded-xl border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-gray-700 flex items-center justify-center gap-2"
          >
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

          <p className="text-center mt-8 text-gray-600">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-primary font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
