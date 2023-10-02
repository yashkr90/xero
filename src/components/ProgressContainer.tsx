import React, { useState } from "react";
import Logos from "./Logos";
import CircularWithValueLabel from "./ProgressBar";
import { displayStepAtom } from "../lib/store.js";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import ImgAndStyle from "../lib/ImgAndStyle.js";

const cardItems = [
  {
    Name: "AWS",
    stepid: 1,
    status: true,
  },
  {
    Name: "",
    stepid: 2,
    status: false,
  },
  {
    Name: "",
    stepid: 3,
    status: false,
  },
];

const ProgressContainer = () => {
  const [displayStep, setDisplayStep] = useAtom(displayStepAtom);
  // const stepid = 2;
  // const [displayStep, setDisplayStep] = useState({
  //   1: true,
  //   2: true,
  //   3: false,
  // });

  return (
    <div className=" w-96 h-[708px] px-3 pb-3 pt-5 text-left text-sm text-gray-200 font-nunito rounded-mini bg-white shadow-[7px_7px_10px_rgba(0,_0,_0,_0.1)] box-border  border-[1px] border-solid border-gray-500">
      <div className="flex flex-col items-center h-full gap-14">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-neutral-950">
              Your progress
            </div>
            <div className="text-sm text-gray-100 font-semibold">
              towards Xerocodee
            </div>
          </div>

          <CircularWithValueLabel />

          <div className="rounded-xl bg-white py-2 px-5 shadow-[4px_4px_6px_rgba(0,_0,_0,_0.1)]">
            <div className=" mix-blend-normal text-sm font-semibold">
              View details
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-24">
          {displayStep.map((carditem) => {
            return (
              <div className=" flex flex-col gap-2.5">
                <div className="text-gray-700 text-base ">
                  Step {carditem.stepid}
                </div>
                <div className="relative">
                  {carditem.status ? (
                    <>
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute w-full"
                      >
                        {carditem.Name == "" ? (
                          ""
                        ) : (
                          <ContainerCard Name={carditem.Name} />
                        )}
                      </motion.div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ContainerCard = ({ Name }) => {
  return (
    <div
      className={`flex rounded-3xs p-3  ${ImgAndStyle[Name].bgcol}  shadow-[5px_5px_10px_rgba(0,_0,_0,_0.1)] box-border w-full   items-center justify-between`}
    >
      <div className="flex flex-col gap-2">
        <div className="font-bold text-lg text-neutral-950 font-nunito">
          {Name}
        </div>
        <div className="font-semibold text-gray-100">Status: Complete</div>
      </div>
      <div className="flex">
        <Logo Name={Name}/>
        <div className="flex flex-col">
          <div>.</div>
          <div>.</div>
          <div>.</div>
        </div>
      </div>
    </div>
  );
};

const Logo = ({Name}) => {
  return (
    <div
      className={`flex rounded-3xs bg-white box-border w-14 h-14 border-[1px] border-solid  justify-center items-center`}
    >
      <img
        src={`${ImgAndStyle[Name].imgsrc}`}
        alt="logos"
        className="w-9 h-9 object-contain"
      />
    </div>
  );
};

export default ProgressContainer;
