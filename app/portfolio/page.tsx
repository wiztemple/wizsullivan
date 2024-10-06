"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";

const projects = [
  {
    id: 1,
    title: "Greenwich",
    url: "https://nextlevel-site.netlify.app/",
    type: "landingPage",
    banner: "/greenwich.png",
    description: "",
  },
  {
    id: 2,
    title: "Signature Bank",
    url: "https://signatu.netlify.app/",
    type: "webApp",
    banner: "/signature.png",
    description: "",
  },
  {
    id: 3,
    title: "KovidWiki",
    url: "https://kovidwiki.netlify.app/",
    type: "webApp",
    banner: "/kovidwiki.png",
    description: "",
  },
  {
    id: 4,
    title: "Petly",
    url: "https://petlly.netlify.app/",
    type: "webApp",
    banner: "/petly.png",
    description: "An application for adopting pets",
  },
  {
    id: 5,
    title: "Punterclash",
    url: "https://punterclash-beta.netlify.app/",
    type: "landingPage",
    banner: "/punterclash.png",
    description: "",
  },
  {
    id: 6,
    title: "CashEnvoy",
    url: "https://cashenvoynextgen.netlify.app/",
    type: "landingPage",
    banner: "/cashenvoy.png",
    description: "",
  },
  {
    id: 7,
    title: "FlamesUI",
    url: "https://wiztemple.github.io/flamesui/",
    type: "webApp",
    banner: "/flamesui.png",
    description: "A simple UI component design library",
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<"webApp" | "landingPage">(
    "webApp"
  );

  const filteredProjects = projects.filter(
    (project) => project.type === activeTab
  );

  return (
    <div className="min-h-screen py-2">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center sm:px-0 px-5">
        <div className="lg:w-[800px]">
          <div>
            <Hero
              heroTitle="Portfolio"
              heroDescription="A selection of some projects I’ve worked on during my career as a Software Developer"
              emoji={
                <Image src="/book.png" width={50} height={50} alt="Books" />
              }
            />
          </div>
          <div className="sm:pt-40 pt-20">
            <h2 className="sm:text-5xl text-3xl font-semibold">Projects</h2>
          </div>
          <div className="flex px-1 py-2 w-fit bg-grey-100 rounded-xl mt-5">
            <button
              className={`w-fit py-1 flex items-center border-b-2 gap-x-1 px-3 text-sm leading-5 font-medium ${
                activeTab === "webApp"
                  ? "bg-white border-b-black text-black"
                  : "hover:text-gray-700 text-gray-600"
              }`}
              onClick={() => setActiveTab("webApp")}
            >
              Web Apps
            </button>
            <button
              className={`w-fit py-1 px-3 flex items-center border-b-2 gap-x-1 text-sm leading-5 font-medium ${
                activeTab === "landingPage"
                  ? "bg-white border-b-black text-black"
                  : "hover:text-gray-700 text-gray-600"
              }`}
              onClick={() => setActiveTab("landingPage")}
            >
              Landing Pages
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-4 border border-slate-200 rounded-lg"
              >
                <Image
                  src={project.banner}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                {project.description && (
                  <p className="text-gray-600 mt-2">{project.description}</p>
                )}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-4 inline-block"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
