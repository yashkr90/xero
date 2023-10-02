import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,

  RouterProvider,

} from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import SignPage from "./pages/SignPage";
import RootLayout from "./components/RootLayout";

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


  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<RootLayout />}>
  //       <Route index element={<SignPage />} />
  //       <Route path="dashboard" element={<LandingPage />} />

  //       <Route path="login" element={<SignPage />} />
  //       {/* <Route index element={<LandingPage />} />
  //       </Route> */}
  //       <Route path="choose" element={<div>choose path</div>} />
  //     </Route>
  //   )
  // );



  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
