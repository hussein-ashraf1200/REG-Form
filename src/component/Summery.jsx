import Sidebar from "./Sidebar";
import { MdOutlineDone } from "react-icons/md";

const Summery = () => {
  return (
    <div className="sm:justify-center sm:flex sm:items-center sm:mt-8 mt-2">
      {/* countner */}
      {/* side menu + info */}
      <div
        className="bg-white flex sm:flex-row-reverse flex-col-reverse 
      justify-between p-2 border border-solid rounded-xl sm:ml-14 ml-0"
      >
        {/* info */}
        <div className="flex justify-center items-center flex-col sm:w-3/4">
          <div className="w-12 h-12 rounded-full bg-[#ec7063] flex justify-center items-center">
            <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center text-[#ec7063]">
              <MdOutlineDone />
            </div>
          </div>

          <h1 className="text-lg sm:text-xl font-bold text-[#34495E] mt-4">
            Thank you!
          </h1>

          <p className="text-xs sm:text-sm text-center text-[#555] px-4 mt-2 leading-relaxed">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at{" "}
            <span className="font-semibold text-[#ec7063]">
              support@lorem.com
            </span>
            .
          </p>
        </div>

        {/* side menu */}
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Summery;
