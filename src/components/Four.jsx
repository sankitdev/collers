const TestimonialSection = () => {
  const testimonials = [
    {
      company: "Zoomerr",
      text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      author: "Hellen Jummy",
      role: "Team Lead",
      avatar: "/api/placeholder/32/32",
    },
    {
      company: "SHELLS",
      text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      author: "Helena John",
      role: "Co-founder",
      avatar: "/api/placeholder/32/32",
    },
    {
      company: "ArtVenue",
      text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      author: "David Oshodi",
      role: "Manager",
      avatar: "/api/placeholder/32/32",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Because they love us
        </h2>
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50">
            ←
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50">
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.author}'s avatar`}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-gray-900">
                {testimonial.company}
              </span>
            </div>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {testimonial.text}
            </p>

            <div className="flex items-center gap-3">
              <img
                src={testimonial.avatar}
                alt={`${testimonial.author}'s avatar`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900">
                  {testimonial.author}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
