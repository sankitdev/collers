import Shoes from "../assets/shoes.png";
const SneakerLandingPage = () => {
  return (
    <div className=" min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 ">
        <h1 className="text-2xl font-bold text-orange-900">Collers</h1>
        <nav className="sm:flex items-center space-x-6 hidden">
          <a
            href="#"
            className="text-orange-900 font-medium  hover:text-orange-900"
          >
            Products
          </a>
          <a
            href="#"
            className="text-orange-900 font-medium hover:text-orange-900"
          >
            Solutions
          </a>
          <a
            href="#"
            className="text-orange-900 font-medium hover:text-orange-900"
          >
            Pricing
          </a>
          <a
            href="#"
            className=" text-orange-900 font-medium hover:text-orange-900"
          >
            Resources
          </a>
          <a href="#" className="text-orange-900 font-semibold">
            Log In
          </a>
          <button className="border-2 border-orange-900 text-orange-900 font-medium px-4 py-2 rounded-lg hover:bg-orange-600">
            Sign up now
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-start lg:justify-between px-8 py-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
            Collectible Sneakers
          </h2>
          <p className="text-gray-700 mb-6">
            Sit elit feugiat turpis sed integer accumsan turpis. Sed suspendisse
            nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
          </p>
          <div className="flex space-x-4">
            <button className="border-2 border-orange-900 text-orange-900 px-6 py-2 rounded-lg hover:bg-orange-900 hover:text-white">
              Sign up now
            </button>
            <button className="text-orange-900 border border-orange-900 px-6 py-2 rounded-lg hover:bg-orange-900 hover:text-white">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="w-64 h-64 bg-amber-400 rounded-lg relative"></div>
          <img
            src={Shoes}
            alt="Collectible Sneakers"
            className="absolute w-80 h-80 object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-12">
        {[
          { title: "Nibh viverra", icon: "🎯" },
          { title: "Cursus amet", icon: "⏳" },
          { title: "Ipsum fermentum", icon: "📺" },
        ].map((feature, index) => (
          <div key={index} className="text-center rounded-lg p-6">
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SneakerLandingPage;
