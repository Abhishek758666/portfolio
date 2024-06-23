import React, { useEffect } from "react";
import Loader from "./Loader";

const Home = () => {
  const loadBg = () => {
    return VANTA.GLOBE({
      el: "#main",
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x3b0d76,
      size: 1.2,
      backgroundColor: 0x151515,
    });
  };

  useEffect(() => {
    loadBg();
  }, []);

  return (
    <section>
      {/* <Loader /> */}
      <div id="main" className="main w-full overflow-hidden relative h-screen">
        <div className="absolute  top-0 left-0 w-[100%] h-full bg-gradient-to-b from-transparent to-[#151515ab] flex flex-col md:flex-row md:justify-between">
          {/* --------navbar---------- */}
          <nav className="w-full h-[10vh] px-20 py-5 fixed top-0 left-0 z-40 flex justify-between">
            <div className="logo">LOGO</div>
            <div className="links hidden md:flex gap-5">
              <a href="">Home</a>
              <a href="">Projects</a>
              <a href="">Skills</a>
              <a href="">Contact</a>
            </div>
            <button>Hire Me</button>
          </nav>

          {/* -------hero big text---------- */}
          <div className="name pt-20 px-5 md:px-20 font-head leading-none md:w-max w-full text-[17vw] md:text-[9vw] xl:text-[7vw] font-black uppercase h-max md:h-[95%] flex justify-end items-start flex-col">
            <h1>Hello</h1>
            <h1>I am</h1>
            <h1>Abhishek</h1>
            <h1>Khati</h1>
          </div>

          {/* -------hero small text---------- */}
          <div className="md:w-[35rem] h-max w-full xl:w-[30rem] text-lg md:h-[95%] flex items-end p-5 lg:mr-20">
            <p>
              Skilled front-end developer in{" "}
              <span className="font-bold">React.js</span> ,{" "}
              <span className="font-bold">Tailwind CSS</span>. Currently
              learning <span className="font-bold">MERN</span> stack to become a
              full-stack developer for dynamic, user-friendly web applications.
            </p>
          </div>

          {/* ---------grid lines----------- */}
          <div className="hidden lg:block absolute -z-10 top-0 left-0">
            <div className="grid grid-cols-10 grid-rows-1 gap-0 w-full h-screen">
              <div className="row-span-6 w-[10vw] h-screen border-r-[0.01px] border-[#ffffff11]"></div>
              <div className="row-span-6 border-r-[0.01px] border-[#ffffff11]"></div>
              <div className="row-span-6 border-r-[0.01px] border-[#ffffff11]"></div>
              <div className="row-span-6 border-r-[0.01px] border-[#ffffff11]"></div>
              <div className="row-span-6 border-r-[0.01px] border-[#ffffff11]"></div>
              <div className="row-span-6 border-r-[0.01px] border-[#ffffff11]"></div>
              <div className="row-span-6 border-r-[0.01px] border-[#ffffff11]"></div>
              <div className="row-span-6 border-r-[0.01px] border-[#ffffff11]"></div>
              <div className="row-span-6 border-r-[0.01px] border-[#ffffff11]"></div>
              <div className="row-span-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh]"></div>
    </section>
  );
};

export default Home;
