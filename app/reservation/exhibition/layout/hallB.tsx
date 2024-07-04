import React from "react";

const HallBLayout = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <div className="w-full max-w-4xl p-4 mb-8 border border-gray-300 bg-white shadow-lg relative">
        <h2 className="text-2xl font-bold mb-4 text-center">Hall B</h2>
        {/* Top Doors */}
        <div className="absolute left-1/4 top-0 transform -translate-y-1/2 flex">
          <div className="px-2 py-1 bg-blue-500 text-white rounded-l">
            Entrance
          </div>
          <div className="px-2 py-1 bg-red-500 text-white rounded-r ml-2">
            Exit
          </div>
        </div>
        <div className="absolute right-1/4 top-0 transform -translate-y-1/2 flex">
          <div className="px-2 py-1 bg-blue-500 text-white rounded-l">
            Entrance
          </div>
          <div className="px-2 py-1 bg-red-500 text-white rounded-r ml-2">
            Exit
          </div>
        </div>
        {/* Bottom Doors */}
        <div className="absolute right-1/4 bottom-0 transform translate-y-1/2 flex">
          <div className="px-2 py-1 bg-blue-500 text-white rounded-l">
            Entrance
          </div>
          <div className="px-2 py-1 bg-red-500 text-white rounded-r ml-2">
            Exit
          </div>
        </div>
        <div className="absolute left-1/4 bottom-0 transform translate-y-1/2 flex">
          <div className="px-2 py-1 bg-blue-500 text-white rounded-l">
            Entrance
          </div>
          <div className="px-2 py-1 bg-red-500 text-white rounded-r ml-2">
            Exit
          </div>
        </div>
        {/* Blocks and Booths */}
        <div className="flex justify-around">
          {/* Section 1 */}
          <div className="flex flex-col items-center">
            <div className="flex mb-4">
              <div className="font-bold mr-8 flex items-center">Block A</div>
              <div className="flex">
                <div className="w-16 h-16 border flex items-center justify-center bg-gray-200 mr-4">
                  A1
                </div>
                <div className="w-16 h-16 border flex items-center justify-center bg-gray-200 mr-4">
                  A2
                </div>
                <div className="w-16 h-16 border flex items-center justify-center bg-gray-200">
                  A3
                </div>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="font-bold mr-8 flex items-center">Block B</div>
              <div className="flex">
                <div className="w-16 h-16 border flex items-center justify-center bg-gray-200 mr-4">
                  B1
                </div>
                <div className="w-16 h-16 border flex items-center justify-center bg-gray-200 mr-4">
                  B2
                </div>
                <div className="w-16 h-16 border flex items-center justify-center bg-gray-200">
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
                <div className="w-16 h-16 border flex items-center justify-center bg-gray-200 mr-4">
                  A4
                </div>
                <div className="w-16 h-16 border flex items-center justify-center bg-gray-200 mr-4">
                  A5
                </div>
                <div className="w-16 h-16 border flex items-center justify-center bg-gray-200">
                  A6
                </div>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="font-bold mr-8 flex items-center">Block B</div>
              <div className="flex">
                <div className="w-16 h-16 border flex items-center justify-center bg-gray-200 mr-4">
                  B4
                </div>
                <div className="w-16 h-16 border flex items-center justify-center bg-gray-200 mr-4">
                  B5
                </div>
                <div className="w-16 h-16 border flex items-center justify-center bg-gray-200">
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

export default HallBLayout;
