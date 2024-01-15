import React from "react";

const LaunchDetails = () => {
  return (
    <div className="bg-gradient-to-tl h-screen from-black via-gray-700 to-black py-6 shadow-lg flex flex-col overflow-y-auto">
      <div className=" text-2xl my text-cyan-50 mx-[202px] my-5 justify-center">
        Status
      </div>
      <div className=" bg-white mx-[200px] shadow-lg rounded-xl shadow-[#f3f5f5] p-4 flex flex-col border-[1px] border-cyan-400">
        <span className=" text-2xl text-gray-600">Axiom Mission 3 (AX-3)</span>
        <span className=" text-l font-extrabold text-gray-900 pt-2">
          Launch Time
        </span>
        <span className=" font-light text-gray-400 text-sm">
          Thu Jan 18, 2024 03:41 GMT+5:30
        </span>
      </div>
      <div className=" text-2xl my text-cyan-50 mx-[202px] my-5 justify-center">
        Rocket
      </div>
      <div className=" bg-white mx-[200px] shadow-lg rounded-xl shadow-[#f3f5f5] flex border-[1px] border-cyan-400 ">
        <img
          alt="launch-details"
          src="https://storage.googleapis.com/nextspaceflight/media/rockets/Block_5.jpg"
          className=" w-[220px] rounded-tl-xl rounded-bl-xl"
        />
        <div className=" flex flex-col p-2 justify-between">
          <div className="flex flex-row mx-2 w-full justify-stretch m-4">
            <div className="flex flex-grow align-middle space-x-4">
              <span className=" text-gray-600 text-[14px] font-semibold">
                Name: Spacex
              </span>
              <span className="text-gray-600 text-[14px] font-semibold">
                Status: Active
              </span>
              <span className="text-gray-600 text-[14px] font-semibold">
                Price: $67.0 million
              </span>
            </div>
          </div>
          <div className="flex flex-row mx-2 w-full justify-stretch m-4">
            <div className="flex flex-grow align-middle space-x-4">
              <span className="text-gray-600 text-[14px] font-semibold">
                Payload to LEO: 22,800 kg
              </span>
              <span className="text-gray-600 text-[14px] font-semibold">
                Stages: 2
              </span>
              <span className="text-gray-600 text-[14px] font-semibold">
                Strap-ons: 0
              </span>
            </div>
          </div>
          <div className="flex flex-row mx-2 w-full justify-stretch m-4">
            <div className="flex flex-grow align-middle space-x-4">
              <span className="text-gray-600 text-[14px] font-semibold">
                Rocket Height: 70.0 m
              </span>
              <span className="text-gray-600 text-[14px] font-semibold">
                Fairing Height: 13.0 m
              </span>
              <span className="text-gray-600 text-[14px] font-semibold">
                Fairing Diameter: 5.2 m
              </span>
            </div>
          </div>
          <div className="flex flex-row mx-2 w-full justify-stretch m-4">
            <div className="flex flex-grow align-middle space-x-4">
              <span className="text-gray-600 text-[14px] font-semibold">
                Liftoff Thrust: 7,607 kN
              </span>
              <span className="text-gray-600 text-[14px] font-semibold">
                Location: LC-39A, Kennedy Space Center, Florida, USA
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-2xl my text-cyan-50 mx-[202px] my-5 justify-center">
        Mission Details
      </div>
      <div className=" bg-white mx-[200px] shadow-lg rounded-xl shadow-[#f3f5f5] p-4 flex flex-col border-[1px] border-cyan-400">
        <span className=" text-2xl text-gray-600">Axiom Mission 3 (AX-3)</span>
        <span className=" text-[16px] text-gray-500 mt-1">
          AX-3 is Axiom Space's third private crew rotation to the International
          Space Station aboard a SpaceX Crew Dragon spacecraft. The crew
          consists of commander and former NASA astronaut Michael López-Alegría,
          pilot Col. Walter Villadei of the Italian Air Force, Turkish mission
          specialist Alper Gezeravci and ESA astronaut Marcus Wandt of Sweden
        </span>
        <span className=" font-light text-gray-400 my-4  uppercase">
          Low earth orbit
        </span>
      </div>
      <div className=" text-2xl my text-cyan-50 mx-[202px] my-5 justify-center">
        Stats
      </div>
      <div className=" flex flex-col mx-[200px]">
        <div className=" bg-white shadow-2xl  shadow-[#f3f5f5] flex border-[1px] border-cyan-400 p-4 rounded-xl flex-col">
          <span className=" text-xl text-gray-600">2024</span>
          <span className="text-[14px] text-gray-500 pt-4">
            14th oribit launch attemt
          </span>
        </div>
      </div>
      <div className=" flex flex-col mx-[200px] mt-2">
        <div className=" bg-white shadow-2xl  shadow-[#f3f5f5] flex border-[1px] border-cyan-400 p-4 rounded-xl flex-col">
          <span className=" text-xl text-gray-600">SpaceX</span>
          <div className=" flex justify-between  pt-4">
            <span className="text-[14px] text-gray-500 me-[200px]">
              306th mission
            </span>
            <span className="text-[14px] text-gray-500">
              6th mission of 2024
            </span>
          </div>
        </div>
      </div>
      <div className=" flex flex-col mx-[200px] mt-2">
        <div className=" bg-white shadow-2xl  shadow-[#f3f5f5] flex border-[1px] border-cyan-400 p-4 rounded-xl flex-col">
          <span className=" text-xl text-gray-600">Falcon 9</span>
          <div className=" flex justify-between">
            <span className="text-[14px] text-gray-500 me-[200px]">
              292nd mission
            </span>
            <span className="text-[14px] text-gray-500">
              6th mission of 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchDetails;
