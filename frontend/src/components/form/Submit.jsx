import React from "react";
import { PiSpinnerGapBold } from "react-icons/pi";

export default function Submit({ value, busy }) {
  return (
    <button
      type="submit"
      className="w-full rounded dark:bg-white bg-secondary dark:text-secondary text-white hover:bg-opacity-90 transition font-semibold text-lg cursor-pointer h-10 flex items-center justify-center"
    >
      {busy ? <PiSpinnerGapBold className="animate-spin" /> : value}
    </button>
  );
}
