import React, { useState } from "react";
import GradeSelect from "./GradeSelect";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function Row(props: any) {
  const [units, setUnits] = useState(0);

  const changeUnits = (event: any) => {
    setUnits(event.target.value);
  };

  const deleteRow = () => {
    props.onDelete();
  };

  return (
    <div className="flex py-2.5 border-b my-1">
      <div className="w-1/3">
        <input
          className="placeholder:text-sm w-32"
          type="text"
          placeholder="Enter Course Name"
        />
      </div>
      <div className="w-1/3">
        <input
          className="w-16 text-center"
          type="number"
          id="subject-units"
          name="subject-units"
          value={units}
          min="0"
          onChange={changeUnits}
        />
      </div>
      <div className="w-1/3">
        <GradeSelect />
      </div>
      <div className="relative text-lg">
        <button onClick={deleteRow}>
          <MdOutlineDeleteOutline />
        </button>
      </div>
    </div>
  );
}
