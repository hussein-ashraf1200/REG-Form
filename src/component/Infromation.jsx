import { useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar";

const Infromation = () => {
  const navigate = useNavigate();

  const next = () => {
    navigate("plan");
  };

  return (
    <div className="sm:justify-center sm:flex sm:items-center sm:mt-8 mt-2">
      {/* countner */}
      {/* side menu + info */}
      <div
        className="bg-white flex sm:flex-row-reverse flex-col-reverse 
      justify-between p-2 border border-solid rounded-xl"
      >
        {/* info */}
        <div className="flex flex-col relative sm:pl-20 pl-2 pt-14 w-f sm:w-3/4">
          <div className="flex flex-col justify-center items-start w-full">
            <h1
              className="font-montserrat sm:text-[24px] text-[20px] text-[#34495E]
             font-bold"
            >
              Personal info
            </h1>
            <p className="font-sans sm:text-[16px] text-[10px] text-[#000000]">
              Please provide your name, email address, and phone number
            </p>
          </div>

          {/* input */}
          <div className="flex flex-col mt-8">
            <div className="flex items-start flex-col pt-4  ">
              <p className="mb-1 ">Name</p>
              <input
                className=" w-[90%] rounded-lg border-2 border-solid font-sans 
                text-[16px] text-[#000000] p-2 "
                type="text"
                placeholder="eg.stephen king"
              />
            </div>

            <div className="flex items-start flex-col pt-4  ">
              <p className="mb-1">Email Address</p>
              <input
                className="w-[90%] rounded-lg border-2 border-solid font-sans text-[16px]
                 text-[#000000] p-2 "
                type="email"
                placeholder="e.g.stephenking@lorem.com"
              />
            </div>

            <div className="flex items-start flex-col pt-4  ">
              <p className="mb-1">Phone number</p>
              <input
                className=" w-[90%] rounded-lg border-2 border-solid font-sans text-[16px]
                 text-[#000000] p-2"
                type="text"
                placeholder="e.g. +1 234 567 890"
              />
            </div>
            <div className="bg-neutral-200 mt-4 rounded-2xl p-4">
              <ul className="flex justify-end text-center flex-row space-x-7 decr ">
                <li>on</li>
                <li>on</li>
                <li>on</li>
                <li>on</li>
                <li>on</li>
              </ul>
            </div>

            {/* next button */}
            <div
              className="flex justify-between flex-row-reverse 
            pr-2 sm:pr-12 mt-[30px]"
            >
              <button
                onClick={next}
                className="font-sans text-[#FFFFFF] text-[16px]
                bg-[#34495E] p-2 rounded-lg w-24"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
        {/* side menu */}
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Infromation;
