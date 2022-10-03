import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";

const Projects: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>


      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">

      <Link href="https://www.behance.net/gallery/1392911/Stand-Up-Website" passHref>
          <a
            className="h-[24rem] w-[20rem] cursor-pointer rounded-lg  p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lgpx-4 text-center font-medium  bg-primary rounded-md  border border-zinc-800">
              <p className="text-xl font-semibold p-4">Stand Up UI</p>
              <Image
                src="/assests/projects/webthumb_standup.jpg"
                width="212"
                height="212"
                className="rounded-full"
                alt="avatar"
              />
              <p className="p-4">StandUp concept layout with bold and straight shapes.</p>
            </div>
          </a>
        </Link>

        <Link href="https://www.behance.net/gallery/13778153/3Bounce" passHref>
          <a
            className="h-[24rem] w-[20rem] cursor-pointer rounded-lg  p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lgpx-4 text-center font-medium  bg-primary rounded-md  border border-zinc-800">
              <p className="text-xl font-semibold p-4">3bounce UI/UX</p>
              <Image
                src="/assests/projects/webthumb_3bounce.jpg"
                width="212"
                height="212"
                className="rounded-full"
                alt="avatar"
              />
              <p className="p-4">Revolutionizing Direct Sales based on Social Media.</p>
            </div>
          </a>
        </Link>

        <Link href="https://www.behance.net/gallery/13777233/iUser" passHref>
          <a
            className="h-[24rem] w-[20rem] cursor-pointer rounded-lg  p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lgpx-4 text-center font-medium  bg-primary rounded-md  border border-zinc-800">
              <p className="text-xl font-semibold p-4">iUser UI/UX</p>
              <Image
                src="/assests/projects/webthumb_iuser.jpg"
                width="212"
                height="212"
                className="rounded-full"
                alt="avatar"
              />
              <p className="p-4">iUser was a social platform for creating, manage events.</p>
            </div>
          </a>
        </Link>

      
        <Link href="https://www.behance.net/gallery/13776693/ZeroPerua-Webmagazine-Store" passHref>
          <a
            className="h-[24rem] w-[20rem] cursor-pointer rounded-lg  p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lgpx-4 text-center font-medium  bg-primary rounded-md  border border-zinc-800">
              <p className="text-xl font-semibold p-4">ZeroP UI/UX</p>
              <Image
                src="/assests/projects/webthumb_zerop.jpg"
                width="212"
                height="212"
                className="rounded-full"
                alt="avatar"
              />
              <p className="p-4">concept design on adding a new look to the brand that is edgy and modern</p>
            </div>
          </a>
        </Link>

      </div>


     <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">

      <Link href="https://www.fxhash.xyz/generative/19540" passHref>
          <a
            className="h-[24rem] w-[20rem] cursor-pointer rounded-lg  p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lgpx-4 text-center font-medium  bg-primary rounded-md  border border-zinc-800">
              <p className="text-xl font-semibold p-4">mnmnMMXXII-[1.2]</p>
              <Image
                src="/assests/projects/webthumb_mnmnmmxxii.png"
                width="212"
                height="212"
                className="rounded-full"
                alt="avatar"
              />
              <p className="p-4">created using simple sets of coordinates identifying lines and shapes on a grid.</p>
            </div>
          </a>
        </Link>


        <Link href="https://www.fxhash.xyz/generative/19097" passHref>
          <a
            className="h-[24rem] w-[20rem] cursor-pointer rounded-lg  p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lgpx-4 text-center font-medium  bg-primary rounded-md  border border-zinc-800">
              <p className="text-xl font-semibold p-4">PIXO GRUNGE</p>
              <Image
                src="/assests/projects/webthumb_pixogrunge.png"
                width="212"
                height="212"
                className="rounded-full"
                alt="avatar"
              />
              <p className="p-4">experiments Ive been doing with generative art and grunge backgrounds.</p>
            </div>
          </a>
        </Link>

        <Link href="https://www.fxhash.xyz/generative/13041" passHref>
          <a
            className="h-[24rem] w-[20rem] cursor-pointer rounded-lg  p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lgpx-4 text-center font-medium  bg-primary rounded-md  border border-zinc-800">
              <p className="text-xl font-semibold p-4">LISBON #1</p>
              <Image
                src="/assests/projects/webthumb_lisbon2-1.jpg"
                width="212"
                height="212"
                className="rounded-full"
                alt="avatar"
              />
              <p className="p-4">Created generating patterns with Processing JS, sold as an NFT.</p>
            </div>
          </a>
        </Link>

        <Link href="https://www.fxhash.xyz/generative/13674" passHref>
          <a
            className="h-[24rem] w-[20rem] cursor-pointer rounded-lg  p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-lgpx-4 text-center font-medium  bg-primary rounded-md  border border-zinc-800">
              <p className="text-xl font-semibold p-4">LISBON #2</p>
              <Image
                src="/assests/projects/webthumb_lisbon2.jpg"
                width="212"
                height="212"
                className="rounded-full"
                alt="avatar"
              />
              <p className="p-4">An exploration of triangles, strokes, and colors on a digital canvas.</p>
            </div>
          </a>
        </Link>

      </div>


      

      
    </div>
  );
};

export default Projects;
