import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="mt-10 lg:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
                <h2 className="text-2xl font-semibold text-gray-800 light:text-white lg:text-3xl">React <span className="text-blue-600 light:text-blue-400">Boilerplate</span></h2>
                <p className="mt-2 text-sm text-gray-500 light:text-gray-400 lg:text-base">Create your next React project with ease. Works with React Router v6 and Designed on beautiful TailwindCSS.</p>
                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                    <Link to="#" className="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Get Started</Link>
                    <Link to="#" className="block px-3 py-2 text-sm font-semibold text-center text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Learn More</Link>
                </div>
            </div>
        </div>
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <div className="w-full h-full bg-cover home-hero-right">
                <div className="w-full h-full"></div>
            </div>
        </div>
    </div>
  );
}

export default Hero;
