import Image from "next/image";
import Hero from "./components/Hero";
import Head from "next/head";
import ExperienceCard from "./components/ExperienceCard";

const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Forever8",
    location: "71-75 Shelton Street, London",
    startDate: "June 2021",
    endDate: "Present",
    description: "",
    logo: "",
  },
  // {
  //   id: 2,
  //   title: "JavaScript Developer",
  //   company: "Gitstart",
  //   location: "San Francisco, CA",
  //   startDate: "June 2021",
  //   endDate: "Present",
  //   description: "",
  // },
  {
    id: 3,
    title: "Frontend Developer",
    company: "e-settlement",
    location: "Yaba Lagos.",
    startDate: "February 2021",
    endDate: "Present",
    description: "",
    logo: "",
    logoAlt: "e-settlement logo",
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Lawrence Price Ltd",
    location: "Ikeja Lagos.",
    startDate: "December 2020",
    endDate: "August 2021",
    description: "",
    logo: "",
    logoAlt: "Lawrence Price Ltd logo",
  },
  {
    id: 5,
    title: "Software Developer",
    company: "Andela",
    location: "Lagos, Nigeria",
    startDate: "October 2018",
    endDate: "Present",
    description: "",
    logo: "",
    logoAlt: "Andela logo",
  },
  {
    id: 6,
    title: "Software Developer",
    company: "Hornblower Cruises",
    location: "San Francisco CA.",
    startDate: "December 2019",
    endDate: "June 2020",
    description: "",
    logo: "",
    logoAlt: "Hornblower Cruises logo",
  },
  {
    id: 7,
    title: "Frontend Developer",
    company: "e-settlement",
    location: "Yaba Lagos.",
    startDate: "August 2017",
    endDate: "September 2018",
    description: "",
    logo: "",
    logoAlt: "e-settlement logo",
  },
  {
    id: 8,
    title: "Web Design Intern",
    company: "Univelcity",
    location: "Lagos, Nigeria",
    startDate: "February 2017",
    endDate: "July 2017",
    description: "",
    logo: "",
    logoAlt: "Univelcity logo",
  },
];
export default function Home() {
  return (
    <div className="min-h-screen py-2">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center sm:px-0 px-5">
        <div className="lg:w-[800px]">
          <div className="">
            <Hero
              heroTitle="Hello, I’m Sullivan"
              heroDescription="I’m a Frontend Engineer based in Lagos."
              emoji={
                <Image src="/wave.png" width={50} height={50} alt="Books" />
              }
            />
          </div>
          <div className="sm:pt-40 pt-20">
            <h2 className="sm:text-5xl text-3xl font-semibold">
              A little bit about me
            </h2>
            <div className="sm:flex space-x-10 pt-5">
              <div className="sm:w-4/6 w-full">
                <p className="text-textcolor leading-loose">
                  I'm a passionate Frontend Developer with a strong background
                  in JavaScript, React, and Vue.js, specializing in creating
                  intuitive and high-quality web applications. I've had the
                  opportunity to work with companies like Forever8, Yep!, and
                  Andela, where I led UI/UX redesigns, developed essential
                  features, and contributed to open-source projects. My approach
                  focuses on delivering seamless user experiences through
                  collaboration and innovative solutions. I'm committed to
                  continuous learning and pushing the boundaries of what's
                  possible in frontend development.
                </p>
              </div>
              <div className="sm:w-2/6 w-full mt-5 sm:mt-0">
                <Image
                  src="/sull.jpeg"
                  className="object-cover rounded-lg"
                  width={200}
                  height={200}
                  alt="Pencil"
                />
              </div>
            </div>
          </div>
          <div className="pt-20">
            <h2 className="sm:text-5xl text-2xl font-semibold">
              Education & Experience
            </h2>
            <div className="md:flex pt-12 md:space-x-20">
              <div className="md:w-1/2">
                <h3 className="uppercase sm:text-xl">Work Experience</h3>
                <div className="pt-3">
                  {experiences.map((experience) => (
                    <ExperienceCard
                      key={experience.id}
                      title={experience.title}
                      company={experience.company}
                      location={experience.location}
                      startDate={experience.startDate}
                      endDate={experience.endDate}
                    />
                  ))}
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="uppercase sm:text-xl">Education</h3>
                <div className="pt-3">
                  <div className="p-5 shadow mb-5 rounded hover:shadow-sm">
                    <span className="block text-sm text-gray-500">
                      January 2009 - July 2014
                    </span>
                    <span className="block text-lg font-semibold">
                      B.Tech Information Technology
                    </span>
                    <div className="flex items-center">
                      <span className="block text-sm">
                        Federal Univesity of Technology, Owerri(FUTO)
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="uppercase text-xl">Skills</h3>
                <ul className="pt-3">
                  <li className="text-sm">HTML & CSS</li>
                  <li className="text-sm pt-2">JavaScript</li>
                  <li className="text-sm pt-2">Reactjs</li>
                  <li className="text-sm pt-2">Vuejs</li>
                  <li className="text-sm pt-2">UI/UX Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
