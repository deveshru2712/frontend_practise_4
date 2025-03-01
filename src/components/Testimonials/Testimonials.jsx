import React from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Karan",
      image: "https://picsum.photos/200",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. At, vitae.",
      aosDelay: "0",
    },
    {
      id: 2,
      name: "Tom",
      image: "https://picsum.photos/100",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. At, vitae.",
      aosDelay: "300",
    },
    {
      id: 3,
      name: "Rahul",
      image: "https://picsum.photos/300",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. At, vitae.",
      aosDelay: "1000",
    },
  ];

  return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
      <div className="container">
        {/* heading */}
        <div className="space-y-4 pb-12">
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-3xl font-semibold text-center sm:text-4xl font-serif"
          >
            Whats Our Clients Say About us?
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="1000"
            className="text-center sm:px-44"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iur
            nesciunt, iure accusantium iusto.
          </p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white">
          {testimonialsData.map((items) => (
            <div
              data-aos="fade-up"
              data-aos-delay={items.aosDelay}
              key={items.id}
              className="card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg"
            >
              <div className="grid place-items-center">
                <img
                  src={items.image}
                  alt={items.name}
                  className="h-20 w-20 rounded-full"
                />
              </div>
              <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              <p>{items.description}</p>
              <p className="font-semibold text-center">{items.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
