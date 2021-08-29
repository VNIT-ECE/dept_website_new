import React,{ useState,useEffect } from 'react'

function Assign(props) {
    // console.log("before",props.sem);

    const [deadlines,setDeadlines] = useState('');
    const sem5 = "https://docs.google.com/spreadsheets/d/1bs6k_aaVm93hCB5_JeLgN1PegW7PPwfn5kgPjS2x7cw/edit?usp=sharing";
    const sem3 = "https://docs.google.com/spreadsheets/d/10-B3P532UoO4C2j-jGTAMX-WWCS53UqT3Jq2cDkSYOA/edit?usp=sharing";
    // console.log(props.sem);
    useEffect(() => {
        if(props.sem==3)
        setDeadlines(sem3);
        else
        setDeadlines(sem5);

      console.log("inside");
  },[props.sem]);

    // if(props.sem==="3")
    // {
    //     setDeadlines("https://docs.google.com/spreadsheets/d/10-B3P532UoO4C2j-jGTAMX-WWCS53UqT3Jq2cDkSYOA/edit?usp=sharing");
    // }
    // else
    //     setDeadlines("https://docs.google.com/spreadsheets/d/1bs6k_aaVm93hCB5_JeLgN1PegW7PPwfn5kgPjS2x7cw/edit?usp=sharing");
    return (
        <div>
        <div className="flex justify-center">
            
            <div>
                
                <a
              href={deadlines}
              aria-label=""
              className="inline-flex text-sm items-center justify-center h-12 px-6 py-3 rounded-3xl font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-700 hover:bg-teal-500 focus:shadow-outline focus:outline-none"
            >
              Assignments & Deadlines
            </a>
            </div>
        </div>
        </div>
    )
    }
    export default Assign