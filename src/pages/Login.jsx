import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContex";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [show, setShow] = useState(false);
  const [er, setEr] = useState();
  const navagiet = useNavigate();

  const { userLogin, googleLogin } = useContext(AuthContext);

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log({ email, password });

    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
        navagiet("/");
      })
      .catch((err) => {
        console.log(err.message);
        setEr(err.message);
      });
  };

  const gogleSignIn = () => {
    googleLogin();
  };
  return (
    <div className="flex justify-center items-center min-h-screen px-2">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h1 className="text-lg font-semibold mb-5 text-center">
            Login your account
          </h1>

          <form onSubmit={handelLogin}>
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label font-semibold">Email address</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* Password */}
              <div className="relative">
                <label className="label font-semibold">Password</label>
                <input
                  type={show ? "text" : "password"}
                  className="input focus:outline-none"
                  placeholder="Password"
                  name="password"
                  required
                />
                <div
                  className="absolute right-7 top-8 z-10 cursor-pointer text-md"
                  onClick={() => setShow(!show)}
                >
                  {show ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              {/* Forgot password */}
              <div>
                <button onClick={""} className="link link-hover">
                  Forgot password?
                </button>
              </div>

              {/* Error */}
              <p className="text-red-600">{er && er}</p>

              {/* Submit */}
              <button
                type="submit"
                className="btn bg-gradient-to-r from-lime-400 via-emerald-500 to-green-400 shadow-lg text-whit text-white mt-4 w-full"
              >
                Login
              </button>
              <button
                onClick={gogleSignIn}
                className="btn bg-gradient-to-r from-lime-400 via-emerald-500 to-green-400 shadow-lg text-white "
              >
                <FcGoogle />
                Login with Gioogle
              </button>

              {/* Register link */}
              <p className="font-semibold text-center mt-2">
                Don’t Have An Account?{" "}
                <Link
                  className="text-red-500 hover:underline"
                  to="/auth/register"
                >
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
