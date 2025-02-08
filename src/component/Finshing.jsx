/* eslint-disable no-unused-vars */
import Sidebar from "./Sidebar";
import { useNavigate, useLocation } from "react-router-dom";

const Finshing = () => {
  const navgate = useNavigate();
  const back = () => {
    navgate(-1);
  };

  const done = () => {
    navgate("/summery");
  };

  const location = useLocation();
  const { selectedServices = [], totalPrice = 0 } = location.state || {};
  return (
    <div className="sm:justify-center sm:flex sm:items-center sm:mt-8 mt-2">
      {/* countner */}
      {/* side menu + info */}
      <div
        className="bg-white flex sm:flex-row-reverse flex-col-reverse 
    justify-between p-2 border border-solid rounded-xl"
      >
        {/* info */}
        <div
          className="flex flex-col relative
         sm:pl-20 -translate-x-10 pl-2 pt-14  sm:w-3/4"
        >
          <div className="flex flex-col justify-center items-start w-full">
            <h1
              className="font-montserrat sm:text-[24px] text-[20px] text-[#34495E]
           font-bold"
            >
              Finishing up
            </h1>
            <p className="font-sans sm:text-[16px] text-[10px] text-[#000000]">
              Double-check Everything looks OK befor confirming
              <span className="invisible"> ******** </span>
            </p>
          </div>

          {/* total */}
          <div
            className="bg-[#eae7e7] border-2 f
          p-4 mt-4 rounded-md "
          >
            <div className="flex justify-between  items-center">
              {/* arceda */}
              <div className="text-start">
                <p className="font-sans font-semibold">Arceda (monthly)</p>
                <p className="underline cursor-pointer hover:text-blue-500 text-[#A8AEB9]">
                  Change
                </p>
              </div>
              {/* price */}
              <div>
                <p className="font-sans font-semibold">$9/mo</p>
              </div>
            </div>
            {/* service */}
            <div className="flex justify-between  items-center mt-4">
              {/* arceda */}
              <div className="text-start">
                <p className="font-sans font-semibold text-[#A8AEB9]">
                  Online service
                </p>
                <p className="font-sans font-semibold text-[#A8AEB9]">
                  Larger storage
                </p>
              </div>
              {/* price */}
              <div className="font-sans text-[12px]">
                <p>+$1/mo</p>
                <p>+$2/mo</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between  items-center mt-6">
            {/* total price */}
            <div className="text-start">
              <p className="font-sans text-[#A8AEB9]"></p>
            </div>
            {/* price */}
            <div>
              <p className="font-sans text-[#34495E] font-semibold">
                +${totalPrice}/mo
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-8">
            {/* next button */}
            <div
              className="flex justify-between flex-row-reverse 
            sm:pr-9 pr-2 mt-4"
            >
              <button
                onClick={done}
                className="font-sans text-[#FFFFFF] text-[16px]
              bg-[#34495E] p-2 rounded-lg w-24"
              >
                Confirm
              </button>
              <button
                onClick={back}
                className=" font-sans
           text-[#A8AEB9] text-sm sm:text-sm"
              >
                Go Back
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

export default Finshing;
