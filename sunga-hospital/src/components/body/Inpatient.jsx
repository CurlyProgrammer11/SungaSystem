import React from "react";

const Inpatient = () => {
  return (
    <div class="bg-white rounded-xl flex flex-auto items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <div class="text-center my-2">
          <p class="text-5xl font-semibold">40</p>
          <p class="text-lg font-semibold">inpatients</p>
          <p class="text-xs font-light italic">
            as of March 15, 2024 <strong>11:59am</strong>
          </p>
        </div>
        <div class="drop-shadow-lg">
          <img
            class="bg-blue-900 size-8 rounded-full"
            src="../public/icons/refresh.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Inpatient;
