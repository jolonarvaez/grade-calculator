import React from "react";
import GradeSelect from "./GradeSelect";

export default function Row() {
  return (
    <div className="flex py-2.5 border-b my-1">
      <div className="w-1/3">
        <input className="placeholder:text-sm palceholder:text-red-400" type="text" placeholder="Enter Course Name" />
      </div>
      <div className="w-1/3">Test</div>
      <div className="w-1/3">
        <GradeSelect />
      </div>
    </div>
  );
}
