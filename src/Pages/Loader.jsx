import React from "react";

const Loader = () => {
  return (
    <div className="z-50 fixed w-full h-max top-0 left-0 bg-slate-100">
      <div className="w-full h-max flex">
        <div className="blocks w-[10%] h-screen bg-zinc-900"></div>
        <div className="blocks w-[10%] h-screen bg-zinc-900"></div>
        <div className="blocks w-[10%] h-screen bg-zinc-900"></div>
        <div className="blocks w-[10%] h-screen bg-zinc-900"></div>
        <div className="blocks w-[10%] h-screen bg-zinc-900"></div>
        <div className="blocks w-[10%] h-screen bg-zinc-900"></div>
        <div className="blocks w-[10%] h-screen bg-zinc-900"></div>
        <div className="blocks w-[10%] h-screen bg-zinc-900"></div>
        <div className="blocks w-[10%] h-screen bg-zinc-900"></div>
        <div className="blocks w-[10%] h-screen bg-zinc-900"></div>
      </div>
      <div className="absolute top-1/2 uppercase left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1
          style={{ color: "transparent", WebkitTextStroke: "1px #fff" }}
          className="text-[7vw] text-center leading-tight font-bold"
        >
          Wait a few Seconds
        </h1>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-right w-full px-20 mt-20">
        <span className="text-[7vw]">0%</span>
      </div>
    </div>
  );
};

export default Loader;
