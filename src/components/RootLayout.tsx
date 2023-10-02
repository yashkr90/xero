import React,{ useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { UserAtom } from "../lib/store.js";
import { getUser } from "../api/api.js";




const RootLayout = () => {

  const [user, setUser]= useAtom(UserAtom);
  const navigate=useNavigate();

  useEffect(() => {
    const getuser = async () => {
      const userdata = await getUser();

      const firstName = userdata.user.name.givenName;
      console.log(firstName);

      if(firstName!==undefined){
        navigate("/dashboard");
      }

      setUser((prev)=>{
        return{...prev, firstName:firstName }
      });

      console.log(user);
    };
    getuser();
  }, []);

  const location=useLocation();
  // console.log(location);
  return (
    <>
      
        <Outlet />
     
    </>
  );
};

export default RootLayout;