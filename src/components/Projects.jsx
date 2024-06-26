import React from "react";

const Projects = () => {
  return (
    <div className="w-full min-h-screen mt-[20vh]">
      <div>
        <h1 className="text-[9vw] font-bold font-head px-5 md:px-20">
          PROJECTS
        </h1>

        <div className="projects"></div>
        <a
          href="https://react-post-crud-app.vercel.app/"
          target="_blank"
          className="block w-full hover:bg-zinc-100 hover:text-black hover:px-10 duration-300 px-5 md:px-20"
        >
          <div className="flex gap-10 justify-between items-center h-[30vh]">
            <div className="project_name">
              <h1 className="text-[5vw] font-bold font-head">Blog App</h1>
            </div>
            <div className="project_name text-xl">
              <p>Frontend(API based) web application</p>
            </div>
          </div>
          <hr />
        </a>
        <a
          href="https://movie-flix-beta.vercel.app/"
          target="_blank"
          className="block w-full hover:bg-zinc-100 hover:text-black hover:px-10 duration-300 px-5 md:px-20"
        >
          <div className="flex gap-10 justify-between items-center h-[30vh]">
            <div className="project_name">
              <h1 className="text-[5vw] font-bold font-head">Movie Flix</h1>
            </div>
            <div className="project_name text-xl">
              <p>Frontend(API-based) web application</p>
            </div>
          </div>
          <hr />
        </a>
        <a
          href="https://mern-bookstore-frontend-nbb8.onrender.com/"
          target="_blank"
          className="block w-full hover:bg-zinc-100 hover:text-black hover:px-10 duration-300 px-5 md:px-20"
        >
          <div className="flex gap-10 justify-between items-center h-[30vh]">
            <div className="project_name">
              <h1 className="text-[5vw] font-bold font-head">BookStore</h1>
            </div>
            <div className="project_name text-xl">
              <p>Fullstack(Mern) web application</p>
            </div>
          </div>
          <hr />
        </a>
        <a
          href="https://ecommerce-react-lime-chi.vercel.app/"
          target="_blank"
          className="block w-full hover:bg-zinc-100 hover:text-black hover:px-10 duration-300 px-5 md:px-20"
        >
          <div className="flex gap-10 justify-between items-center h-[30vh]">
            <div className="project_name">
              <h1 className="text-[5vw] font-bold font-head">Ecommerce</h1>
            </div>
            <div className="project_name text-xl">
              <p>Frontend(API based) web application</p>
            </div>
          </div>
          <hr />
        </a>
      </div>
    </div>
  );
};

export default Projects;
