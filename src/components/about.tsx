export const About = () => {
  return (
    <section className=" container mx-auto md:max-w-3/4 mt-34 p-10 md:p-0  ">
      <div className="relative bg-gray-100 px-8 md:pt-24 md:pb-16 pt-18 pb-9 rounded-4xl ">
        <h2 className="text-[#F9773B] absolute -left-[1%] -top-[4%]  text-xl font-bold bg-white p-5 rounded-2xl after:w-2 after:h-2 after:bg-[#F9773B] after:absolute after:-top-1 after:-left-1 after:rotate-45">
          About us
        </h2>

        <div className="about-card">
          <p className="font-medium text-lg md:text-2xl">
            Bloograna is a leading contracting and trading company, specializing
            in construction, infrastructure development, and material supply.
            With a dedicated team of professionals and strong partnerships, we
            provide innovative solutions to meet client needs across various
            industries.
          </p>
        </div>
      </div>
    </section>
  );
};
