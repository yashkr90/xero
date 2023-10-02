import { FunctionComponent, useEffect } from "react";
import Switch from "@mui/material/Switch";
import { getme } from "../api/api.js";
import { useAtom } from "jotai";
import { UserAtom } from "../lib/store.js";

const Container = () => {
  const [user, setUser] = useAtom(UserAtom);

  console.log(user);

  useEffect(() => {
    const fetchUser = async () => {
      const User = await getme(user.token);
      const newuser=User.content.data.firstName;
      setUser(newuser);
    };

    fetchUser();
  }, []);

  return (
    <div className="w-full flex">
      {/* <div className="absolute top-[171px] left-[1330px] " /> */}
      <div className="flex w-full justify-between rounded-6xl [background:linear-gradient(180deg,_rgba(211,_230,_255,_0.31),_rgba(231,_241,_255,_0))] box-border w-[1330px] h-[171px] border-[1px] border-solid border-ghostwhite">
        <div className="flex flex-col justify-center items-center">
          <div className=" font-extrabold flex items-center text-7xl text-gray-300 font-nunito">
            Hi {user.firstName ? `${user.firstName}` : ""} !
          </div>
          <div className="text-lg tracking-[0.05em] flex text-black items-center">
            Welcome to XeroCodee Ecosystem <span>😎</span>
          </div>
        </div>

        <div className="flex  flex-col justify-start text-right text-base text-gray-400 mr-4 mt-5">
          {/* <div className=" w-[83px] h-5 "> */}
          {/* <img
              className="absolute h-[135%] w-[51.2%] top-[-12.5%] right-[0%] bottom-[-22.5%] left-[48.8%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/switch-on.svg"
            /> */}
          <div className="flex items-start justify-center">
            <div className="">Test Mode</div>
            <Switch defaultChecked size="small" />
            <div className="">Production Mode</div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Container;
