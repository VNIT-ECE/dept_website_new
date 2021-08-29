import React from "react";
const SubjectCard = (props)=>{



  return(
    <div className="m-4 sm:m-5 z-10">
      <div className="h-24 w-32 sm:h-48 sm:w-80 rounded-3xl shadow-xl flex items-center cursor-pointer bg-white" onClick={() => props.call(props.data)}>
        <p className="font-bold text-gray-800 text-xl sm:text-3xl mx-auto">{props.data.subName}</p>
      </div>
    </div>
  );
};

export default SubjectCard;
