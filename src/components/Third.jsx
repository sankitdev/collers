const Third = () => {
  return (
    <div className="bg-amber-50 py-16 px-6">
      <div className="max-w-7xl bg-white mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 relative p-6">
        {/* Left Content */}
        <div className="z-10">
          <h2 className="text-3xl font-bold text-black mb-6">Why join us</h2>
          <ul className="space-y-4 text-gray-800">
            <li className="flex items-start">
              <span className="text-green-600 mt-1 mr-3">✔</span>
              <p>Est et in pharetra magna adipiscing ornare aliquam.</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mt-1 mr-3">✔</span>
              <p>Tellus arcu sed consequat ac velit ut eu blandit.</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mt-1 mr-3">✔</span>
              <p>Ullamcorper ornare in et egestas dolor orci.</p>
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 text-amber-900 font-medium border-2 border-amber-900 rounded-md shadow hover:bg-orange-100">
            Sign up now
          </button>
        </div>

        {/* Right Content */}
        <div className="relative z-10">
          {/* Shapes */}
          <div className="absolute -top-10 -left-10 w-28 h-28 bg-yellow-400 rounded-full -z-10"></div>
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-teal-600 rounded-md rotate-45 -z-10"></div>
          <div className="absolute -bottom-10 -right-16 w-32 h-32 bg-pink-500 rounded-md rotate-45 -z-10"></div>

          {/* Video Frame */}
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/4884/8512/db2b7a8550bf0cb7642ab1c51682f47c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oyh7iH-wT0uHx1HCCqCsc4gaEjA~j~Sq-yzOKh9qwmqjYPuxtrgeWtXri8eAdmkL8YkiJW~fWB3sCG1lJmEkptAio2TwX9VrIOngb8rTIm9CX5SXdbEXwH7fL19jTSCM4nrRTTP1HmotiqZMH7LKZslWZuIA5mDdd7~6zEVNp1Fse3MwULegsjfB0zcq5sphB1vO5OvxbE2OJkyjAPbpIaNYTKzHdyvRpFLmZzrZ0KCRaYUD8Yj8xplOg1o~ms8-T-0-m~tT9PQpZeGV7J~g96KgcQi5KaIK801hEQraG5EJhD7eGS4yeY9nvOWTu8p3DrxSBO6ouRS1rorpqCuMJw__" // Replace with your image source
              alt="Why Join Us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <button className="w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-orange-500"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
