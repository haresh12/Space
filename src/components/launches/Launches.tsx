import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils";

const Launches = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-y-auto  bg-gradient-to-tl from-gray-950  via-gray-400 to-gray-950 py-[16px] pt-[96px] shadow-lg flex flex-wrap items-center justify-center">
      <div className="bg-[#f1f2f5]  pb-3 w-[320px] shadow-2xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <div className=" relative">
          <img
            alt="articalIcon"
            className="h-[230px] w-[400px] rounded-t-xl resize-none"
            src="https://storage.googleapis.com/nextspaceflight/media/rockets/Vulcan_VC2.jpg"
          />
          <span className="absolute top-4 right-4  bg-[#2fe31b] px-6 py-1 rounded-2xl opacity-70 text-white font-semibold animate-pulse">
            Rocket Lab
          </span>
        </div>
        <span className=" m-1 font-bold text-l text-gray-700">
          Falcon 9 Block 5 | Starlink Group 6-35
        </span>
        <div className="w-full h-[1px] bg-zinc-300 mt-[5px]"></div>
        <span className="mx-2 mt-1 font-extralight text-[13px]">
          Thu Jan 11, 2024 09:30 GMT+5:30 LA-Y1, Tanegashima Space Center, Japan
        </span>
        <span
          className=" mx-2 mt-1 font-semibold text-[#1805f0] cursor-pointer"
          onClick={() => {
            navigate(ROUTES.LAUNCH_DETAILS);
          }}
        >
          Details
        </span>
      </div>
      <div className="bg-[#f1f2f5] pb-3 w-[320px] shadow-2xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <div className=" relative">
          <img
            alt="articalIcon"
            className="h-[230px] w-[400px] rounded-t-xl resize-none object-bottom"
            src="https://storage.googleapis.com/nextspaceflight/media/rockets/long_march_5_j4N3XWK.jpg"
          />
          <span className="absolute top-4 right-4  bg-[#2fe31b] px-6 py-1 rounded-2xl opacity-70 text-white font-semibold animate-pulse">
            Rocket Lab
          </span>
        </div>
        <span className=" m-1 font-bold text-l text-gray-700">
          Falcon 9 Block 5 | Starlink Group 6-35
        </span>
        <div className="w-full h-[1px] bg-zinc-300 mt-[5px]"></div>
        <span className="mx-2 mt-1 font-extralight text-[13px]">
          Thu Jan 11, 2024 09:30 GMT+5:30 LA-Y1, Tanegashima Space Center, Japan
        </span>
        <span
          className=" mx-2 mt-1 font-semibold text-[#1805f0] cursor-pointer"
          onClick={() => {
            alert("WE WILL SHOW DETAILS HERE");
          }}
        >
          Details
        </span>
      </div>
      <div className="bg-[#f1f2f5] pb-3 w-[320px] shadow-2xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <div className=" relative">
          <img
            alt="articalIcon"
            className="h-[230px] w-[400px] rounded-t-xl resize-none object-bottom"
            src="https://storage.googleapis.com/nextspaceflight/media/rockets/Vulcan_VC2.jpg"
          />
          <span className="absolute top-4 right-4  bg-[#2fe31b] px-6 py-1 rounded-2xl opacity-70 text-white font-semibold animate-pulse">
            Rocket Lab
          </span>
        </div>
        <span className=" m-1 font-bold text-l text-gray-700">
          Falcon 9 Block 5 | Starlink Group 6-35
        </span>
        <div className="w-full h-[1px] bg-zinc-300 mt-[5px]"></div>
        <span className="mx-2 mt-1 font-extralight text-[13px]">
          Thu Jan 11, 2024 09:30 GMT+5:30 LA-Y1, Tanegashima Space Center, Japan
        </span>
        <span
          className=" mx-2 mt-1 font-semibold text-[#1805f0] cursor-pointer"
          onClick={() => {
            alert("WE WILL SHOW DETAILS HERE");
          }}
        >
          Details
        </span>
      </div>
      <div className="bg-[#f1f2f5] pb-3 w-[320px] shadow-2xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <div className=" relative">
          <img
            alt="articalIcon"
            className="h-[230px] w-[400px] rounded-t-xl resize-none object-bottom"
            src="https://storage.googleapis.com/nextspaceflight/media/rockets/launcher1_nhrtUnI.jpg"
          />
          <span className="absolute top-4 right-4  bg-[#2fe31b] px-6 py-1 rounded-2xl opacity-70 text-white font-semibold animate-pulse">
            Rocket Lab
          </span>
        </div>
        <span className=" m-1 font-bold text-l text-gray-700">
          Falcon 9 Block 5 | Starlink Group 6-35
        </span>
        <div className="w-full h-[1px] bg-zinc-300 mt-[5px]"></div>
        <span className="mx-2 mt-1 font-extralight text-[13px]">
          Thu Jan 11, 2024 09:30 GMT+5:30 LA-Y1, Tanegashima Space Center, Japan
        </span>
        <span
          className=" mx-2 mt-1 font-semibold text-[#1805f0] cursor-pointer"
          onClick={() => {
            alert("WE WILL SHOW DETAILS HERE");
          }}
        >
          Details
        </span>
      </div>
      <div className="bg-[#f1f2f5] pb-3 w-[320px] shadow-2xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <div className=" relative">
          <img
            alt="articalIcon"
            className="h-[230px] w-[400px] rounded-t-xl resize-none object-bottom"
            src="https://storage.googleapis.com/nextspaceflight/media/rockets/Vulcan_VC2.jpg"
          />
          <span className="absolute top-4 right-4  bg-[#2fe31b] px-6 py-1 rounded-2xl opacity-70 text-white font-semibold animate-pulse">
            Rocket Lab
          </span>
        </div>
        <span className=" m-1 font-bold text-l text-gray-700">
          Falcon 9 Block 5 | Starlink Group 6-35
        </span>
        <div className="w-full h-[1px] bg-zinc-300 mt-[5px]"></div>
        <span className="mx-2 mt-1 font-extralight text-[13px]">
          Thu Jan 11, 2024 09:30 GMT+5:30 LA-Y1, Tanegashima Space Center, Japan
        </span>
        <span
          className=" mx-2 mt-1 font-semibold text-[#1805f0] cursor-pointer"
          onClick={() => {
            alert("WE WILL SHOW DETAILS HERE");
          }}
        >
          Details
        </span>
      </div>
      <div className="bg-[#f1f2f5] pb-3 w-[320px] shadow-2xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <div className=" relative">
          <img
            alt="articalIcon"
            className="h-[230px] w-[400px] rounded-t-xl resize-none object-bottom"
            src="https://storage.googleapis.com/nextspaceflight/media/rockets/launcher1_nhrtUnI.jpg"
          />
          <span className="absolute top-4 right-4  bg-[#2fe31b] px-6 py-1 rounded-2xl opacity-70 text-white font-semibold animate-pulse">
            CASC
          </span>
        </div>
        <span className=" m-1 font-bold text-l text-gray-700">
          Falcon 9 Block 5 | Starlink Group 6-35
        </span>
        <div className="w-full h-[1px] bg-zinc-300 mt-[5px]"></div>
        <span className="mx-2 mt-1 font-extralight text-[13px]">
          Thu Jan 11, 2024 09:30 GMT+5:30 LA-Y1, Tanegashima Space Center, Japan
        </span>
        <span
          className=" mx-2 mt-1 font-semibold text-[#1805f0] cursor-pointer"
          onClick={() => {
            alert("WE WILL SHOW DETAILS HERE");
          }}
        >
          Details
        </span>
      </div>
      <div className="bg-[#f1f2f5] pb-3 w-[320px] shadow-2xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <div className=" relative">
          <img
            alt="articalIcon"
            className="h-[230px] w-[400px] rounded-t-xl resize-none object-bottom"
            src="https://storage.googleapis.com/nextspaceflight/media/rockets/Vulcan_VC2.jpg"
          />
          <span className="absolute top-4 right-4  bg-[#2fe31b] px-6 py-1 rounded-2xl opacity-70 text-white font-semibold animate-pulse">
            Rocket Lab
          </span>
        </div>
        <span className=" m-1 font-bold text-l text-gray-700">
          Falcon 9 Block 5 | Starlink Group 6-35
        </span>
        <div className="w-full h-[1px] bg-zinc-300 mt-[5px]"></div>
        <span className="mx-2 mt-1 font-extralight text-[13px]">
          Thu Jan 11, 2024 09:30 GMT+5:30 LA-Y1, Tanegashima Space Center, Japan
        </span>
        <span
          className=" mx-2 mt-1 font-semibold text-[#1805f0] cursor-pointer"
          onClick={() => {
            alert("WE WILL SHOW DETAILS HERE");
          }}
        >
          Details
        </span>
      </div>
      <div className="bg-[#f1f2f5] pb-3 w-[320px] shadow-2xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <div className=" relative">
          <img
            alt="articalIcon"
            className="h-[230px] w-[400px] rounded-t-xl resize-none object-bottom"
            src="https://storage.googleapis.com/nextspaceflight/media/rockets/Vulcan_VC2.jpg"
          />
          <span className="absolute top-4 right-4  bg-[#2fe31b] px-6 py-1 rounded-2xl opacity-70 text-white font-semibold animate-pulse">
            Rocket Lab
          </span>
        </div>
        <span className=" m-1 font-bold text-l text-gray-700">
          Falcon 9 Block 5 | Starlink Group 6-35
        </span>
        <div className="w-full h-[1px] bg-zinc-300 mt-[5px]"></div>
        <span className="mx-2 mt-1 font-extralight text-[13px]">
          Thu Jan 11, 2024 09:30 GMT+5:30 LA-Y1, Tanegashima Space Center, Japan
        </span>
        <span
          className=" mx-2 mt-1 font-semibold text-[#1805f0] cursor-pointer"
          onClick={() => {
            alert("WE WILL SHOW DETAILS HERE");
          }}
        >
          Details
        </span>
      </div>
      <div className="bg-[#f1f2f5] pb-3 w-[320px] shadow-2xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <div className=" relative">
          <img
            alt="articalIcon"
            className="h-[230px] w-[400px] rounded-t-xl resize-none object-bottom"
            src="https://storage.googleapis.com/nextspaceflight/media/rockets/Ariane_64.jpg"
          />
          <span className="absolute top-4 right-4  bg-[#2fe31b] px-6 py-1 rounded-2xl opacity-70 text-white font-semibold animate-pulse">
            Rocket Lab
          </span>
        </div>
        <span className=" m-1 font-bold text-l text-gray-700">
          Falcon 9 Block 5 | Starlink Group 6-35
        </span>
        <div className="w-full h-[1px] bg-zinc-300 mt-[5px]"></div>
        <span className="mx-2 mt-1 font-extralight text-[13px]">
          Thu Jan 11, 2024 09:30 GMT+5:30 LA-Y1, Tanegashima Space Center, Japan
        </span>
        <span
          className=" mx-2 mt-1 font-semibold text-[#1805f0] cursor-pointer"
          onClick={() => {
            alert("WE WILL SHOW DETAILS HERE");
          }}
        >
          Details
        </span>
      </div>
      <div className="bg-[#f1f2f5] pb-3 w-[320px] shadow-2xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <div className=" relative">
          <img
            alt="articalIcon"
            className="h-[230px] w-[400px] rounded-t-xl resize-none object-bottom"
            src="https://storage.googleapis.com/nextspaceflight/media/rockets/launcher1_nhrtUnI.jpg"
          />
          <span className="absolute top-4 right-4  bg-[#2fe31b] px-6 py-1 rounded-2xl opacity-70 text-white font-semibold animate-pulse">
            Rocket Lab
          </span>
        </div>
        <span className=" m-1 font-bold text-l text-gray-700">
          Falcon 9 Block 5 | Starlink Group 6-35
        </span>
        <div className="w-full h-[1px] bg-zinc-300 mt-[5px]"></div>
        <span className="mx-2 mt-1 font-extralight text-[13px]">
          Thu Jan 11, 2024 09:30 GMT+5:30 LA-Y1, Tanegashima Space Center, Japan
        </span>
        <span
          className=" mx-2 mt-1 font-semibold text-[#1805f0] cursor-pointer"
          onClick={() => {
            alert("WE WILL SHOW DETAILS HERE");
          }}
        >
          Details
        </span>
      </div>
      <div className="bg-[#f1f2f5] pb-3 w-[320px] shadow-2xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <div className=" relative">
          <img
            alt="articalIcon"
            className="h-[230px] w-[400px] rounded-t-xl resize-none object-bottom"
            src="https://storage.googleapis.com/nextspaceflight/media/rockets/Vulcan_VC2.jpg"
          />
          <span className="absolute top-4 right-4  bg-[#2fe31b] px-6 py-1 rounded-2xl opacity-70 text-white font-semibold animate-pulse">
            Blue Origin
          </span>
        </div>
        <span className=" m-1 font-bold text-l text-gray-700">
          Falcon 9 Block 5 | Starlink Group 6-35
        </span>
        <div className="w-full h-[1px] bg-zinc-300 mt-[5px]"></div>
        <span className="mx-2 mt-1 font-extralight text-[13px]">
          Thu Jan 11, 2024 09:30 GMT+5:30 LA-Y1, Tanegashima Space Center, Japan
        </span>
        <span
          className=" mx-2 mt-1 font-semibold text-[#1805f0] cursor-pointer"
          onClick={() => {
            alert("WE WILL SHOW DETAILS HERE");
          }}
        >
          Details
        </span>
      </div>
      <div className="bg-[#f1f2f5] pb-3 w-[320px] shadow-2xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <div className=" relative">
          <img
            alt="articalIcon"
            className="h-[230px] w-[400px] rounded-t-xl resize-none object-bottom"
            src="https://storage.googleapis.com/nextspaceflight/media/rockets/Vulcan_VC2.jpg"
          />
          <span className="absolute top-4 right-4  bg-[#2fe31b] px-6 py-1 rounded-2xl opacity-70 text-white font-semibold animate-pulse">
            NASA
          </span>
        </div>
        <span className=" m-1 font-bold text-l text-gray-700">
          Falcon 9 Block 5 | Starlink Group 6-35
        </span>
        <div className="w-full h-[1px] bg-zinc-300 mt-[5px]"></div>
        <span className="mx-2 mt-1 font-extralight text-[13px]">
          Thu Jan 11, 2024 09:30 GMT+5:30 LA-Y1, Tanegashima Space Center, Japan
        </span>
        <span
          className=" mx-2 mt-1 font-semibold text-[#1805f0] cursor-pointer"
          onClick={() => {
            alert("WE WILL SHOW DETAILS HERE");
          }}
        >
          Details
        </span>
      </div>
      <div className="bg-[#f1f2f5] pb-3 w-[320px] shadow-2xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <div className=" relative">
          <img
            alt="articalIcon"
            className="h-[230px] w-[400px] rounded-t-xl resize-none object-bottom"
            src="https://storage.googleapis.com/nextspaceflight/media/rockets/Vulcan_VC2.jpg"
          />
          <span className="absolute top-4 right-4  bg-[#2fe31b] px-6 py-1 rounded-2xl opacity-70 text-white font-semibold animate-pulse">
            Roscosmos
          </span>
        </div>
        <span className=" m-1 font-bold text-l text-gray-700">
          Falcon 9 Block 5 | Starlink Group 6-35
        </span>
        <div className="w-full h-[1px] bg-zinc-300 mt-[5px]"></div>
        <span className="mx-2 mt-1 font-extralight text-[13px]">
          Thu Jan 11, 2024 09:30 GMT+5:30 LA-Y1, Tanegashima Space Center, Japan
        </span>
        <span
          className=" mx-2 mt-1 font-semibold text-[#1805f0] cursor-pointer"
          onClick={() => {
            alert("WE WILL SHOW DETAILS HERE");
          }}
        >
          Details
        </span>
      </div>
      <div className="bg-[#f1f2f5] pb-3 w-[320px] shadow-2xl mt-[16px] rounded-xl flex flex-col mx-[40px]">
        <div className=" relative">
          <img
            alt="articalIcon"
            className="h-[230px] w-[400px] rounded-t-xl resize-none object-bottom"
            src="https://storage.googleapis.com/nextspaceflight/media/rockets/Ariane_64.jpg"
          />
          <span className="absolute top-4 right-4  bg-[#2fe31b] px-6 py-1 rounded-2xl opacity-70 text-white font-semibold animate-pulse">
            ISRO
          </span>
        </div>
        <span className=" m-1 font-bold text-l text-gray-700">
          Falcon 9 Block 5 | Starlink Group 6-35
        </span>
        <div className="w-full h-[1px] bg-zinc-300 mt-[5px]"></div>
        <span className="mx-2 mt-1 font-extralight text-[13px]">
          Thu Jan 11, 2024 09:30 GMT+5:30 LA-Y1, Tanegashima Space Center, Japan
        </span>
        <span
          className=" mx-2 mt-1 font-semibold text-[#1805f0] cursor-pointer"
          onClick={() => {
            alert("WE WILL SHOW DETAILS HERE");
          }}
        >
          Details
        </span>
      </div>
    </div>
  );
};

export default Launches;
