import React, { use, useState } from "react";
import Row from "./Row";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function Calculator() {
  const [school, setSchool] = useState("DLSU");

  const changeSchool = (string: any) => {
    setSchool(string);
  };

  return (
    <div className="container mx-auto max-w-2xl mt-4">
      <div className="w-1/2 mx-auto">
        <div className="text-center font-bold flex flex-row text-lg">
          <div
            className={`transition duration-200 w-1/3 rounded-t-lg text-white py-1
            ${school === "DLSU" ? "bg-dlsu-green" : "text-dlsu-green hover:opacity-75"}`}
          >
            <button onClick={() => changeSchool("DLSU")}>DLSU</button>
          </div>
          <div
            className={`transition duration-200 w-1/3 py-1 rounded-t-lg text-white 
             ${school === "UP" ? "bg-up-maroon" : "text-up-maroon hover:opacity-75"}`}
          >
            <button onClick={() => changeSchool("UP")}>UP</button>
          </div>
          <div
            className={`transition duration-200 w-1/3 py-1 rounded-t-lg text-white
             ${school === "ADMU" ? "bg-admu-blue" : "text-admu-blue hover:opacity-75"}`}
          >
            <button onClick={() => changeSchool("ADMU")}>ADMU</button>
          </div>
        </div>
      </div>

      <div className="text-center rounded-lg mx-4 shadow-lg">
        <div></div>
        <div
          className={`transition duration-200 flex flex-row text-white rounded-t-lg py-2.5 ${
            school === "DLSU" ? "bg-dlsu-green" : ""
          } ${school === "UP" ? "bg-up-maroon" : ""}${
            school === "ADMU" ? "bg-admu-blue" : ""
          }`}
        >
          <div className="w-1/3">Course</div>
          <div className="w-1/3">Units</div>
          <div className="w-1/3">Grade</div>
        </div>
        <div
          className={`transition duration-200 border-2 rounded-b-lg ${
            school === "DLSU" ? "border-dlsu-green" : ""
          } ${school === "UP" ? "border-up-maroon" : ""}${
            school === "ADMU" ? "border-admu-blue" : ""
          }`}
        >
          <Row />
          <Row />
          <Row />
          <div className="add-btn">
            <BsFillPlusCircleFill />
          </div>
        </div>
      </div>
    </div>
  );
}
