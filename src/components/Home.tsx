import { useAtom } from 'jotai';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUser } from '../api/api.js';
import { UserAtom } from '../lib/store.js';

const Home = () => {

    const [user, setUser]= useAtom(UserAtom);
    const navigate=useNavigate();
  
    useEffect(() => {
      const getuser = async () => {

        console.log("inside home");
        
        const userdata = await getUser();
  
        const firstName = userdata.user.name.givenName;
        console.log(firstName);
  
        if(firstName){
            console.log("inside");
            
          navigate("/dashboard");
        }
        else{
            console.log("indeide login");
            
            navigate("/login");
        }
  
        setUser((prev)=>{
          return{...prev, firstName:firstName }
        });
  
        console.log(user);
      };
      getuser();
    }, []);
  return (
    <>

    </>
  )
}

export default Home