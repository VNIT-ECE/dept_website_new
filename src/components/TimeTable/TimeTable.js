import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import './TimeTable.css'
const timeTableData = require('../timeTableData')
const dayTime = require('../dayTime')
const TimeTable = ({sem}) => {

    var timeTable = timeTableData(sem);
    var timeDate = dayTime();
    const [day, setDay] = useState();
    const [monday, setMonday] = useState(Array.from(timeTable.get("monday"), ([name, value]) => ({ name, value })));
    const [tuesday, setTuesday] = useState(Array.from(timeTable.get("tuesday"), ([name, value]) => ({ name, value })));
    const [wednesday, setWednesday] = useState(Array.from(timeTable.get("wednesday"), ([name, value]) => ({ name, value })));
    const [thursday, setThursday] = useState(Array.from(timeTable.get("thursday"), ([name, value]) => ({ name, value })));
    const [friday, setFriday] = useState(Array.from(timeTable.get("friday"), ([name, value]) => ({ name, value })));
    const [saturday, setSaturday] = useState(Array.from(timeTable.get("saturday"), ([name, value]) => ({ name, value })));
    const [show, setShow] = useState(false);
    const update = () => {
        timeDate = dayTime();
        setDay(timeDate.get("day"));
        
    }
    setInterval(update, 1);
    useEffect(()=>{
        timeTable = timeTableData(sem);
        setMonday(Array.from(timeTable.get("monday"), ([name, value]) => ({ name, value })));
        setTuesday(Array.from(timeTable.get("tuesday"), ([name, value]) => ({ name, value })));
        setWednesday(Array.from(timeTable.get("wednesday"), ([name, value]) => ({ name, value })));
        setThursday(Array.from(timeTable.get("thursday"), ([name, value]) => ({ name, value })));
        setFriday(Array.from(timeTable.get("friday"), ([name, value]) => ({ name, value })));
        setSaturday(Array.from(timeTable.get("saturday"), ([name, value]) => ({ name, value })));
    },[sem])
    return (
        <div className="table_div">
            <div className="flex justify-center">
            <Link
                        to={!show? "table_div":null}
                        spy={true} smooth={true}
                        aria-label=""
                        title=""
                        class="cursor-pointer font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                      >
                        <button type="button" className="px-6 py-3 my-5 w-48 rounded-3xl shadow-md bg-teal-accent-700 hover:bg-teal-500 text-white" onClick={() => setShow(!show)}>{!show ? ("Full TimeTable") : ("Close TimeTable")}</button>  
                      </Link>
                
            </div>
            <div id="table">
            {show ? (<div className=" "><table id="table"className="Table  text-lg w-full table-fixed" >
                <thead>
                    <tr className="Header">
                        <th className="day_media">Day/Time</th>
                        <th>9:00</th>
                        <th>10:00</th>
                        <th>11:00</th>
                        <th>12:00</th>
                        <th>1:00</th>
                        <th>2:00</th>
                        <th>3:00</th>
                        <th>4:00</th>
                        <th>5:00</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className={day == "monday" ? "today_on" : "day"}>Monday</th>
                        {monday.map(Element => (
                            <td className="class">{Element.value}</td>
                        ))}

                    </tr>
                    <tr>
                        <th className={day == "tuesday" ? "today_on" : "day"}>Tuesday</th>
                        {tuesday.map(Element => (
                            <td className="class">{Element.value}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className={day == "wednesday" ? "today_on" : "day"}>Wednesday</th>
                        {wednesday.map(Element => (
                            <td className="class">{Element.value}</td>
                        ))}

                    </tr>
                    <tr>
                        <th  className={day == "thursday" ? "today_on" : "day"}>Thursday</th>
                        {thursday.map(Element => (
                            <td className="class">{Element.value}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className={day == "friday" ? "today_on" : "day"}>Friday</th>
                        {friday.map(Element => (
                            <td className="class">{Element.value}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className={day == "saturday" ? "today_on" : "day"}>Saturday</th>
                        {saturday.map(Element => (
                            <td className="class">{Element.value}</td>
                        ))}
                    </tr>
                </tbody>
            </table></div>) : null}
            </div>
        </div>
    )

}
export default TimeTable;