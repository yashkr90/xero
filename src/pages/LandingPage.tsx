import { useEffect, useState } from "react";
import Container from "../components/Container";
import ProgressContainer from "../components/ProgressContainer";
import MyStepper from "../components/MyStepper";
import Dashboard from "./Dashboard";
import { useAtom } from "jotai";
import { AtomUser,UserAtom } from "../lib/store.js";
import { useNavigate } from "react-router-dom";
import { getUser } from "../api/api.js";


const steps = ["step 1", "step 2", "step 3"];


const LandingPage = () => {

  // const [user, setUser] = useAtom(AtomUser);
  const [user, setUser]=useAtom(UserAtom)

  // const [user, setUser] =useState(null);
  

  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    const getuser = async () => {
      const userdata = await getUser();

      const firstName = userdata.user.name.givenName;
      console.log(firstName);

      setUser((prev)=>{
        return{...prev, firstName:firstName }
      });

      console.log(user);
    };
    getuser();
  }, []);

  useEffect(() => {
    console.log(user);

    if (user.firstName==null) {
      navigate("/login")
    }

  },[user])

  return (
    <Dashboard >
    <div className="landingpage flex rounded-[35px] w-full h-full bg-white">
      <div className="w-full flex flex-col   overflow-hidden text-left text-base text-black font-nunito p-5 gap-4">
        <Container />
        <div className="flex items-start justify-between gap-10">
          <MyStepper />
          <ProgressContainer />
        </div>
      </div>
    </div>
    </Dashboard>
  );
};

export default LandingPage;
