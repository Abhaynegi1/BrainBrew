import React from "react";

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            AI Course Generator
            <strong className="font-extrabold text-[#8a613b] sm:block">
              {" "}
              Custom Learning Path, Powered by AI{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Unlock personalized education with Al-driven course creation. Tailor
            your learning journey to fit your unique goals and pace
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded-sm bg-[#724e2c] px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-[#5a3d22] focus:ring-3 focus:outline-hidden sm:w-auto"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
