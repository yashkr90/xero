import  { useState } from "react";


// const navitems = [
//   "XeroCodee",
//   "Builder Center",
//   "Service Board",
//   "Clusers",
//   "Databases",
//   "Environment",
//   "Workflow",
//   "Monitoring",
//   "Security",
//   "Web Hooks",
//   "Log Error",
// ];

const navitems = [
  { Name: "XeroCodee", imgsrc: "/icons--grid.svg" },
  { Name: "Builder Center", imgsrc: "/icons--layers.svg" },
  { Name: "Service Board", imgsrc: "/hello-1.svg" },
  { Name: "Clusers", imgsrc: "/vector2.svg" },
  { Name: "Databases", imgsrc: "/component-19.svg" },
  { Name: "Environment", imgsrc: "/icons--hard-drive.svg" },
  { Name: "Workflow", imgsrc: "/vector1.svg" },
  { Name: "Monitoring", imgsrc: "/monitoring-1.svg" },
  { Name: "Security", imgsrc: "/security-1.svg" },
  { Name: "Web Hooks", imgsrc: "/vector.svg" },
  { Name: "Log Error", imgsrc: "/icons--menu--menu-2.svg" },
];

const Navbar = () => {
  const [selected, ChangeSelected] = useState("");

  return (
    <div className="flex flex-col w-1/6 gap-20">
      <div className="flex px-10">
        <img
          className=" w-[180px] h-[52.94px] object-cover"
          alt=""
          src={"/logo-4@2x.png"}
        />
      </div>
      <div className="flex-col flex bg-lightsteelblue-100 text-black   h-full gap-4">
        {navitems.map((navitem) => {
          return (
            //change this in frame rmotion px and py
            <div
              className={`text-black flex items-center py-3 px-10
              ${
                selected == navitem.Name

                  ? "z-10 rounded-11xl bg-white shadow-[5px_5px_10px_rgba(0,_0,_0,_0.1)] box-border  border-[1px] border-solid border-gainsboro"
                  : ""
              }
              `}
            >
              <div className="flex items-center gap-10">
                <div>
                  <img className=" w-5 h-5" alt="" src={`${navitem.imgsrc}`} />
                </div>
                <div
                  className={`text-base text-neutral-950 font-semibold ${
                    selected == navitem.Name ? "text-royalblue" : ""
                  }`}
                >
                  {navitem.Name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
