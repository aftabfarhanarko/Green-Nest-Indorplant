import React, { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const Gsahdg = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className="relative ">
        {/* menu */}
        <button
          onClick={() => setOpen(!open)}
          className="btn-ghost text-3xl fixed py-8 right-8 z-50 text-green-700 hover:text-green-800 transition-colors"
        >
          {open ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>

        <div
          className={`fixed top-0 left-0 w-full bg-base-200 shadow-xl rounded-b-2xl transition-all duration-500 ease-in-out z-40 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 "
          }`}
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-700">
              🌿 Menu
            </h2>
            <ul className="menu space-y-2">
              <li>
                <a className="text-lg font-medium hover:text-green-600 transition">
                  Sidebar Item 1
                </a>
              </li>
              <li>
                <a className="text-lg font-medium hover:text-green-600 transition">
                  Sidebar Item 2
                </a>
              </li>
              <li>
                <a className="text-lg font-medium hover:text-green-600 transition">
                  Sidebar Item 3
                </a>
              </li>
            </ul>
          </div>
        </div>

        {open && (
            <div onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 transition-opacity "
            >

            </div>
        )}
      </div>
    </div>
  );
};

export default Gsahdg;
