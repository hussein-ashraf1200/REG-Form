import sidebar from "../assets/image/sidebar.png";

const Sidebar = () => {
  return (
    <div className="">
      <div className="relative ">
        <img className="w-full" src={sidebar} alt="" />
        {/* secllection */}
        <div
          className="text-center flex flex-col justify-center  items-start right-[30%]
          top-8  absolute gap-8 "
        >
          {/* sellect 01 */}
          {/* circle */}
          <div className="flex gap-4">
            <div className="">
              <p
                className="w-8 aspect-square rounded-full border-[1px] border-solid border-white
   text-center flex  items-center justify-center flex-shrink-0 leading-none"
              >
                1
              </p>
            </div>
            {/* sellection p */}
            <div className="font-sans text-start text-sm ">
              <p className="text-[#34495E]">STEP 1</p>
              <p className="font-bold text-[#ffffff]">YOUR INFO</p>
            </div>
          </div>
          {/* sellect 02 */}
          {/* circle */}
          <div className="flex gap-4">
            <div className="selection:bg-black">
              <p
                className="w-8 aspect-square rounded-full border-[1px] border-solid border-white
   text-center flex  items-center justify-center flex-shrink-0 leading-none"
              >
                2
              </p>
            </div>
            {/* sellection p */}
            <div className="font-sans text-start text-sm ">
              <p className="text-[#34495E]">STEP 2</p>
              <p className="font-bold text-[#ffffff]">SELECT PLAN</p>
            </div>
          </div>
          {/* sellect 03 */}
          {/* circle */}
          <div className="flex gap-4">
            <div className="selection:bg-black">
              <p
                className="w-8 aspect-square rounded-full border-[1px] border-solid border-white
   text-center flex  items-center justify-center flex-shrink-0 leading-none"
              >
                3
              </p>
            </div>
            {/* sellection p */}
            <div className="font-sans text-start text-sm ">
              <p className="text-[#34495E]">STEP 3</p>
              <p className="font-bold text-[#ffffff]">ADD-ONS</p>
            </div>
          </div>
          {/* sellect 04*/}
          {/* circle */}
          <div className="flex gap-4">
            <div className="selection:bg-black">
              <p
                className="w-8 aspect-square rounded-full border-[1px] border-solid border-white
   text-center flex  items-center justify-center flex-shrink-0 leading-none"
              >
                4
              </p>
            </div>
            {/* sellection p */}
            <div className="font-sans text-start text-sm ">
              <p className="text-[#34495E]">STEP 4</p>
              <p className="font-bold text-[#ffffff]">SUMMARY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
