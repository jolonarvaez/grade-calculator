import React from "react";
import Row from "./Row";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function DLSU() {
  return (
    <div className="container mx-auto max-w-2xl mt-4">
      <div className="w-1/2 mx-auto">
        <div className="text-center font-bold flex flex-row text-lg border-x-2 border-t-2 border-dlsu-green rounded-t-lg">
          <div className="w-1/3 py-1 bg-dlsu-green text-white">DLSU</div>
          <div className="w-1/3 py-1 text-dlsu-green">UP</div>
          <div className="w-1/3 py-1 text-dlsu-green">ADMU</div>
        </div>
      </div>

      <div className="text-center rounded-lg mx-4 shadow-lg">
        <div className="flex flex-row text-white rounded-t-lg bg-dlsu-green py-2.5">
          <div className="w-1/3">Course</div>
          <div className="w-1/3">Units</div>
          <div className="w-1/3">Grade</div>
        </div>
        <div className="border-2 border-dlsu-green rounded-b-lg">
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
