import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import "./SignupPage.css";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "../components/SignUp";
import { SignAtom, UserAtom } from "../lib/store";
import { useAtom } from "jotai";
import SignIn from "../components/SignIn";
import { getUser, loginGoogle } from "../api/api.js";

const imageURL = "/image7.png";
const SignPage = () => {
  const [signState, setSignState] = useAtom(SignAtom);

  const handleChange = () => {
    setSignState((prev) => {
      if (prev == "signin") return "signup";
      else return "signin";
    });
  };

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
      // else{
      //   navigate("/login");
      // }

      setUser((prev)=>{
        return{...prev, firstName:firstName }
      });

      console.log(user);
    };
    getuser();
  }, []);
  

  const googleLogin = async() => {

    await loginGoogle();

    
  
}

  return (
    <div className="hero">
      <div className="relative w-full font-nunito">
        <div className="flex bg-white w-3/6 rounded-tr-[35px] h-full rounded-bl-[35px] mx-auto px-10 justify-center gap-10 pt-4">
          <div className="form flex flex-col w-2/5 gap-5 pb-10">
            <div className="self-center">
              <img src="/logo 4.png" alt="" />
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <div className="self-center font-bold font-nunito text-4xl">
                  Hello!
                </div>
                <div>
                  <Divider>
                    <span className=" text-sm font-nunito text-gray-200 font-semibold">
                      {signState == "signup"
                        ? "Create Your Account"
                        : "Login To Your Account"}
                    </span>
                  </Divider>
                </div>
              </div>
              {signState == "signup" ? <SignUp /> : <SignIn />}

              <div className="self-center">OR</div>
              <div className="flex justify-between items-center ">
                <Button
                onClick={googleLogin}
                  sx={{
                    borderColor: "#c0c0c0",
                    padding: "10px",
                  }}
                  variant="outlined"
                >
                  <span className="text-xs capitalize text-gray-200 font-nunito">
                    Sign Up With Google
                  </span>
                </Button>
                <Button
                  sx={{
                    borderColor: "#c0c0c0",
                    padding: "10px",
                  }}
                  variant="outlined"
                  size="medium"
                >
                  <span className="text-xs capitalize text-gray-200 font-nunito">
                    Sign Up With Github
                  </span>
                </Button>
              </div>

              <div className="self-center">
                <span className="text-sm font-nunito text-gray-200">
                  {signState == "signup"
                    ? "Already have an Account ?"
                    : "Don't have an Account ?"}
                </span>{" "}
                <span
                  className=" text-blue-600 font-nunito text-sm font-bold"
                  onClick={handleChange}
                >
                  {signState == "signup" ? "LOGIN" : "SIGN UP"}
                </span>
              </div>
            </div>
          </div>

          <Divider orientation="vertical" variant="middle" flexItem light />

          <div className="flex justify-start items-center w-2/5">
            <img
              className="w-full h-[60%] object-contain"
              alt=""
              src="/bro.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignPage;
