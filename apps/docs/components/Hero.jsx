import { Git } from "@heroicons/react/outline";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
                <span className="block xl:inline">
                  A beautiful and minimal component library powered by
                </span>
                <a
                  href={"https://github.com/unocss/unocss"}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {" "}
                  <span className="block text-indigo-600 xl:inline">
                    UnoCSS.
                  </span>
                </a>
              </h1>
              <p className="mt-3 mx-auto text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                Developed to be used easily by developers without headaches.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <Link href="/components">
                  <span className="inline-flex justify-center py-2.5 px-4 border border-transparent text-base font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                    Get started
                  </span>
                </Link>
                <a
                  className="inline-flex justify-center py-2.5 px-4 border border-slate-900 text-base font-semibold rounded-lg bg-white text-slate-900 hover:bg-slate-700 hover:text-white ml-3"
                  href="https://github.com/eliutdev/unocssc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="ml-2">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
