import React, { useState } from "react";
import { Link } from "react-scroll";
export default function Nav({currSem, setCurrSem}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (

    <div class="z-0 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-0 lg:px-0 sticky top-0 z-40 backdrop-filter backdrop-blur-sm bg-white bg-opacity-40">
      <div class="relative flex items-center justify-between">
        <a
          href="/"
          spy={true} smooth={true}
          aria-label="ECE"
          title="ECE"
          class="cursor-pointer inline-flex items-center"
        ><div className="flex cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
          <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            ECE
          </span>
          </div>
        </a>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="timetable"
              smooth={true}
              aria-label="Time Table"
              title="Time Table"
              class="cursor-pointer font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
            >
              Time Table
            </Link>
          </li>
          <li>
            <Link
              to="resources"
              smooth={true}
              aria-label="Resources"
              title="Resources"
              class="cursor-pointer font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="cgpa_calc"
              smooth={true}
              aria-label="CGPA Calculator"
              title="CGPA Calculator"
              class="cursor-pointer font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
            >
              CGPA Calculator
            </Link>
          </li>
          <li>
            <Link
              to="blog"
              smooth={true}
              aria-label="Blog"
              title="Blog"
              class="cursor-pointer font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
            >
              Quick Links
            </Link>
          </li>
          <li>
            <button
              class="cursor-pointer inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-3xl shadow-md bg-teal-accent-700 hover:bg-teal-500 focus:shadow-outline focus:outline-none"
              onClick={currSem === 5 ? (() => setCurrSem(3)) : (() => setCurrSem(5))}
            >
              {"Sem " + currSem}
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
              </svg>
            </button>
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-teal-50 focus:bg-teal-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div class="absolute -top-5 -left-5 w-screen">
              <div class="p-5 bg-white h-screen z-10">
                <div class="flex items-center justify-between mb-12">
                  <div>
                    <Link
                      to="nav"
                      spy={true} smooth={true}
                      aria-label="ECE"
                      title="ECE"
                      class="cursor-pointer inline-flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                      <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        ECE
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="text-xl space-y-12">
                    <li>
                      <Link
                        to="timetable"
                        spy={true} smooth={true}
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Time Table"
                        title="Time Table"
                        class="cursor-pointer font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                      >
                        Time Table
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="resources"
                        spy={true} smooth={true}
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Resources"
                        title="Resources"
                        class="cursor-pointer font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                      >
                        Resources
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="cgpa_calc"
                        spy={true} smooth={true}
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="CGPA Calculator"
                        title="CGPA Calculator"
                        class="cursor-pointer font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                      >
                        CGPA Calculator
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="blog"
                        spy={true} smooth={true}
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Quick Links"
                        title="Quick Links"
                        class="cursor-pointer font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                      >
                        Quick Links
                      </Link>
                    </li>
                    <li>
                      <button
                        class="cursor-pointer inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-700 hover:bg-teal-500 focus:shadow-outline focus:outline-none"
                        onClick={currSem === 5 ? (() => setCurrSem(3)) : (() => setCurrSem(5))}
                      >
                        {"Sem " + currSem}
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};