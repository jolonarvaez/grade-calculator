import React, { useState } from "react";

export default function GradeSelect(props: any) {
  return (
    <div>
      <select
        id={`${props.index}-grade`}
        className="course-grade"
        value={props.selectedValue}
        onChange={props.changeGrade}
      >
        <option value="4.0">4.0</option>
        <option value="3.5">3.5</option>
        <option value="3.0">3.0</option>
        <option value="2.5">2.5</option>
        <option value="2.0">2.0</option>
        <option value="1.5">1.5</option>
        <option value="1.0">1.0</option>
        <option value="0.0">0.0</option>
      </select>
    </div>
  );
}
