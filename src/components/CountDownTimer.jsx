import React from "react";

const CountDownTimer = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col items-center gap-2">
        <div className="px-3 py-2 shadow-lightGray rounded-md bg-white shadow-sm text-lightGray text-xl">
          02
        </div>
        <div className="text-lightGray text-base">Days</div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="px-3 py-2 shadow-lightGray rounded-md bg-white shadow-sm text-lightGray text-xl">
          06
        </div>
        <div className="text-lightGray text-base">Hour</div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="px-3 py-2 shadow-lightGray rounded-md bg-white shadow-sm text-lightGray text-xl">
          05
        </div>
        <div className="text-lightGray text-base">Min</div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="px-3 py-2 shadow-lightGray rounded-md bg-white shadow-sm text-lightGray text-xl">
          30
        </div>
        <div className="text-lightGray text-base">Sec</div>
      </div>
    </div>
  );
};

export default CountDownTimer;
