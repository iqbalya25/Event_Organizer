import React from "react";
import SmallButton from "../components/Button/smallButton";
import SpeakerCard from "../components/Card/speakerCard";
const EventOrganizerSection: React.FC = () => {
  return (
    <div className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[132px] bg-white">
      <div className="flex flex-col items-center">
        <div className="font-bold text-4xl text-black">Organizer</div>
        <div className="flex mt-4 p-4 w-full overflow-scroll">
          <div className="w-1/5">ini logo</div>
          <div className="w-1/4 flex flex-col text-lg text-black">
            <h4 className="text-lg text-black">company name</h4>
            <div className="h-auto font-light">
              <p>address</p>
            </div>
            <div className="h-auto font-light">
              <p>city</p>
            </div>
            <div className="h-auto font-light">
              <p>Phone: phonenumber</p>
            </div>
            <div className="h-auto font-light mb-1">
              <p>website url</p>
            </div>
            <div className="flex p-1 w-5/6 border rounded-full ">
              <div className="w-1/2 flex items-center justify-center">
                <SmallButton
                  textColor="text-white"
                  textColorHover="text-white"
                  backgroundColor="bg-red-600"
                  backgroundHoverColor="bg-black"
                  borderColor="border-transparent"
                  borderHoverColor="bg-black"
                  title={"Sent E-mail"}
                  linkbutton={""}
                />
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <SmallButton
                  textColor="text-red-600"
                  textColorHover="text-white"
                  backgroundColor="bg-white"
                  backgroundHoverColor="bg-red-600"
                  borderColor="border-red-400"
                  borderHoverColor="border-transparent"
                  title="Website"
                  linkbutton="/"
                />
              </div>
            </div>
          </div>
          <div className="w-1/4 text-black">
            <h4 className="text-lg">contact name</h4>
            <div className="h-auto font-light">
              <p>address</p>
            </div>
            <div className="h-auto font-light">
              <p>city</p>
            </div>
            <div className="h-auto font-light">
              <p>Phone: phonenumber</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventOrganizerSection;
