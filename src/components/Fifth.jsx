import { Search, MapPin, Palette, Monitor, Hash, Sliders } from "lucide-react";

const CollectionSection = () => {
  const menuItems = [
    {
      icon: <Search className="w-4 h-4" />,
      text: "Bibendum tellus",
      hasArrow: true,
    },
    { icon: <MapPin className="w-4 h-4" />, text: "Cras eget" },
    { icon: <Palette className="w-4 h-4" />, text: "Dolor pharetra" },
    { icon: <Monitor className="w-4 h-4" />, text: "Amet, fringilla" },
    { icon: <Hash className="w-4 h-4" />, text: "Amet nibh" },
    { icon: <Sliders className="w-4 h-4" />, text: "Sed velit" },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-amber-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Text and Menu */}
          <div>
            <h1 className="text-4xl font-bold mb-6">Grow your collection</h1>
            <p className="text-gray-600 mb-8">
              Enim neque massa porta adipiscing elit. Sem libero id faucibus
              nibh amet dictum pellentesque sed. Eu non turpis risus odio
              sapien, fames sit rhoncus. Nec magna sed interdum sit purus
              tellus. Et volutpat proin neque placerat at bibendum quam tellus.
            </p>

            {/* Navigation Menu */}
            <nav className="space-y-4">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center w-full p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all group"
                >
                  <span className="w-8 h-8 flex items-center justify-center text-gray-500 group-hover:text-gray-900">
                    {item.icon}
                  </span>
                  <span className="flex-grow text-left ml-2 text-gray-700 group-hover:text-gray-900">
                    {item.text}
                  </span>
                  {item.hasArrow && <span className="text-gray-400">→</span>}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Column - Overlapping Images */}
          <div className="relative h-[500px]">
            {/* Browser-style decorative elements */}
            <div className="absolute right-0 top-0 w-4/5 h-64 bg-white rounded-lg shadow-lg p-2">
              <div className="flex gap-1.5 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <img
                src="https://s3-alpha-sig.figma.com/img/4884/8512/db2b7a8550bf0cb7642ab1c51682f47c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oyh7iH-wT0uHx1HCCqCsc4gaEjA~j~Sq-yzOKh9qwmqjYPuxtrgeWtXri8eAdmkL8YkiJW~fWB3sCG1lJmEkptAio2TwX9VrIOngb8rTIm9CX5SXdbEXwH7fL19jTSCM4nrRTTP1HmotiqZMH7LKZslWZuIA5mDdd7~6zEVNp1Fse3MwULegsjfB0zcq5sphB1vO5OvxbE2OJkyjAPbpIaNYTKzHdyvRpFLmZzrZ0KCRaYUD8Yj8xplOg1o~ms8-T-0-m~tT9PQpZeGV7J~g96KgcQi5KaIK801hEQraG5EJhD7eGS4yeY9nvOWTu8p3DrxSBO6ouRS1rorpqCuMJw__"
                alt="Sneaker collection"
                className="w-full h-48 object-cover rounded"
              />
            </div>

            {/* Middle image */}
            <div className="absolute left-0 top-20 w-full h-64 bg-white rounded-lg shadow-lg p-2">
              <div className="flex gap-1.5 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <img
                src="https://s3-alpha-sig.figma.com/img/1c58/67c1/ae5c8652360f15ed8928bae486c8af2a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R8Y381xbiBrMo4Q~SEBo9S~cgE8jL3OH8t2tsNU3PmHj2iSB7narf3j8k76tyNFMjWYGoEsar901cAnKZ3tVuynl6-OQBsnLaXiSkp4FgDm1uj9o2Q7Z~DPGB5BU~HwYJkAjg94hpoPd9NToSjRK8H0A9VXQ4KDV1qj4HWNp3pxuHVg50cz1323Dx76JhXUD5gsVm3HIX4GFtZ4~Bf4xonIaBJWIXcg7pw4QurWPgW6JhvYt8BcN0Q9VUE9h4fsank4Rb0f2vUaIjdV36agHz0QRBJCE-1FD~-C2GR7qzQuWOvTGJwdamhvIQB8Q0tFP7GBhXo0JbLeJ1qzjyMVHeQ__"
                alt="Featured sneakers"
                className="w-full h-48 object-cover rounded"
              />
            </div>

            {/* Small image in bottom right */}
            <div className="absolute right-8 bottom-0 w-48 h-48 bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://s3-alpha-sig.figma.com/img/b33c/5bf7/8c9f16fc1b6bb7a68d6f55fc9ce34b1d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mue1p0MaJbRKZlDBpqzqPr3PK6E3dpGYya7Nds84JqX6326LYAkvSf8yYszyM7v7hLZ0d2c-VpUmuGnFEVuDTZmOYeyteZq-TzYLPGTsiaLpkahENOShYXRYnEcGXSeLzp3vWt0AChdK8W~5Q3ImWrfjYmDMvWupreFCISGSAIvxbDbpAv-Bs2sJrmPycGuEn6yjH2A2UdybUqyJbUqhDucV1KOBgACBLttURliVcHlpZZBAceBb9sgKKcx9UhRKqGiiTeCgHQRyVfufRFopGKNjvqUP1-i-2v0rmafm5HCzj3g9yZvcpzLzig4LyJYg-AnwYkHw66ALQkmnLq~4bA__"
                alt="Sneaker detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
