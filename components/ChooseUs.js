import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
const ChooseUs = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col items-center justify-between lg:flex-row">

        <div className="flex flex-col items-start gap-5">
          <p className="text-[#183631] font-medium text-lg items-start">Advantage</p>
          <p className="text-4xl font-bold items-start text-[#183631]">Why Choose Grozara?</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Image src="/assets/bell.svg" width={50} height={50} alt="" />
              <p className="text-2xl font-semibold text-[#183631]">Clever Notifications</p>
            </div>

            <p className="text-[#183631]">Arcu At Dictum Sapien, Mollis. Vulputate Sit ld Accumsan, <br />
              Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis <br />
              Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis <br />
              Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget <br />
              Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.</p>
          </div>


        </div>
        <Image src="/assets/chose.png" width={600} height={0} alt="" />
      </div>
    </div>
  );
};

export default ChooseUs;
