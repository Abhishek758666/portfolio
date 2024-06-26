import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="px-20 mt-28">
      <div className="head font-head text-[7vw] font-black leading-none">
        <h1 className="text-zinc-500">WORK WITH ME</h1>
        <a href="mailto:aabhik81@gmail.com" className="underline">
          aabhik81@gmail.com
        </a>
      </div>
      <div className="py-20">
        <h1 className="font-bold text-[5vw] font-head">SOCIALS</h1>
        <div className="socials flex gap-10 text-5xl mt-5">
          <a target="_blank" href="https://github.com/Abhishek758666">
            <FaGithub />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abhishek-khati-b4a427299/"
          >
            <FaLinkedin />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100078575028419"
          >
            <FaSquareFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
