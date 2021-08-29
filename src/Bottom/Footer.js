import { Link } from "react-scroll";
export default function Footer() {
  return (
    <div className="px-4 pt-16 pb-4 mt-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-gray-100">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              ECE
            </span>
          </a>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Electronics and Communication Department,<br /> VNIT Nagpur
            </p>
          </div>
        </div>
        <div className="grid text-sm sm:text-base grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Menu
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  spy={true} smooth={true}
                  className="cursor-pointer text-gray-600 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#timetable"
                  spy={true} smooth={true}
                  className="cursor-pointer text-gray-600 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  Timetable
                </a>
              </li>
              <li>
                <a
                  spy={true} smooth={true}
                  href="/#resources"
                  className="cursor-pointer text-gray-600 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  Resources
                </a>
              </li>
              <li>
                <Link
                  to="cgpa_calc"
                  spy={true} smooth={true}
                  className="cursor-pointer text-gray-600 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  CGPA Calculator
                </Link>
              </li>
              <li>
                <a
                  href="/#blog"
                  spy={true} smooth={true}
                  className="cursor-pointer text-gray-600 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  Quick Links
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Important Links
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a 
                  href="https://vnit.ac.in/"
                  className="text-gray-600 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  Institute Website
                </a>
              </li>
              <li>
                <a
                  href="https://vnit.ac.in/ece/"
                  className="text-gray-600 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  Department Website
                </a>
              </li>
              <li>
                <a
                  href="http://aims.vnit.ac.in/"
                  className="text-gray-600 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  AIMS Portal
                </a>
              </li>
              <li>
                <a
                  href="http://vnit.ac.in/ece/wp-content/uploads/2019/10/B_TECH_ECE_Course_Book.pdf"
                  className="text-gray-600 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  ECE Coursebook
                </a>
              </li>
              <li>
                <a
                  href="http://vnit.ac.in/ece/wp-content/uploads/2019/10/B_TECH_ECE_Course_Book.pdf"
                  className="text-gray-600 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  Academic Calender
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">About Us</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/images/ece_council.jpg"
                  
                  className="text-gray-600 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  Department Council
                </a>
              </li>
              <li>
                <a
                  href="/images/ece_mentors.jpg"
                  className="text-gray-600 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  Student Mentors
                </a>
              </li>
              <li>
                <a
                  href="/webteam"
                  className="text-gray-600 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  Web Team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Social Media</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/tronix_vnit/"
                  className="text-gray-600 transition-colors duration-300 hover:text-teal-accent-400"
                >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


