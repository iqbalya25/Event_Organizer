"use client";
import React, { useState } from "react";

interface BoothState {
  A1: boolean;
  A2: boolean;
  A3: boolean;
  A4: boolean;
  A5: boolean;
  A6: boolean;
  B1: boolean;
  B2: boolean;
  B3: boolean;
  B4: boolean;
  B5: boolean;
  B6: boolean;
}

const initialBooths: BoothState = {
  A1: true,
  A2: true,
  A3: true,
  A4: true,
  A5: true,
  A6: true,
  B1: true,
  B2: true,
  B3: true,
  B4: true,
  B5: true,
  B6: true,
};

const HallBSetting: React.FC = () => {
  const [booths, setBooths] = useState<BoothState>(initialBooths);
  const [saved, setSaved] = useState(false);

  const handleBoothClick = (booth: keyof BoothState) => {
    setBooths({ ...booths, [booth]: !booths[booth] });
  };

  const handleSave = () => {
    setSaved(true);
  };

  return (
    <div className="overflow-x-scroll">
      {!saved ? (
        <div className="flex flex-col ml-5 lg:items-center my-8">
          <div className="w-[56rem] p-4 mb-8 border border-gray-300 bg-white shadow-lg relative ">
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
            <div className="absolute left-1/4 bottom-0 transform translate-y-1/2 flex">
              <div className="px-2 py-1 bg-blue-500 text-white rounded-l">
                Entrance
              </div>
              <div className="px-2 py-1 bg-red-500 text-white rounded-r ml-2">
                Exit
              </div>
            </div>
            <div className="absolute right-1/4 bottom-0 transform translate-y-1/2 flex">
              <div className="px-2 py-1 bg-blue-500 text-white rounded-l">
                Entrance
              </div>
              <div className="px-2 py-1 bg-red-500 text-white rounded-r ml-2">
                Exit
              </div>
            </div>
            {/* Sections */}
            <div className="flex justify-around">
              {/* Section 1 */}
              <div className="flex flex-col items-center">
                <div className="flex mb-4">
                  <div className="font-bold mr-8 flex items-center">
                    Block A
                  </div>
                  <div className="flex">
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.A1
                          ? "bg-gray-200 hover:bg-gray-400"
                          : "bg-red-500"
                      } mr-4 cursor-pointer`}
                      onClick={() => handleBoothClick("A1")}
                    >
                      A1
                    </div>
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.A2
                          ? "bg-gray-200 hover:bg-gray-400"
                          : "bg-red-500"
                      } mr-4 cursor-pointer`}
                      onClick={() => handleBoothClick("A2")}
                    >
                      A2
                    </div>
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.A3
                          ? "bg-gray-200 hover:bg-gray-400"
                          : "bg-red-500"
                      } cursor-pointer`}
                      onClick={() => handleBoothClick("A3")}
                    >
                      A3
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="font-bold mr-8 flex items-center">
                    Block B
                  </div>
                  <div className="flex">
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.B1
                          ? "bg-gray-200 hover:bg-gray-400"
                          : "bg-red-500"
                      } mr-4 cursor-pointer`}
                      onClick={() => handleBoothClick("B1")}
                    >
                      B1
                    </div>
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.B2
                          ? "bg-gray-200 hover:bg-gray-400"
                          : "bg-red-500"
                      } mr-4 cursor-pointer`}
                      onClick={() => handleBoothClick("B2")}
                    >
                      B2
                    </div>
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.B3
                          ? "bg-gray-200 hover:bg-gray-400"
                          : "bg-red-500"
                      } cursor-pointer`}
                      onClick={() => handleBoothClick("B3")}
                    >
                      B3
                    </div>
                  </div>
                </div>
              </div>
              {/* Section 2 */}
              <div className="flex flex-col items-center">
                <div className="flex mb-4">
                  <div className="font-bold mr-8 flex items-center">
                    Block A
                  </div>
                  <div className="flex">
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.A4
                          ? "bg-gray-200 hover:bg-gray-400"
                          : "bg-red-500"
                      } mr-4 cursor-pointer`}
                      onClick={() => handleBoothClick("A4")}
                    >
                      A4
                    </div>
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.A5
                          ? "bg-gray-200 hover:bg-gray-400"
                          : "bg-red-500"
                      } mr-4 cursor-pointer`}
                      onClick={() => handleBoothClick("A5")}
                    >
                      A5
                    </div>
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.A6
                          ? "bg-gray-200 hover:bg-gray-400"
                          : "bg-red-500"
                      } cursor-pointer`}
                      onClick={() => handleBoothClick("A6")}
                    >
                      A6
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="font-bold mr-8 flex items-center">
                    Block B
                  </div>
                  <div className="flex">
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.B4
                          ? "bg-gray-200 hover:bg-gray-400"
                          : "bg-red-500"
                      } mr-4 cursor-pointer`}
                      onClick={() => handleBoothClick("B4")}
                    >
                      B4
                    </div>
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.B5
                          ? "bg-gray-200 hover:bg-gray-400"
                          : "bg-red-500"
                      } mr-4 cursor-pointer`}
                      onClick={() => handleBoothClick("B5")}
                    >
                      B5
                    </div>
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.B6
                          ? "bg-gray-200 hover:bg-gray-400"
                          : "bg-red-500"
                      } cursor-pointer`}
                      onClick={() => handleBoothClick("B6")}
                    >
                      B6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Layout
          </button>
        </div>
      ) : (
        <div className="flex flex-col ml-5 lg:items-center my-8">
          <div className="w-[56rem] p-4 mb-8 border border-gray-300 bg-white shadow-lg relative ">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Hall B - Saved Layout
            </h2>
            {/* Sections */}
            <div className="flex justify-around">
              {/* Section 1 */}
              <div className="flex flex-col items-center">
                <div className="flex mb-4">
                  <div className="font-bold mr-8 flex items-center">
                    Block A
                  </div>
                  <div className="flex">
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.A1 ? "bg-gray-200" : "bg-red-500"
                      } mr-4`}
                    >
                      A1
                    </div>
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.A2 ? "bg-gray-200" : "bg-red-500"
                      } mr-4`}
                    >
                      A2
                    </div>
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.A3 ? "bg-gray-200" : "bg-red-500"
                      }`}
                    >
                      A3
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="font-bold mr-8 flex items-center">
                    Block B
                  </div>
                  <div className="flex">
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.B1 ? "bg-gray-200" : "bg-red-500"
                      } mr-4`}
                    >
                      B1
                    </div>
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.B2 ? "bg-gray-200" : "bg-red-500"
                      } mr-4`}
                    >
                      B2
                    </div>
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.B3 ? "bg-gray-200" : "bg-red-500"
                      }`}
                    >
                      B3
                    </div>
                  </div>
                </div>
              </div>
              {/* Section 2 */}
              <div className="flex flex-col items-center">
                <div className="flex mb-4">
                  <div className="font-bold mr-8 flex items-center">
                    Block A
                  </div>
                  <div className="flex">
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.A4 ? "bg-gray-200" : "bg-red-500"
                      } mr-4`}
                    >
                      A4
                    </div>
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.A5 ? "bg-gray-200" : "bg-red-500"
                      } mr-4`}
                    >
                      A5
                    </div>
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.A6 ? "bg-gray-200" : "bg-red-500"
                      }`}
                    >
                      A6
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="font-bold mr-8 flex items-center">
                    Block B
                  </div>
                  <div className="flex">
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.B4 ? "bg-gray-200" : "bg-red-500"
                      } mr-4`}
                    >
                      B4
                    </div>
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.B5 ? "bg-gray-200" : "bg-red-500"
                      } mr-4`}
                    >
                      B5
                    </div>
                    <div
                      className={`w-16 h-16 border flex items-center justify-center ${
                        booths.B6 ? "bg-gray-200" : "bg-red-500"
                      }`}
                    >
                      B6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HallBSetting;
