import React from "react";

export default function Semcard(props){
  return (
    <div className="block">
      <div className="relative">
        <div className="absolute z-10 h-52 w-52 top-0 left-0 bg-white border-4 border-gray-800 flex items-center">
          <p className="font-bold text-7xl mx-auto">{props.sem}</p>
        </div>
        <div className={"absolute z-0 h-52 w-52 top-5 left-5 border-4 border-gray-800 " + props.color}></div>
      </div>
    </div>
  );
}
