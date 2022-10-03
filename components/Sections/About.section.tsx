import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">André V.</p>
        <p className="mt-1 text-lg text-gray-300">
        Brazilian Frontend &amp; Designer and Web3 wannabe. <br /> 
        andreviana.eth | monomonio.tez
        </p>

        <p className="mt-4 text-gray-400">
        My name is Andre Viana and im a designer/front-end developer, <br /> 
        from Brasil located in Lisboa, Portugal. I love design and film, <br /> 
        and I cant think of anything else more fun to do for a living. <br /> 
        Im currently experimenting w/ generative art using p5.js,<br />
        and writing articles on  my newsletter sometimes.
        </p>

        <Link href="https://andreviana.substack.com/" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my newsletter
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>

      </div>

      <div className="hidden custom:block">
        <Image
          src="/assests/avatar.png"
          width="400"
          height="400"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
