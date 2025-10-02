import { TbContract } from "react-icons/tb";
import { SiTradingview } from "react-icons/si";
import { GrVmMaintenance } from "react-icons/gr";

export const Services = () => {
  return (
    <section>
      <div className="container mx-auto max-w-[80%]">
        <h2 className="font-[Plus_Jakarta_Sans, sans_serif] font-bold text-3xl">
          Our expertise in <br /> contracting and trading
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          <div className="py-18 px-7 bg-gray-100 rounded-3xl flex flex-col gap-4 items-center md:items-start hover:bg-[#F9773B] transition-all duration-300 ">
            <div>
              <TbContract className="text-6xl font-light" />
            </div>
            <h3 className="font-[Inter, sans_serif] font-bold text-2xl">
              Contracting
            </h3>
            <p className="text-[#272727] pt-10">
              We provide complete contracting solutions including civil works,
              structural construction, finishing, and MEP (Mechanical,
              Electrical & Plumbing).
            </p>
          </div>
          <div className="py-18 px-7 bg-gray-100 rounded-3xl flex flex-col gap-4 items-center md:items-start hover:bg-[#F9773B] transition-all duration-300">
            <div>
              <SiTradingview className="text-6xl" />
            </div>
            <h3 className="font-[Inter, sans_serif] font-bold text-2xl">
              Trading
            </h3>
            <p className="text-[#272727] pt-10">
              We supply construction materials, electrical equipment, mechanical
              parts, and safety tools with guaranteed quality.
            </p>
          </div>
          <div className="py-18 px-7 bg-gray-100 rounded-3xl flex flex-col items-center md:items-start gap-4 hover:bg-[#F9773B] transition-all duration-300">
            <div>
              <GrVmMaintenance className="text-6xl" />
            </div>
            <h3 className="font-[Inter, sans_serif] font-bold text-2xl">
              Maintenance
            </h3>
            <p className="text-[#272727] pt-10">
              From facility management to building maintenance, we ensure
              efficiency and reliability for residential, commercial, and
              industrial projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
