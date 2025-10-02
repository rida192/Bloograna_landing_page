import subtract from "@/assets/hero.png";
import { Button } from "./ui/button";
import { Navbar } from "./navbar";

export const Hero = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-10 ">
        <div className="container mx-auto md:max-w-3/4">
          <div className="flex flex-col-reverse md:flex-row justify-between">
            <div className="md:w-1/2 flex flex-col gap-4 md:gap-8 px-10 md:px-0 justify-center ">
              <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left font-[Plus_Jakarta_Sans, sans_serif]">
                Building the Future, Strengthening Trust.
              </h1>

              <p className="text-sm md:text-base text-center md:text-left text-[#696969]">
                With a combined experience in contracting and trading, we
                deliver excellence in construction, engineering, and material
                supply. Our commitment is to quality, safety, and timely
                delivery.
              </p>
              <Button className="self-center md:self-start">
                Explore our services
              </Button>
            </div>
            <div className="w-1/2 flex justify-end  self-center">
              <div className="w-full h-full md:w-3/4 md:h-3/4 ">
                <img src={subtract} alt="subtract" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
