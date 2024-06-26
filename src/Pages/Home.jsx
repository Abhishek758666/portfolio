import React, { useEffect } from "react";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

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
      size: 0.7,
      backgroundColor: 0x101010,
    });
  };

  useEffect(() => {
    loadBg();
  }, []);

  return (
    <section>
      {/* <Loader /> */}
      <div id="main" className="main w-full relative min-h-screen">
        <div className="absolute  top-0 left-0 w-[100%] h-full bg-gradient-to-b from-transparent to-[#10101071] flex flex-col md:flex-row md:justify-between">
          {/* --------navbar---------- */}
          <nav className="w-full h-[10vh] px-5 md:px-20 py-5 fixed top-0 left-0 z-40 flex justify-between">
            <div className="logo font-black text-xl">ABHIK</div>
            <div className="links hidden md:flex gap-5">
              <a href="#">Home</a>
              <a href="#project">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <a
              href="/cv.pdf"
              download="cv.pdf"
              className="px-5 h-10 bg-white rounded-xl text-zinc-900 flex gap-3 items-center"
            >
              <span className="text-sm">Download CV</span>
              <img src="/arrow.svg" className="h-4" />
            </a>
          </nav>

          {/* scroll */}
          <div className="absolute uppercase text-zinc-500 -bottom-10 left-1/2 -translate-x-1/2 p-5 text-xl">
            <img
              src="https://assets-global.website-files.com/65ec76596f839f619b8b82fe/660a48e25f4b7a8e5c1ed820_Scroll.webp"
              className="h-8"
            />
          </div>

          {/* -------hero big text---------- */}
          <div className="name pt-20 px-5 md:px-20 font-head leading-none md:w-max w-full text-[17vw] md:text-[9vw] xl:text-[7vw] font-black uppercase h-max md:h-[95%] flex justify-end items-start flex-col">
            <h1>Hello</h1>
            <h1>I am</h1>
            <h1>Abhishek</h1>
            <h1>Khati</h1>
          </div>

          {/* -------hero small text---------- */}
          <div className="md:w-[35rem] h-max w-full xl:w-[30rem] text-lg md:h-[95%] flex items-end lg:mr-20">
            <p>
              Skilled front-end developer in{" "}
              <span className="font-bold">React.js</span> ,{" "}
              <span className="font-bold">Tailwind CSS</span>. Currently
              learning <span className="font-bold">MERN</span> stack to become a
              full-stack developer for dynamic, user-friendly web applications.
            </p>
          </div>

          {/* ---------grid lines----------- */}
        </div>
      </div>
      {/* <Marquee /> */}
      <div id="project">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </section>
  );
};

export default Home;
