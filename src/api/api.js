
import axios from "axios";
import { useAtom } from "jotai";

const URL = import.meta.env.VITE_URL;

console.log(URL);



export const getme = async (token) => {
  const res = await axios.get(`${URL}/v1/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("medata", res.data);

  return res.data;
};

export const getUser = async () => {

    console.log("inside get user");
  const res = await axios.get(`${URL}/auth/login/success`, { withCredentials: true });


    // fetch(`${URL}/auth/login/success`, {
    //     method: "GET",
    //     credentials: "include",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Credentials": true,
    //     },
    //   }) 
    //     .then((response) => {
    //       if (response.status === 200) return response.json();
    //       throw new Error("authentication has been failed!");
    //     })
    //     .then((resObject) => {
    //         console.log(resObject.user);
    //     //   setUser(resObject.user);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });

  console.log(res);

  return res.data;
  

};

export const signUp = async (data) => {
  console.log("data api", data);
  const res = await axios.post(`${URL}/v1/auth/signup`, data);
  console.log(res.data);

  return res.data;
};

export const signIn = async (data) => {
  try {
    console.log("data", data);
    const res = await axios.post(`${URL}/v1/auth/signin`, data);
    console.log(res.status);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const loginGoogle = async () => {
  window.open(`${URL}/auth/google`, "_self");
};
