import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { services } from "../assets/data";

const Pick = () => {
  const [selected, setSelected] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  const handleSelect = (service) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(service.id)) {
        setTotalPrice((prevPrice) => prevPrice - service.price); // إزالة السعر عند إلغاء التحديد
        return prevSelected.filter((id) => id !== service.id);
      } else {
        setTotalPrice((prevPrice) => prevPrice + service.price);
        return [...prevSelected, service.id];
      }
    });
  };

  const next = () => {
    navigate("/finish", {
      state: { selectedServices: selected, totalPrice },
    });
  };

  const back = () => {
    navigate(-1);
  };

  return (
    <div className="sm:justify-center sm:flex sm:items-center sm:mt-8 mt-2">
      {/* contaier */}
      <div className="bg-white flex sm:flex-row-reverse flex-col-reverse justify-between p-2 border border-solid rounded-xl">
        {/* info */}
        <div className="flex flex-col justify-center relative sm:pl-20 pt-0 sm:w-3/4">
          <div className="flex flex-col justify-center items-start w-full">
            <h1 className="font-montserrat sm:text-[24px] text-[20px] text-[#34495E] sm:-translate-x-10 font-bold">
              Pick add-ons
            </h1>
            <p className="font-sans sm:text-[16px] text-[10px] sm:-translate-x-10 text-[#000000]">
              Add-ons help enhance your gaming experience.
            </p>
          </div>

          {/*servese   */}
          <div className="sm:-translate-x-10">
            {services.map((service) => (
              <div
                key={service.id}
                className={`border-2 rounded-md mt-2 cursor-pointer ${
                  selected.includes(service.id)
                    ? "bg-[#eae7e7] border-[#34495e]"
                    : "bg-white border-gray-300"
                }`}
                onClick={() => handleSelect(service)}
              >
                <div className="flex justify-between items-center p-4">
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={selected.includes(service.id)}
                    className="w-5 h-5 text-[#34495e] border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  />

                  {/* Text */}
                  <div className="font-sans text-[14px] text-start flex-1 ml-4">
                    <p className="font-semibold">{service.label}</p>
                    <p className="text-[#A8AEB9]">{service.description}</p>
                  </div>

                  {/* Price */}
                  <p className="text-[#4d4f55]">${service.price}/mo</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-between flex-row-reverse pr-1 sm:pr-9 mt-4">
            <button
              onClick={next}
              className="font-sans text-[#FFFFFF] text-[16px] bg-[#34495E] p-2 rounded-lg w-24"
            >
              Next Step
            </button>
            <button onClick={back} className="font-sans text-[#A8AEB9] text-sm">
              Go Back
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
};

export default Pick;
