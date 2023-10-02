
import Navbar from "../components/Navbar";
import SearchContainer from "../components/SearchContainer";


const Dashboard = ({ children }) => {


  // useEffect(() => {
  //   const checkuser = async () => {

  //     // await getUser();
  //     // console.log(user);
  //     // if (!user.firstName) {
  //     //   navigate("/");
  //     // }

  //   };

  //   checkuser();
  // });
  return (
    <div className=" w-full h-full justify-center py-4 flex mx-auto">
      <Navbar />
      <div className="flex flex-col gap-5">
        <SearchContainer />
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
