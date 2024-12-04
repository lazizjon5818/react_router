import { React, useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import firstMeeting from "../../assets/firstMeeting.svg";
import secondMeeting from "../../assets/secondMeeting.svg";
import thirdMeeting from "../../assets/thirdMeeting.svg";
import firstlogo from "../../assets/firstlogo.svg"
import secondlogo from "../../assets/secondlogo.svg"
import thirdlogo from "../../assets/thirdlogo.svg"
import fothLogo from "../../assets/forthLogo.svg"
import fifthlogo from "../../assets/fifthlogo.svg"
import Rocket from "../../assets/Rocket.svg"
import Waterwheel from "../../assets/Waterwheel.svg"
import Assistant from "../../assets/Assistant.svg"
import MainImg from "../../assets/MainImg.svg"
import XorozKalla from "../../assets/XorozKalla.svg"
import qoravoy from "../../assets/qoravoy.svg"
import tortkoz from "../../assets/tortkoz.svg"
import shilqim from "../../assets/Shlqim.svg"
import overlay from "../../assets/Overlay.svg"
import YamaliAdasi from "../../assets/YamaliAdasi.svg"
import hind from "../../assets/Hind.svg"
import stylist from "../../assets/stylist.svg"



const Company = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); 
  }, []);

  return (
    

    <main className="container">

<div class="container mx-auto pt-20 items-start lg:items-center gap-8">

  <div className="lg:w-1/2 space-y-4">
    <p className="text-sm text-gray-500 uppercase">Company</p>
    <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
      Award-winning Company <br />
      seen and used by millions <br />
      around the world.
    </h2>
    <p className="text-gray-600 pt-8">
      It is a long established fact that a reader will be distracted by the readable content of a <br />
      page when looking at its layout. The Maker is a decentralized.
    </p>
  </div>


  <div className="flex justify-center lg:justify-end gap-3 pt-16 ml-5">
      <img
        src={firstMeeting}
        alt="FirstMeeting"
        className="w-1/3 object-cover rounded shadow-lg"
        data-aos="fade-up-right"
      />
      <img
        src={secondMeeting}
        alt="SecondMeeting"
        className="w-1/3 object-cover rounded shadow-lg"
        data-aos="zoom-in"
      />
      <img
        src={thirdMeeting}
        alt="ThirdMeeting"
        className="w-1/3 object-cover rounded shadow-lg"
        data-aos="fade-up-left"
      />
    </div>
</div>
<div className="container mx-auto pt-28">

  <div className="flex flex-col lg:flex-row items-start gap-8">
  
    <div className="lg:w-1/2 space-y-9">
      <p className="text-sm text-gray-500">Our Story 👇</p>
      <h3 className="text-3xl lg:text-4xl font-bold leading-snug">
        From Startups to Titans of <br />Industry
      </h3>
      <p className="text-gray-600">
        Through True Rich Attended does no end it his mother since 
        favourable real had half every him case in packages enquire we up
        ecstatic unsatiable saw his giving Remain expense of gay produce 
        excited perceived do an a china mean its so ye when in explained
        Hearts am next over match mr partiality not shoud latter thus as
        out no passed forming middleton exercise up
      </p>
    </div>

    {/* <!-- Right Section: Stats --> */}
    <div className="lg:w-2/4  grid grid-cols-2 gap-16 p-20 bg-[#FFD3AF91] rounded-lg" data-aos="zoom-in-left">

      <div className="flex flex-col items-center">
        <h4 className="text-2xl font-bold">1560+</h4>
        <p className="text-lg">Project Delivered</p>
      </div>


      <div className="flex flex-col items-center">
        <h4 className="text-2xl font-bold">100+</h4>
        <p className="text-lg">Professional</p>
      </div>

      <div className="flex flex-col items-center">
        <h4 className="text-2xl font-bold">950+</h4>
        <p className="text-lg">Happy Client</p>
      </div>


      <div className="flex flex-col items-center">
        <h4 className="text-2xl font-bold">10 yrs</h4>
        <p className="text-lg">Experience</p>
      </div>
    </div>
  </div>


  <div className="mt-32 flex justify-center gap-16 bg-[#F4F4F4] p-1 rounded-lg " >
    <img src={firstlogo} alt="First Logo" className="h-24"  data-aos="flip-left"/>
    <img src={secondlogo} alt="Second Logo" className="h-24" data-aos="flip-left"/>
    <img src={thirdlogo} alt="Third Logo" className="h-24" data-aos="flip-left"/>
    <img src={fothLogo} alt="Fourth Logo" className="h-24" data-aos="flip-left" />
    <img src={fifthlogo} alt="Fifth Logo" className="h-24" data-aos="flip-left" />
  </div>
</div>
<div className="container mx-auto pt-20">


  <div className="flex flex-col lg:flex-row items-start gap-8 pt-20 bg-teal-100 p-2">
   
    <div className="lg:w-1/2 space-y-4">
      <p className="text-sm text-gray-500 pb-5">Our expertise</p>
      <h4 className="text-3xl lg:text-4xl font-bold leading-snug pb-10">
        We want to get local <br /> identification in every <br /> corner of the world in this <br /> era of global citizenship
      </h4>
      <p className="text-gray-600">
        Through True Rich Attended does no end it his mother since real had half
        every him case in packages enquire we up ecstatic unsatiable saw his giving 
        Remain expense you position concluded.
      </p>
    </div>

    <div className="lg:w-1/2 flex flex-col gap-5">
 
      <div className="bg-[#F4F4F4] p-6 rounded-lg flex items-center space-x-4 hover:bg-[#FFD3AF91] ">
        <img src={Rocket} alt="Rocket Icon" className="h-16" />
        <div>
          <p className="text-xl font-semibold">On Time Delivery</p>
          <p className="text-gray-600">Through True Rich Attended does no end it <br /> his mother since real had half every him.</p>
        </div>
      </div>


      <div className="bg-[#F4F4F4] p-6 rounded-lg flex items-center space-x-4 hover:bg-[#FFD3AF91]">
        <img src={Waterwheel} alt="Waterwheel Icon" className="h-16" />
        <div>
          <p className="text-xl font-semibold">Best Quality</p>
          <p className="text-gray-600">Through True Rich Attended does no end it <br /> his mother since real had half every him.</p>
        </div>
      </div>

     
      <div className="bg-[#EAEAEA] p-6 rounded-lg flex items-center space-x-4 hover:bg-[#FFD3AF91]">
        <img src={Assistant} alt="Assistant Icon" className="h-16" />
        <div>
          <p className="text-xl font-semibold">Support Assist</p>
          <p className="text-gray-600">Through True Rich Attended does no end it <br /> his mother since real had half every him.</p>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="container mx-auto pt-20 space-y-8">
  <div className="flex flex-col items-start gap-4 ">
    <div className="space-y-4">
      <p className="text-sm text-gray-500 pb-8">Our VISION</p>
      <h4 className="text-3xl lg:text-4xl font-bold leading-snug">
        We want to get local  <br /> identification in
        every corner of  <br /> the  world in this era of <br />
        global citizenship.
      </h4>
      <p className="text-gray-600 pt-10">
        Through True Rich Attended does no end it his mother since real had half <br /> 
        every him case in packages enquire we up ecstatic unsatiable saw his giving <br />
        Remain expense you position concluded.
      </p>
    </div>

 
    <div>
      <img src={MainImg} alt="Main Image" className="w-full object-cover pt-10" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" />
    </div>
  </div>
</div>

<div className="container mx-auto pt-24 space-y-8">
  <div className="flex flex-col items-start gap-14">
    <div className="space-y-8">
      <p className="text-sm text-gray-500">MEET OUR TEAM</p>
      <h4 className="text-3xl lg:text-4xl font-bold leading-snug">
        Teamwork is the only <br /> way we work
      </h4>
      <p className="text-gray-600">
        Through True Rich Attended does no end it his mother since <br />
        real had half every him case in packages enquire <br />
        we up ecstatic unsatiable.
      </p>
    </div>


    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 ">
      <img src={XorozKalla} alt="Team Member 1" className="object-cover w-full h-full " data-aos="zoom-in" />
      <img src={qoravoy} alt="Team Member 2" className="object-cover w-full h-full " data-aos="zoom-in"/>
      <img src={tortkoz} alt="Team Member 3" className="object-cover w-full h-full" data-aos="zoom-in"/>
      <img src={shilqim} alt="Team Member 4" className="object-cover w-full h-full " data-aos="zoom-in"/>
      <img src={overlay} alt="Team Member 5" className="object-cover w-full h-full " data-aos="zoom-in"/>
      <img src={YamaliAdasi} alt="Team Member 6" className="object-cover w-full h-full " data-aos="zoom-in"/>
      <img src={hind} alt="Team Member 7" className="object-cover w-full h-full " data-aos="zoom-in"/>
      <img src={stylist} alt="Team Member 8" className="object-cover w-full h-full "data-aos="zoom-in" />
    </div>
  </div>
</div>


  
    </main>
  );

};

export default Company;

