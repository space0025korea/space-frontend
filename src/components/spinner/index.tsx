import React from "react";

type SpinnerProps = {
  size?: "small" | "large";
};

const Spinner = ({ size }: SpinnerProps) => {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-solid border-current border-gray-200 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${
        size === "large" ? "h-36 w-36 border-[10px]" : "h-6 w-6 border-4"
      }`}
    ></div>
  );
};

export default Spinner;
