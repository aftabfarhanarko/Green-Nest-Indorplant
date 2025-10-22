import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContex";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user,relUser, updeatUserProfile } = useContext(AuthContext);

  const handelRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    console.log({ displayName, photoURL });
    const useraData = {
      displayName,
      photoURL,
    };

    updeatUserProfile(useraData)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Updeat User");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.code);
      });
  };

  return (
    <div>
      <header className="bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 shadow-lg">
        <Navbar></Navbar>
      </header>
      <main className="bg-gradient-to-br from-emerald-50 to-white">
        <div className="min-h-screen flex items-center justify-center  p-6 w-11/12 mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-sm bg-white rounded-2xl shadow-2xl ring-1 ring-slate-100 overflow-hidden"
          >
            <div className="p-6 flex flex-col items-center text-center">
              <img
                src={user?.photoURL}
                className="w-28 h-28 rounded-full object-cover ring-4 ring-emerald-100 shadow-md"
                referrerPolicy="no-referrer"
              />
              <h2 className="mt-4 text-xl font-semibold text-slate-900">
                {user?.displayName}
              </h2>

              <p className="mt-1 text-sm text-slate-500">{user?.email}</p>

              <div className="mt-6 w-full">
                <form onSubmit={handelRegister}>
                  <fieldset className="fieldset">
                    <h1 className="text-[15px] text-lime-600 animate-pulse font-semibold">
                      Update Your Profile
                    </h1>
                    {/* Name */}
                    <label className="label font-semibold">Change Name</label>
                    <input
                      type="text"
                      name="name"
                      className="input  focus:outline-none "
                      placeholder="enter your name"
                      required
                    />
                    {/* Photo Url */}
                    <label className="label mt-3 font-semibold">
                      Change Photo URL{" "}
                    </label>
                    <input
                      type="text"
                      name="photo"
                      className="input focus:outline-none "
                      placeholder="photo url"
                      required
                    />
                  </fieldset>
                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 active:scale-95 transition-transform shadow-md  mt-3"
                  >
                    {/* <GoSignOut className="h-4 w-4 text-white group-hover:rotate-6 transition-transform" /> */}
                    <span>Update User</span>
                  </button>
                </form>
              </div>
            </div>

            <div className="bg-slate-50 border-t border-slate-100 px-6 py-3 text-xs text-slate-500 text-center">
              Signed in with Firebase Automations
            </div>
          </motion.article>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MyProfile;
