import { motion } from "framer-motion";
import ImgAndStyle from "../lib/ImgAndStyle.js";

const ServiceCards = (props) => {
  // console.log(props);
  return (
    // <div className="absolute top-[401px] left-[436px]">
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: {
          scale: { duration: 0.2 },
        },
      }}
      whileTap={{ scale: 1 }}
      className="flex flex-row-reverse justify-around items-center rounded-mini bg-white shadow-[5px_5px_10px_rgba(0,_0,_0,_0.1)] box-border w-[262px] h-[120px] border-[1px] border-solid border-whitesmoke-200"
    >
      <Logo Name={props.Name} />

      <div className="flex flex-col gap-5 self-end">
        <div className="flex tracking-[0.05em] font-bold text-3xl text-gray-300 font-nunito">
          {props.Name}
        </div>

        <div className="flex gap-1.5">
          <div className=" rounded-[50%] bg-firebrick w-2.5 h-2.5" />
          <div className=" rounded-[50%] bg-mediumseagreen w-2.5 h-2.5" />
          <div>
            <img
              className="w-[18.5px] h-[21.13px] relative bottom-1"
              alt=""
              src="/icons--sync.svg"
            />
          </div>
        </div>
      </div>
    </motion.div>
    // </div>
  );
};

const Logo = ({ Name }) => {
  console.log(Name);
  // console.log(ImgAndStyle[Name]);

  const bgcol = ImgAndStyle[Name].bgcol;
  // console.log(bgcol);
  const borcol = ImgAndStyle[Name].borcol;
  return (
    <div
      className={`flex items-center justify-center rounded-mini ${bgcol} ${borcol} box-border w-[93px] h-[83px] border-[1px] border-solid `}
    >
      <img
        className=" w-[62px] h-[62px] object-contain"
        alt=""
        src={`${ImgAndStyle[Name].imgsrc}`}
      />
    </div>
  );
};

export default ServiceCards;
