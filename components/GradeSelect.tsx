import React, { useState } from "react";

export default function GradeSelect(props: any) {
  if (props.school === "DLSU") {
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
  } else if (props.school === "UP") {
    return (
      <div>
        <select
          id={`${props.index}-grade`}
          className="course-grade"
          value={props.selectedValue}
          onChange={props.changeGrade}
        >
          <option value="1.0">1.0</option>
          <option value="1.25">1.25</option>
          <option value="1.5">1.5</option>
          <option value="1.75">1.75</option>
          <option value="2.0">2.0</option>
          <option value="2.25">2.25</option>
          <option value="2.50">2.50</option>
          <option value="2.75">2.75</option>
          <option value="3.0">3.0</option>
          <option value="4.0">4.0</option>
          <option value="5.0">5.0</option>
        </select>
      </div>
    );
  } else {
    return (
      <div>
        <select
          id={`${props.index}-grade`}
          className="course-grade"
          value={props.selectedValue}
          onChange={props.changeGrade}
        >
          <option value="4.0">A</option>
          <option value="3.5">B+</option>
          <option value="3.0">B</option>
          <option value="2.5">C+</option>
          <option value="2.0">C</option>
          <option value="1.0">D</option>
          <option value="0.0">F</option>
          <option value="0.0">W</option>
        </select>
      </div>
    );
  }
}
