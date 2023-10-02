import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useNavigationType,
  useLocation,
  RouterProvider,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import SignPage from "./pages/SignPage";
import RootLayout from "./components/RootLayout";
import { useEffect, useState } from "react";
import { getUser } from "./api/api.js";
import { useAtom } from "jotai";
import { AtomUser } from "./lib/store.js";
import { useNavigate } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<SignPage />} />

      <Route path="dashboard">
        <Route index element={<LandingPage />} />
      </Route>
      <Route path="choose" element={<div>choose path</div>} />
    </Route>
  )
);

function App() {
  const [user, setUser] = useAtom(AtomUser);

  // const navigate = useNavigate();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<SignPage />} />
        <Route path="dashboard" element={<LandingPage />} />

        <Route path="login" element={<SignPage />} />
        {/* <Route index element={<LandingPage />} />
        </Route> */}
        <Route path="choose" element={<div>choose path</div>} />
      </Route>
    )
  );

  // useEffect(() => {
  //   const getuser = async () => {
  //     const userdata = await getUser();

  //     const username = userdata.user.name.givenName;
  //     console.log(username);

  //     setUser(username);

  //     console.log(user);
  //   };
  //   getuser();
  // }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
