import React, {useState} from "react";
import SubjectCard from "./SubjectCard";
import ModalBox from "./ModalBox";
import {subSem3, subSem5} from "./Subs"



const Resources = (props)=> {
  let subs = [];
  // eslint-disable-next-line no-lone-blocks
  {props.sem === 5? subs = subSem5: subs = subSem3}

  const [modalContent, setModalContent] = useState(null);

  const showModal = (sub)=>{
    setModalContent(sub);
  }

  return(
    <section id="resources">

      <div className="mx-auto text-center my-10">
        <div className="text-3xl sm:text-5xl font-bold text-black">Resources</div>
        <p className="sm:text-lg text-black font-normal mt-5 px-12">Get important books, notes, youtube channel, assignment and syllabus at one place.</p>
      </div>

      <div className="flex justify-center flex-wrap relative bg-gradient-to-r from-teal-300 via-teal-accent-600 to-teal-accent-400 rounded-3xl sm:p-5 m-4 sm:m-0">

      {subs.map((sub)=>{
        return (<SubjectCard key={sub.id} data={sub} call={showModal} />);
      })}

      {
        modalContent? <ModalBox modalContent={modalContent} call={showModal}  />: null
      }
    </div>
    </section>
  );

}

export default Resources;
