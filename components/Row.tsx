import React from "react";
import GradeSelect from "./GradeSelect";

export default function Row() {
  return (
    <div className="flex py-2.5 border-b my-1">
        <div className="w-1/3">
        <input
          type="text" 
        /> 
        </div>
        <div className="w-1/3">
            Test
        </div>
        <div className="w-1/3">
            <GradeSelect />
        </div>
    </div>
  );
}
