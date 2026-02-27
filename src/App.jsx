import react from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* header work  */}
      <header className="max-w-7xl px-10 mx-auto sticky top-0 shadow-md flex items-center justify-between bg-linear-to-r from-amber-50 to-blue-50 py-4">
        <div>
          <a href="#" className="text-2xl font-bold text-black">
            zi<span className="text-green-600 text-4xl">s</span>an
          </a>
        </div>
        <nav className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="/"
                className="text-black hover:font-medium hover:text-green-600 transition-all duration-300">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-black hover:font-medium hover:text-green-600 transition-all duration-300">
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-black hover:font-medium hover:text-green-600 transition-all duration-300">
                Contact
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-black hover:font-medium hover:text-green-600 transition-all duration-300">
                Blog
              </a>
            </li>
            <li>
              <a
                href="/features"
                className="text-black hover:font-medium hover:text-green-600 transition-all duration-300">
                Features
              </a>
            </li>
          </ul>
          <button className="bg-green-600 active:bg-green-800 text-white px-8 py-2 cursor-pointer capitalize rounded-sm  transition-all duration-300">
            Sign Up
          </button>
        </nav>
      </header>

      {/* hero section work */}
      <section>
        <div className="min-h-screen max-w-7xl px-10 mx-auto flex items-center justify-between">
          <div className="w-1/2">
            <h3 className="text-gray-800 bg-amber-50 w-fit">
              Welcome to My Family...
            </h3>
            <h1 className="text-5xl font-bold text-gray-800 my-4">
              Discover the Power of Zisan
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              voluptate.
            </p>
            <button className="bg-green-600 active:bg-green-800 text-white px-8 py-2 cursor-pointer capitalize rounded-sm  transition-all duration-300">
              Get Started
            </button>
          </div>
          <div className="w-1/2">
            <img
              src="./heroimage.png"
              alt="hero-image"
              className="w-150 h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* features section  */}
      <section>
        <div className="max-w-7xl px-10 mx-auto pb-20">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold inline text-gray-800 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-20 after:h-0.5 after:bg-green-600">
              Our Features
            </h2>
          </div>
          <div className="flex justify-between items-center gap-5">
            <div className="w-1/3 bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Feature One
              </h4>
              <p className="text-gray-600 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="bg-green-600 active:bg-green-800 text-white px-4 py-1 cursor-pointer capitalize rounded-sm  transition-all duration-300">
                Learn More
              </button>
            </div>
            <div className="w-1/3 bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Feature Two
              </h4>
              <p className="text-gray-600 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="bg-green-600 active:bg-green-800 text-white px-4 py-1 cursor-pointer capitalize rounded-sm  transition-all duration-300">
                Learn More
              </button>
            </div>
            <div className="w-1/3 bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Feature Three
              </h4>
              <p className="text-gray-600 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="bg-green-600 active:bg-green-800 text-white px-4 py-1 cursor-pointer capitalize rounded-sm  transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* how it works section */}
      <section>
        <div className="max-w-7xl px-10 mx-auto pb-20">
          <div className="text-center mb-20">
            <h4 className="text-2xl inline pb-3 font-bold text-gray-800 mb-4 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-20 after:h-0.5 after:bg-green-600">
              How It Works
            </h4>
          </div>
          <div className="flex justify-between items-center gap-5">
            {/* single working card design */}
            <div className="w-1/3 bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <p className="mr-4">
                  <span className="bg-fuchsia-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    1
                  </span>
                </p>
                <p className="text-lg font-medium text-gray-800">
                  Sign Up and Create Profile
                </p>
              </div>
              <img
                src="./work1.png"
                alt="work1"
                className="w-3/4 h-41 object-cover mx-auto"
              />
              <p className="text-center text-gray-600">
                Register and setup your profile
              </p>
            </div>
            {/* single working card design */}
            <div className="w-1/3 bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <p className="mr-4">
                  <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    2
                  </span>
                </p>
                <p className="text-lg font-medium text-gray-800">
                  Browser Opportunity
                </p>
              </div>
              <img
                src="./work2.png"
                alt="work2"
                className="w-3/4 h-35 object-cover mx-auto"
              />
              <p className="text-center text-gray-600">
                Explore the opportunities and find the best fit for you
              </p>
            </div>
            {/* single working card design */}
            <div className="w-1/3 bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center mb-4">
                <p className="mr-4">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    3
                  </span>
                </p>
                <p className="text-lg font-medium text-gray-800">
                  Get Started and Eangage
                </p>
              </div>
              <img
                src="./work3.png"
                alt="work3"
                className="w-3/4 h-35 object-cover mx-auto"
              />
              <p className="text-center text-gray-600">
                Join the community and start engaging with others
              </p>
            </div>
            {/* single working card design */}
          </div>
        </div>
      </section>
      {/* about section work  */}
      <section className="bg-blue-50">
        <div className="max-w-7xl px-10 mx-auto py-10 flex items-center justify-between gap-10">
          <div>
            <h4 className="text-2xl inline pb-3 font-bold text-gray-800 mb-4 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-20 after:h-0.5 after:bg-green-600">
              About Us
            </h4>
            <p className="text-gray-600 my-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              necessitatibus numquam consectetur temporibus ratione
              reprehenderit error.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 active:bg-green-900 cursor-pointer transition-colors duration-300">
              Learn More
            </button>
          </div>
          <div>
            <img
              src="./about.png"
              alt="about"
              className="w-60 h-60 object-cover"
            />
          </div>
        </div>
      </section>

      {/* pricing section work   */}
      <section>
        <div className="max-w-7xl px-10 mx-auto py-10">
          <div className="text-center mb-20">
            <h4 className="text-2xl inline pb-3 font-bold text-gray-800 mb-4 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-20 after:h-0.5 after:bg-green-600">
              Pricing Plans
            </h4>
          </div>
          <div className="flex justify-between items-center gap-5">
            {/* the plan */}
            <div className="w-1/3 bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className=" flex justify-start items-center pb-5">
                  <h4 className="text-xl inline font-semibold text-black pb-3 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-green-600">
                    Basic Plan
                  </h4>
                  <span className="bg-green-600 text-white rounded-full ml-3 w-8 h-8 flex items-center justify-center">
                    B
                  </span>
                </div>
                <div className="flex items-center justify-center mb-4 gap-5">
                  <div>
                    <img
                      src="./basic.png"
                      alt="basic plan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-5">
                      The basic plan includes essential features for small
                      teams.
                    </p>
                    <p className="text-blue-800 text-lg font-bold mb-6">
                      $9.99/month
                    </p>
                  </div>
                </div>
              </div>
              <button className="bg-green-600 active:bg-green-800 w-full text-white px-4 py-1 cursor-pointer capitalize rounded-sm  transition-all duration-300">
                Choose Plan
              </button>
            </div>
            {/* the plan  */}
            <div className="w-1/3 bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className=" flex justify-start items-center pb-5">
                  <h4 className="text-xl inline font-semibold text-black pb-3 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-green-600">
                    Pro Plan Bests
                  </h4>
                  <span className="bg-amber-600 text-white rounded-full ml-3 w-8 h-8 flex items-center justify-center">
                    P
                  </span>
                </div>
                <div className="flex items-center justify-center mb-4 gap-5">
                  <div>
                    <img
                      src="./pro.png"
                      alt="pro plan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-5">
                      The pro plan includes advanced for growing teams.
                    </p>
                    <p className="text-blue-800 text-lg font-bold mb-6">
                      $19.99/month
                    </p>
                  </div>
                </div>
              </div>
              <button className="bg-green-600 active:bg-green-800 w-full text-white px-4 py-1 cursor-pointer capitalize rounded-sm  transition-all duration-300">
                Choose Plan
              </button>
            </div>
            {/* the plan  */}
            <div className="w-1/3 bg-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className=" flex justify-start items-center pb-5">
                  <h4 className="text-xl inline font-semibold text-black pb-3 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-green-600">
                    Advanced Plan
                  </h4>
                  <span className="bg-fuchsia-600 text-white rounded-full ml-3 w-8 h-8 flex items-center justify-center">
                    A
                  </span>
                </div>
                <div className="flex items-center justify-center mb-4 gap-5">
                  <div>
                    <img
                      src="./premium.png"
                      alt="premium plan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-5">
                      The advanced plan includes advanced features for large teams using our platform.
                    </p>
                    <p className="text-blue-800 text-lg font-bold mb-6">
                      $29.99/month
                    </p>
                  </div>
                </div>
              </div>
              <button className="bg-green-600 active:bg-green-800 w-full text-white px-4 py-1 cursor-pointer capitalize rounded-sm  transition-all duration-300">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* footer section work */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl px-10 mx-auto flex items-center justify-between">
          <p>&copy; 2024 Zisan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-green-600 transition-colors duration-300">
              Facebook
            </a>
            <a href="#" className="hover:text-green-600 transition-colors duration-300">
              Twitter
            </a>
            <a href="#" className="hover:text-green-600 transition-colors duration-300">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
