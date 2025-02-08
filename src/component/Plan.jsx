import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaGamepad } from "react-icons/fa";
import { MdSportsEsports, MdToggleOn, MdToggleOff } from "react-icons/md";
import { TbBrandAppleArcade } from "react-icons/tb";

const Plan = () => {
  const [selected, setSelected] = useState(null);
  const handleClick = (planName) => {
    setSelected(planName);
  };

  const [monthSubscrib, setMonthSubscrib] = useState(false);

  const monthClick = () => {
    setMonthSubscrib(!monthSubscrib);
  };

  const navigate = useNavigate();
  const next = () => {
    navigate("/pick");
  };
  const back = () => {
    navigate(-1);
  };

  return (
    <div className="sm:justify-center sm:flex sm:items-center sm:mt-8 mt-2">
      {/* contaier*/}
      <div
        className="bg-white flex sm:flex-row-reverse flex-col-reverse 
      justify-between p-2 border border-solid rounded-xl"
      >
        {/*  info */}
        <div className="flex flex-col relative sm:pl-20 pl-2 pt-14 w-f sm:w-3/4">
          <div className="flex flex-col justify-center items-start w-full">
            <h1
              className="font-montserrat sm:text-[24px] text-[20px] text-[#34495E]
             font-bold"
            >
              Select your plan
            </h1>
            <p className="font-sans sm:text-[16px] text-[10px] text-[#000000]">
              You have the option of monthly or yearly billing.
              <span className="invisible"> *********** </span>
            </p>
          </div>

          {/*  plans */}
          <div
            className="flex justify-evenly items-center mt-6 font-sans 
            text-[16px]
           text-[#000000] "
          >
            {/* Arcade */}
            <div
              onClick={() => handleClick("Arcade")}
              className={`border-2 rounded-md flex flex-col items-start p-4 cursor-pointer transition-all duration-300 ${
                selected === "Arcade"
                  ? "bg-[#eae7e7] border-[#34495e]"
                  : "bg-white border-gray-300"
              }`}
            >
              <div className="text-white w-6 h-6 rounded-full bg-[#f39c12] flex items-center justify-center mb-6">
                <TbBrandAppleArcade />
              </div>
              <h1 className="font-semibold">Arcade</h1>
              <p className="text-[#A8AEB9]">$9/mo</p>
            </div>

            {/* Advanced */}
            <div
              onClick={() => handleClick("Advanced")}
              className={`border-2 rounded-md flex flex-col items-start p-4 cursor-pointer transition-all duration-300 ${
                selected === "Advanced"
                  ? "bg-[#eae7e7] border-[#34495e]"
                  : "bg-white border-gray-300"
              }`}
            >
              <div className="text-white w-6 h-6 rounded-full bg-[#ec7063] flex items-center justify-center mb-6">
                <FaGamepad />
              </div>
              <h1 className="font-semibold">Advanced</h1>
              <p className="text-[#A8AEB9]">$12/mo</p>
            </div>

            {/* Pro */}
            <div
              onClick={() => handleClick("Pro")}
              className={`border-2 rounded-md flex flex-col items-start p-4 cursor-pointer 
                transition-all duration-300 ${
                  selected === "Pro"
                    ? "bg-[#eae7e7] border-[#34495e]"
                    : "bg-white border-gray-300"
                }`}
            >
              <div className="text-white w-6 h-6 rounded-full bg-[#34495e] flex items-center justify-center mb-6">
                <MdSportsEsports />
              </div>
              <h1 className="font-semibold">Pro</h1>
              <p className="text-[#A8AEB9]">$15/mo</p>
            </div>
          </div>

          {/* مفتاح التبديل بين شهري وسنوي */}
          <div
            className="flex justify-center space-x-2 items-center mt-6 bg-[#eae7e7] 
          rounded-md p-2"
          >
            <p
              className={`font-sans ${
                !monthSubscrib ? "text-[#34495E] font-bold" : "text-gray-400"
              }`}
            >
              Monthly
            </p>

            {/* switch button  */}
            <button onClick={monthClick} className="focus:outline-none">
              {monthSubscrib ? (
                <MdToggleOn className="text-[#34495E] text-4xl" />
              ) : (
                <MdToggleOff className="text-gray-400 text-4xl" />
              )}
            </button>

            <p
              className={`font-sans ${
                monthSubscrib ? "text-[#34495E] font-bold" : "text-gray-400"
              }`}
            >
              Yearly
            </p>
          </div>

          {/*  buttons  */}
          <div
            className="flex justify-between flex-row-reverse 
              pr-2 sm:pr-12 mt-12"
          >
            <button
              onClick={next}
              className="font-sans text-[#FFFFFF] text-[16px]
 bg-[#34495E] p-2 rounded-lg w-24"
            >
              Next Step
            </button>
            <button
              onClick={back}
              className="font-sans text-[#A8AEB9] text-sm sm:text-sm"
            >
              Go Back
            </button>
          </div>
        </div>

        {/* sidebar */}
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Plan;
