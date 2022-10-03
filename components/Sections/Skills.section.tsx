import { BsArrowRightShort } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-zinc-800 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">ReactJS &amp; Tailwind CSS </span>
          &nbsp;for my Frontend development
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-zinc-800 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Typescript </span>
          &nbsp;as my main language
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-zinc-800 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Figma </span>
          &nbsp;as my designing tool
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-zinc-800 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">UX / UI  </span>
          &nbsp;Bootstrap, Material Designer, Wireframing 
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-zinc-800 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Passion for blockchain technology </span>
          &nbsp;or decentralized finance. 
        </p>


      </div>


      <p className="text-lg font-medium text-slate-300">
        ...more skills include <span className="text-white">javascript</span>,{" "}
        <span className="text-white">NextJS</span>,{" "}
        <span className="text-white">apollo </span>,{" "}
        <span className="text-white">ether.js</span>,{" "}
        <span className="text-white"> adobe creative suite</span>{" "}
       

      </p>
    </div>
    
  );
};

export default Skills;
