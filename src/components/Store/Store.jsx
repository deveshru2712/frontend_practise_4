import React from "react";
import Banner from "../../assets/website/pattern.jpeg";
import PlayStore from "../../assets/website/play_store.png";
import AppStore from "../../assets/website/app_store.png";

const Store = () => {
  const bannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
  };

  return (
    <div className="container pb-14">
      <div
        style={bannerImg}
        className="text-center py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-4xl font-semibold font-serif"
            >
              Get Started with our app
            </h1>
            <p data-aos="fade-up" className="text-center sm:px-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis nostrum, voluptate necessitatibus veniam sed ipsam.
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-wrap justify-center items-center gap-4"
            >
              <a href="#">
                <img
                  src={AppStore}
                  alt="app_store"
                  className="mx-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="#">
                <img
                  src={PlayStore}
                  alt="play_store"
                  className="mx-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
