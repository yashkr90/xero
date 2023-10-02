import React, { useState } from "react";
import ServiceCards from "./ServiceCards";
import { displayStepAtom, progressAtom, stepStatesAtom } from "../lib/store.js";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { motion } from "framer-motion";

const stepper = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

const MyStepper = () => {
  const [stepStates, setStepStates] = useAtom(stepStatesAtom);

  const [displayStep, setDisplayStep] = useAtom(displayStepAtom);

  const setProgress = useSetAtom(progressAtom);

  
  // const [stepStates, setStepStates] = useState({
  //   1: true,
  //   2: false,
  //   3: false,
  // });

  const handleStateChange = (option, id) => {
    console.log(option);
    console.log(id);
    // Set the fill state for next step to true to true
    console.log(stepStates.size);
    const nextid = id < Object.keys(stepStates).length ? id + 1 : id;
    console.log("nextid", nextid);

    //fill the stepper colour
    setStepStates((prevState) => ({
      ...prevState,
      [nextid]: true,
    }));

    setProgress((prevProgress) => {

      if(id==1)return 40
      else if(id==2)return 80
      else
      return 100
      
    });

    const newdisplayStep=  displayStep.map((item)=>{

        if(item.stepid===id)
        return{... item,status:true,Name:option}

        return {...item};
      })

      setDisplayStep((prev)=>{
        return newdisplayStep;
      })

    // setDisplayStep((prev) => ({
    //   ...prev,
    //   [id]: true,
    // }));
  };


  return (
    <>
      {/* <button onClick={handleStateChange}>Change State</button> */}
      <div>
        {stepper.map((step) => (
          <Step
            key={step.id}
            id={step.id}
            fillHeight={displayStep[step.id]}
            stepStates={stepStates}
            handleStateChange={handleStateChange}
            setStepStates={setStepStates}
          />
        ))}
      </div>
    </>
  );
};

const Step = ({
  id,
  fillHeight,
  stepStates,
  setStepStates,
  handleStateChange,
}) => {
  const options = {
    1: ["AWS", "GCP"],
    2: ["Github", "Gitlab", "Bitbucket"],
    3: ["MongoDB", "RedisDB", "Postgresql"],
  };

  return (
    <div className="flex  items-center gap-20">
      <div className="flex flex-col items-center">
        <div className=" flex justify-center items-center w-14 h-14  bg-[#0c5bc6] rounded-full border border-solid shadow-[5px_5px_10px_#0000001a,inset_-5px_-5px_10px_#0000001a]">
          <div className=" w-[16px] h-[16px] top-0 left-0 bg-white rounded-[8px]"></div>
        </div>
        <div className="flex justify-center items-center">
          <div className=" w-[8px] h-[190px] bg-white rounded-[5px] border border-solid border-[#e7e7e9] shadow-[5px_5px_10px_#00000012]">
            <div
              style={{
                height: fillHeight ? "inherit" : "0",
                width: "inherit",
                backgroundColor: "#0c5bc6",
                position: "absolute",
                transition: "height 1s ease",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col [font-family:'Nunito',Helvetica] min-w-[830px] self-start pt-3 gap-8 ">
        <div>
          <div className="font-bold text-black text-[18px] tracking-[0.90px] leading-[normal]">
            Step {id}
          </div>
          <div className="text-sm text-gray-100">Connect to Cloud</div>
        </div>

        <div className="flex gap-5">
          {/* {console.log(options[id])} */}

          {stepStates[id] ? (
            <>
              {options[id].map((option) => {
                const initialAnimation =
                  id === 1 ? { x: -200, opacity: 0 } : { y: -50, opacity: 0 };
                const Animate =
                  id === 1 ? { x: 0, opacity: 1 } : { y: 0, opacity: 1 };
                return (
                  <motion.div
                    initial={initialAnimation}
                    transition={{ duration: 0.5 }}
                    animate={Animate}
                    onClick={() => {
                      return handleStateChange(option, id);
                    }}
                  >
                    <ServiceCards Name={option} />
                  </motion.div>
                );
              })}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default MyStepper;
