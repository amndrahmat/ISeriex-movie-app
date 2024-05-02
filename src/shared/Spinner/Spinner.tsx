import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Spinner = () => {
  return (
    <div >
      <div className="grid h-screen object-fit bg-white-800">
        <div className="flex justify-center ">
          <PulseLoader
            color="#4c5a67"
            loading
            size={7}
            speedMultiplier={0.5}
          />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
