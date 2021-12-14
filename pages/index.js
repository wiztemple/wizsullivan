import Head from 'next/head'
import Image from 'next/image'
import ExperienceCard from '../components/ExperienceCard'
import Footer from '../components/Footer'

const experiences = [
  {
    id: 1,
    title: 'JavaScript Developer',
    company: 'Gitstart',
    location: 'San Francisco, CA',
    startDate: 'June 2021',
    endDate: 'Present',
    description: '',
    logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGzAwPSp6wsAA/company-logo_100_100/0/1519908187067?e=1647475200&v=beta&t=RtTaM5IiGgBIreZsHSI9T9DM827T3QlUI5qM8-g0Lxc',
    logoAlt: 'Gitstart logo',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'e-settlement',
    location: 'Yaba Lagos.',
    startDate: 'February 2021',
    endDate: 'Present',
    description: '',
    logo: '',
    logoAlt: 'e-settlement logo',
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Lawrence Price Ltd',
    location: 'Ikeja Lagos.',
    startDate: 'December 2020',
    endDate: 'August 2021',
    description: '',
    logo: '',
    logoAlt: 'Lawrence Price Ltd logo',
  },
  {
    id: 4,
    title: 'Software Developer',
    company: 'Andela',
    location: 'Lagos, Nigeria',
    startDate: 'October 2018',
    endDate: 'October 2020',
    description: '',
    logo: '',
    logoAlt: 'Andela logo',
  },
  {
    id: 5,
    title: 'Software Developer',
    company: 'Hornblower Cruises',
    location: 'San Francisco CA.',
    startDate: 'December 2019',
    endDate: 'June 2020',
    description: '',
    logo: '',
    logoAlt: 'Hornblower Cruises logo',
  },
  {
    id: 6,
    title: 'Frontend Developer',
    company: 'e-settlement',
    location: 'Yaba Lagos.',
    startDate: 'August 2017',
    endDate: 'September 2018',
    description: '',
    logo: '',
    logoAlt: 'e-settlement logo',
  },
  {
    id: 7,
    title: 'Web Design Intern',
    company: 'Univelcity',
    location: 'Lagos, Nigeria',
    startDate: 'February 2017',
    endDate: 'July 2017',
    description: '',
    logo: '',
    logoAlt: 'Univelcity logo',
  }
]
export default function Home() {
  return (
    <div className="min-h-screen py-2">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center">
        <div className="lg:w-[800px]">
          <h1 className="text-7xl font-bold md:pt-60 text-center">
            Sullivan Wisdom
          </h1>

          <p className="mt-3 text-2xl text-center text-gray-700">
            I’m a Frontend Engineer based in Lagos.
          </p>
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-5">
              <a href="https://twitter.com/sullivanwisdom" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21227 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21227 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2772 21.5821 21.7437 19.4881C23.2101 17.3942 23.9993 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z" fill="#5C5673" />
                </svg>
              </a>
              <a href="https://twitter.com/sullivanwisdom" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5343 4.98434C21.5502 5.20361 21.5502 5.42163 21.5502 5.63964C21.5502 12.3117 16.6004 20 7.55465 20C4.76776 20 2.17871 19.1718 0 17.7334C0.395685 17.7797 0.776715 17.796 1.18828 17.796C3.40239 17.8015 5.55381 17.0419 7.29575 15.6396C6.26919 15.6206 5.27406 15.2731 4.4493 14.6457C3.62455 14.0183 3.01134 13.1423 2.6953 12.1401C2.99939 12.1864 3.3047 12.2178 3.62467 12.2178C4.06554 12.2178 4.50885 12.1551 4.92041 12.0461C3.80634 11.8153 2.80457 11.1958 2.08543 10.2928C1.36629 9.38983 0.974182 8.25918 0.975779 7.0931V7.03045C1.63159 7.40509 2.39243 7.63939 3.19845 7.67072C2.52321 7.21036 1.96953 6.58567 1.58682 5.85239C1.2041 5.11911 1.00425 4.30003 1.00509 3.46824C1.00509 2.53101 1.24812 1.67147 1.67433 0.922191C2.91041 2.48217 4.45207 3.75838 6.19947 4.66816C7.94688 5.57794 9.86106 6.10101 11.818 6.20348C11.7423 5.82759 11.6959 5.43791 11.6959 5.04699C11.6956 4.38411 11.8226 3.72768 12.0697 3.1152C12.3168 2.50272 12.6791 1.94622 13.136 1.47749C13.5928 1.00877 14.1353 0.637027 14.7322 0.383509C15.3292 0.129991 15.969 -0.000328755 16.6151 6.22808e-07C18.0318 6.22808e-07 19.3104 0.608947 20.2092 1.59379C21.3105 1.37529 22.3666 0.962815 23.3308 0.37464C22.9637 1.54093 22.1947 2.52989 21.1679 3.15625C22.1447 3.04195 23.0992 2.77841 24 2.37439C23.3272 3.38065 22.4936 4.26306 21.5343 4.98434Z" fill="#5C5673" />
                </svg>
              </a>
              <a href="https://twitter.com/sullivanwisdom" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24 24H19.0268V16.2052C19.0268 14.3453 18.9957 11.955 16.4432 11.955C13.856 11.955 13.4607 13.9805 13.4607 16.0708V24H8.49229V7.9688H13.2595V10.1611H13.3289C13.9913 8.90116 15.6143 7.57162 18.0338 7.57162C23.0693 7.57162 23.9988 10.8907 23.9988 15.208V24H24ZM2.88546 5.78011C2.50645 5.78043 2.13109 5.70587 1.78087 5.56072C1.43065 5.41556 1.11243 5.20265 0.844431 4.93416C0.576428 4.66568 0.363898 4.34689 0.219002 3.99604C0.0741055 3.64518 -0.00031406 3.26915 9.96171e-07 2.88946C1.1929e-06 2.31808 0.1691 1.75953 0.485921 1.28441C0.802743 0.809294 1.25306 0.438944 1.77995 0.220177C2.30684 0.00141099 2.88665 -0.0559498 3.44608 0.0553461C4.0055 0.166642 4.51943 0.441598 4.9229 0.845455C5.32637 1.24931 5.60126 1.76394 5.71282 2.32428C5.82438 2.88462 5.7676 3.46552 5.54966 3.99354C5.33173 4.52156 4.96242 4.973 4.48842 5.29078C4.01442 5.60857 3.45701 5.77844 2.88666 5.77891L2.88546 5.78011ZM5.37326 24H0.39527V7.9688H5.37326V24Z" fill="#5C5673" />
                </svg>
              </a>
            </div>
          </div>
          <div className="pt-40">
            <h2 className="text-5xl font-semibold">A little bit about me</h2>
            <div className="flex space-x-10 pt-5">
              <div className="md:w-4/6">
                <p className="text-textcolor leading-loose">
                  Velit reprehenderit aliquip aliqua reprehenderit quis enim ullamco qui excepteur velit eiusmod.
                  Reprehenderit eiusmod ea aliqua do adipisicing consequat veniam sint voluptate proident enim commodo.
                  Labore nostrud ut officia nulla sint. Non consequat do eu anim. Et minim sunt ad eu eiusmod cillum
                  sunt aliquip minim anim culpa amet.
                </p>
              </div>
              <div className="md:w-2/6">
                <Image
                  src="/mama.jpg"
                  className="object-cover rounded-md"
                  width={200}
                  height={200}
                  alt="Pencil"
                />
              </div>
            </div>
          </div>
          <div className="pt-20">
            <h2 className="text-5xl font-semibold">Education & Experience</h2>
            <div className="md:flex md:pt-12 md:space-x-20">
              <div className="md:w-1/2">
                <h3 className="uppercase text-xl">Work Experience</h3>
                <div className="pt-3">
                  {
                    experiences.map(experience => (
                      <ExperienceCard
                        key={experience.id}
                        title={experience.title}
                        company={experience.company}
                        location={experience.location}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        logo={experience.logo}
                        logoAlt={experience.logoAlt}
                      />
                    ))
                  }
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="uppercase text-xl">Education</h3>
                <div className="pt-3">
                  <div className="p-5 shadow mb-5 rounded hover:shadow-sm">
                  <span className="block text-sm text-gray-500">January 2009 - July 2014</span>
                    <span className="block text-lg font-semibold">B.Tech Information Technology</span>
                    <div className="flex items-center">
                      <span className="block text-sm">Federal Univesity of Technology, Owerri(FUTO)</span>
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
      <Footer />
    </div>
  )
}
