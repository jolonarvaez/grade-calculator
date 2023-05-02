import React, { useState, useEffect } from "react";
import GradeSelect from "./GradeSelect";

export default function Row(props: any) {
  const [units, setUnits] = useState(props.units);
  const [grade, setGrade] = useState(props.grade);
  const [gradePoint, setGradePoint] = useState(0.0);

  const changeUnits = (event: any) => {
    setUnits(event.target.value);
  };

  const changeGrade = (event: any) => {
    setGrade(event.target.value);
  };

  const changeGradePoint = () => {
    setGradePoint(units * grade);
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
          className="w-16 text-center course-units"
          type="number"
          id={`${props.index}-units`}
          name="subject-units"
          value={units}
          min="0"
          onChange={changeUnits}
        />
      </div>
      <div className="w-1/3">
        <GradeSelect
          selectedValue={grade}
          changeGrade={changeGrade}
          index={props.index}
        />
      </div>
    </div>
  );
}
