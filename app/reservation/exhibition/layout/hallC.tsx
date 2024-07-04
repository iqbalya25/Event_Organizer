import React from "react";

const HallCLayout = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <div className="w-full max-w-4xl p-4 mb-8 border border-gray-300 bg-white shadow-lg relative">
        <h2 className="text-2xl font-bold mb-4 text-center">Hall C</h2>

        {/* Left Door */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 flex flex-col gap-14">
          <div className="px-2 py-1 bg-blue-500 text-white rounded-l transform rotate-90">
            Entrance
          </div>
          <div className="px-2 py-1 bg-red-500 text-white rounded-r transform rotate-90 mt-1">
            Exit
          </div>
        </div>
        {/* Right Door */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 flex flex-col gap-14">
          <div className="px-2 py-1 bg-blue-500 text-white rounded-l transform rotate-90">
            Entrance
          </div>
          <div className="px-2 py-1 bg-red-500 text-white rounded-r transform rotate-90 mt-1">
            Exit
          </div>
        </div>
        {/* Sections */}
        <div className="flex justify-around">
          {/* Section 1 */}
          <div className="flex flex-col items-center">
            <div className="flex mb-4">
              <div className="font-bold mr-8 flex items-center">Block A</div>
              <div className="flex">
                <div className="w-12 h-12 border flex items-center justify-center bg-gray-200 mr-4">
                  A1
                </div>
                <div className="w-12 h-12 border flex items-center justify-center bg-gray-200 mr-4">
                  A2
                </div>
                <div className="w-12 h-12 border flex items-center justify-center bg-gray-200">
                  A3
                </div>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="font-bold mr-8 flex items-center">Block B</div>
              <div className="flex">
                <div className="w-12 h-12 border flex items-center justify-center bg-gray-200 mr-4">
                  B1
                </div>
                <div className="w-12 h-12 border flex items-center justify-center bg-gray-200 mr-4">
                  B2
                </div>
                <div className="w-12 h-12 border flex items-center justify-center bg-gray-200">
                  B3
                </div>
              </div>
            </div>
          </div>
          {/* Section 2 */}
          <div className="flex flex-col items-center">
            <div className="flex mb-4">
              <div className="font-bold mr-8 flex items-center">Block A</div>
              <div className="flex">
                <div className="w-12 h-12 border flex items-center justify-center bg-gray-200 mr-4">
                  A4
                </div>
                <div className="w-12 h-12 border flex items-center justify-center bg-gray-200 mr-4">
                  A5
                </div>
                <div className="w-12 h-12 border flex items-center justify-center bg-gray-200">
                  A6
                </div>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="font-bold mr-8 flex items-center">Block B</div>
              <div className="flex">
                <div className="w-12 h-12 border flex items-center justify-center bg-gray-200 mr-4">
                  B4
                </div>
                <div className="w-12 h-12 border flex items-center justify-center bg-gray-200 mr-4">
                  B5
                </div>
                <div className="w-12 h-12 border flex items-center justify-center bg-gray-200">
                  B6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallCLayout;
