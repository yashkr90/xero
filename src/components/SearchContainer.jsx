import { FunctionComponent } from "react";

const imgsrc = [
  "/notifications.svg",
  "/mail-outline-black-24dp-1.svg",
  "/settings.svg",
];

const SearchContainer = () => {
  return (
    <div className=" w-full h-[58px] text-right ">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center rounded-11xl bg-whitesmoke-100 shadow-[5px_5px_10px_rgba(0,_0,_0,_0.1)] box-border w-[354px] h-[58px] border-[1px] border-solid border-gainsboro">
          <input
            type="text"
            className=" ml-7 border-none bg-transparent outline-none placeholder-gray-200 placeholder:leading-[125%] placeholder:text-lg text-lg placeholder:font-semibold placeholder:  text-left items-center w-[87px] h-[29px]"
            placeholder="Search"
          />

          <button className="flex justify-center items-center rounded-11xl bg-royalblue w-[70px] h-[54px] hover:cursor-pointer hover:bg-blue-600">
            <img
              className=" w-7 h-7 overflow-hidden"
              alt=""
              src="/iconinfo.svg"
            />
          </button>
        </div>

        <div className="flex gap-6">
          <div className="flex justify-evenly items-center hover:cursor-pointer hover:bg-yellow-400 rounded-11xl bg-goldenrod shadow-[5px_5px_10px_rgba(0,_0,_0,_0.1)] box-border w-[166px] h-[50px] border-[1px] border-solid border-orange">
            <div className="flex justify-center items-center  rounded-6xl bg-whitesmoke-100 shadow-[5px_5px_10px_rgba(0,_0,_0,_0.1)] w-10 h-10 ">
              <img
                className=" w-6 h-6 overflow-hidden"
                alt=""
                src="/iconinfo1.svg"
              />
            </div>
            <div className=" text-base text-gray-300 font-nunito">Upgrade Plan</div>
          </div>

          {imgsrc.map((item, idx) => {
            return (
              <button className="flex justify-center items-center hover:cursor-pointer hover:bg-sky-200  rounded-3xs bg-whitesmoke-100 shadow-[5px_5px_10px_rgba(0,_0,_0,_0.1)] w-[50px] h-[50px]">
                <img className=" w-8 h-8 overflow-hidden" alt="" src={item} />
              </button>
            );
          })}

          <div className=" mb-2 flex items-center justify-center">
            <div className=" flex items-center">XeroCodee</div>

            <img
              className=" w-6 h-6 overflow-hidden"
              alt=""
              src="/expand-more-black-24dp-1.svg"
            />
          </div>
          <div className="flex justify-center items-center hover:cursor-pointer hover:bg-sky-200 rounded-3xs bg-whitesmoke-100 shadow-[5px_5px_10px_rgba(0,_0,_0,_0.1)] w-[50px] h-[50px]">
            <img
              className=" w-8 h-8 overflow-hidden"
              alt=""
              src="/iconinfo2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
