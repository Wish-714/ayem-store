import React from "react";
import Logo from "../logo-koprasi.png";
import { useState } from "react";

function Menu() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-5 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <svg
            className="overflow-y-scroll fixed z-30 flex items-center cursor-pointer right-7 p-2 top-5 bg-blue-500 rounded-full w-10 hover:bg-gray-300"
            fill="#ffffff"
            viewBox="0 0 70 75"
            width="30"
            height="40"
          >
            <rect width="100" height="5" transform="rotate(45)"></rect>
            <rect
              y="50"
              x="-50"
              width="100"
              height="5"
              transform="rotate(-45)"
            ></rect>
          </svg>
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed p-1 px-1.5 hover:bg-gray-300 rounded-lg z-30 cursor-pointer right-7 top-5"
          fill="#000000"
          viewBox="0 0 100 70"
          width="40"
          height="40"
        >
          <rect width="100" height="7"></rect>
          <rect y="30" width="100" height="7"></rect>
          <rect y="60" width="100" height="7"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[100vw] text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div
          aria-label="Sidebar"
          className="text-sm fixed overflow-y-scroll z-30 right-0 bg-gray-100 w-72 shadow-2xl flex flex-col h-screen text-black"
        >
          <div className="mt-[100px]">
            <h1 className="text-right py-2 mx-5 font-semibold">
              Selamat Datang! 👋
            </h1>
          </div>
          <span className="h-1 bg-gray-300 mt-5"></span>
          <div className="mt-5">
            <p className="p-2 m-3 bg-gray-200 text-center rounded-xl hover:bg-gray-300">
              Halaman Utama
            </p>
            <p className="p-2 m-3 bg-gray-200 text-center rounded-xl hover:bg-gray-300">
              Ajukan Barang
            </p>
            <p className="p-2 m-3 bg-green-500 text-white text-center rounded-xl hover:bg-green-700">
              Whatsapp
            </p>
          </div>
          <span className="h-1 bg-gray-300 mt-5"></span>
          <div className="mt-5 bg-gray-100 pb-5">
            <p className=" p-2 m-3 bg-blue-500 text-center text-white rounded-xl hover:bg-blue-700">
              Log-In
            </p>
            <img
              src={Logo}
              className="w-14 absolute mt-5 right-0 mx-5"
              alt="logo-koperasi"
            />
            <div className="text-right text-xs mx-5 mt-28">
              <p>Koperasi Pegawai Republik Indonesia</p>
              <p>Kec.Karanggayam, Kab.Kebumen 54365</p>
              <p className="mt-3">KPRI-AYEM@2022 ~ By Wisnu Wardana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
