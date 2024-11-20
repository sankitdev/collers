import backgroundImage from "../assets/Backlights.png";
const cardData = [
  {
    id: 1,
    title: "Title 1",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    image:
      "https://s3-alpha-sig.figma.com/img/1c58/67c1/ae5c8652360f15ed8928bae486c8af2a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R8Y381xbiBrMo4Q~SEBo9S~cgE8jL3OH8t2tsNU3PmHj2iSB7narf3j8k76tyNFMjWYGoEsar901cAnKZ3tVuynl6-OQBsnLaXiSkp4FgDm1uj9o2Q7Z~DPGB5BU~HwYJkAjg94hpoPd9NToSjRK8H0A9VXQ4KDV1qj4HWNp3pxuHVg50cz1323Dx76JhXUD5gsVm3HIX4GFtZ4~Bf4xonIaBJWIXcg7pw4QurWPgW6JhvYt8BcN0Q9VUE9h4fsank4Rb0f2vUaIjdV36agHz0QRBJCE-1FD~-C2GR7qzQuWOvTGJwdamhvIQB8Q0tFP7GBhXo0JbLeJ1qzjyMVHeQ__", // Replace with your image path
    bgColor: "bg-amber-400",
  },
  {
    id: 2,
    title: "Title 2",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    image:
      "https://s3-alpha-sig.figma.com/img/dca1/86a5/0d88eb3d3af7ffd32f03165632eb5422?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aV49dXwVe7BNxqutIxs5i3emPVFsRmjO7P4roqG1HScGxyNlyAmfGVZF8Djbnb~HLGwZzTOoNB64Ohnp0tjQR2BilKV02G9mohD4l1eauvSzAgQWcp38uK90PxGoFGRaLo3Hfhr~807Td9D6RhiZc8XVJjdKrglU0ipOedrOQDPmTsKjaZ3wl8PKg8FzI6FFqgrwZafgqA2WxOOkIGkB9utOcNq71U3Zlyy53OlKkFTrk00nUeHgb3GNGWrF-0jx7vip5MPSgEQ13mjdw0-mFiRY62DogF~7RDwvU-jEWSw-hKJFNpPnadiLzMiFEiXgAu8JDIBoZtX4L8OdTe1rEA__", // Replace with your image path
    bgColor: "bg-teal-500",
  },
  {
    id: 3,
    title: "Title 3",
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    image:
      "https://s3-alpha-sig.figma.com/img/c5b9/139c/f57074dcff92be506ebd3ca26296b822?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pAnRQkdzhJG7kixiWCwm0~LhLZjt0vvRcyB~UTYLiUyX6ZjH138vNEy-9dd653JhH2pE2DL8gGYEjKoGSjAAUWlaYD4-o7LEBgS04ZdfSUri~STQsrHF38Tp229XVt4s72mqFJ9lb~d4oB0GGa8MkSePYKbnxFlXw3GsJSiemPkIsaMLwzG6cZn6J1YUQ~92jevYiXSgJ8~Q5d2IEUpYSyqHEcwpjrIpmzeVsVca88fBVoFpW2y~KrIjCp7SUoa0LwLOh~XSj7XoaGUDhWYznSdbXAbAs17oCKHkxEYTXGKisDWuc95ckY4hQF0kb0LDuAOOO7TXClPNTTSiSxip8A__", // Replace with your image path
    bgColor: "bg-purple-500",
  },
];

const CardSection = () => {
  return (
    <div className="bg-[#0F172A] min-h-screen py-10 px-5">
      {/* Header */}
      <div className="w-full flex justify-between items-center px-8 py-5 text-white mb-10">
        <h1 className="text-3xl font-bold mb-3">The best of the best</h1>
        <button className=" border-2 border-white px-6 py-2 rounded-md shadow-md hover:bg-gray-200">
          Sign up now
        </button>
      </div>
      {/* Cards Section */}
      <div
        className="w-full p-8 mb-2 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {cardData.map((card) => (
          <div
            key={card.id}
            className="relative bg-[#0F172A] rounded-lg shadow-lg shadow-gray-100"
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="rounded-md mb-5 w-full h-60 object-cover"
            />
            {/* Card Content */}
            <h2 className="text-white text-lg font-semibold mb-2 px-5">
              {card.title}
            </h2>
            <p className="text-gray-300 text-sm mb-4 px-5">
              {card.description}
            </p>
            <button className="bg-transparent border border-white text-white w-4/5 ml-5 mb-8 py-2 rounded-md hover:bg-white hover:text-blue-900">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
