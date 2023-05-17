import React, { use, useState } from "react";
import Row from "./Row";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

export default function Calculator() {
  const [school, setSchool] = useState("DLSU");
  const [tableData, setTableData] = useState<React.ReactNode[]>([]);
  const [gpa, setGPA] = useState("0.000");
  const [honors, setHonors] = useState("");

  const changeSchool = (string: any) => {
    setSchool(string);
    setGPA("0.000");
    setHonors("");

    const newTableData = tableData.map((row, index) => {
      return (
        <div key={index}>
          <Row units={3} grade={0} index={index} school={string} />
        </div>
      );
    });
    setTableData(newTableData);
  };

  const addRow = () => {
    const newDivs = [
      ...tableData,
      <div key={tableData.length}>
        <Row units={3} grade={0} index={tableData.length} school={school} />
      </div>,
    ];
    setTableData(newDivs);
  };

  const deleteRow = () => {
    const newDivs = [...tableData];
    newDivs.splice(tableData.length - 1, 1);
    setTableData(newDivs);
  };

  const gpaHolder = <div className="my-auto">GPA: {gpa}</div>;

  function calculateTotalUnits() {
    let total = 0;
    const elements = document.querySelectorAll(".course-units");
    elements.forEach((element) => {
      total += parseInt((element as HTMLInputElement).value);
    });
    return total;
  }

  const calculateGrade = () => {
    let totalGradePoints = 0;
    let totalUnits = calculateTotalUnits();

    tableData.forEach((row, index) => {
      const gradeElement = document.getElementById(index + "-grade");
      const unitElement = document.getElementById(index + "-units");
      totalGradePoints +=
        parseFloat((gradeElement as HTMLSelectElement).value) *
        parseInt((unitElement as HTMLInputElement).value);
    });

    const result = totalGradePoints / totalUnits;
    setGPA(result.toFixed(3));

    switch (school) {
      case "DLSU":
        if (result >= 3.0 && result < 3.4) {
          setHonors("Second Dean's Lister 🎉");
        } else if (result >= 3.4) {
          setHonors("First Dean's Lister 🎊");
        }
        break;
      case "UP":
        if (result <= 1.75 && result > 1.45) {
          setHonors("College Scholar 🎉");
        } else if (result <= 1.45) {
          setHonors("University Scholar 🎊");
        }
      case "ADMU":
        if (result >= 3.35 && result < 3.7) {
          setHonors("Second Honors 🎉");
        } else if (result >= 3.7) {
          setHonors("First Honors 🎊");
        }
    }
  };

  return (
    <div className="font-sans antialiased text-material-black mx-auto max-w-2xl mt-4 h-80">
      <div className="w-1/2 mx-auto">
        <div className="text-center font-bold flex flex-row text-lg">
          <button
            className={`transition duration-200 w-1/3 rounded-t-lg text-white py-1
            ${
              school === "DLSU"
                ? "bg-dlsu-green"
                : "shadow-inner text-dlsu-green hover:opacity-75"
            }`}
            onClick={() => changeSchool("DLSU")}
          >
            <div>DLSU</div>
          </button>

          <button
            className={`transition duration-200 w-1/3 py-1 rounded-t-lg text-white 
             ${
               school === "UP"
                 ? "bg-up-maroon"
                 : "shadow-inner text-up-maroon hover:opacity-75"
             }`}
            onClick={() => changeSchool("UP")}
          >
            <div>UP</div>
          </button>
          <button
            className={`transition duration-200 w-1/3 py-1 rounded-t-lg text-white
             ${
               school === "ADMU"
                 ? "bg-admu-blue"
                 : "shadow-inner text-admu-blue hover:opacity-75"
             }`}
            onClick={() => changeSchool("ADMU")}
          >
            <div>ADMU</div>
          </button>
        </div>
      </div>

      <div className="text-center rounded-lg mx-4 shadow-xl">
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
          className={`transition duration-200 border-2 rounded-b-lg  ${
            school === "DLSU" ? "border-dlsu-green" : ""
          } ${school === "UP" ? "border-up-maroon" : ""}${
            school === "ADMU" ? "border-admu-blue" : ""
          }`}
        >
          <div>
            <div>{tableData}</div>
          </div>
          <div
            className={`text-4xl my-2 text-dlsu-green w-full flex space-x-6 justify-center ${
              school === "DLSU" ? "text-dlsu-green" : ""
            } ${school === "UP" ? "text-up-maroon" : ""}${
              school === "ADMU" ? "text-admu-blue" : ""
            }`}
          >
            <button
              onClick={addRow}
              className="transition duration-150 hover:opacity-50"
            >
              <AiFillPlusCircle />
            </button>
            <button
              onClick={deleteRow}
              className="transition duration-150 hover:opacity-50"
            >
              <AiFillMinusCircle />
            </button>
          </div>
          <div className="flex justify-evenly">
            <div className="my-auto text-3xl">
              {school === "DLSU" && (
                <div>
                  GPA: <span className="font-bold">{gpa}</span>
                </div>
              )}
              {school === "UP" && (
                <div>
                  GWA: <span className="font-bold">{gpa}</span>
                </div>
              )}
              {school === "ADMU" && (
                <div>
                  QPI: <span className="font-bold">{gpa}</span>
                </div>
              )}
            </div>
            <button
              className={`transition duration-200 py-2 px-5 font-light text-white rounded-lg hover:opacity-75
              ${school === "DLSU" ? "bg-dlsu-green" : ""} ${
                school === "UP" ? "bg-up-maroon" : ""
              }${school === "ADMU" ? "bg-admu-blue" : ""}`}
              onClick={calculateGrade}
            >
              Calculate
            </button>
          </div>
          <div
            className={`my-2 text-dlsu-green font-bold ${
              school === "DLSU" ? "text-dlsu-green" : ""
            } ${school === "UP" ? "text-up-maroon" : ""}${
              school === "ADMU" ? "text-admu-blue" : ""
            }`}
          >
            {honors}
          </div>
        </div>
      </div>
    </div>
  );
}
