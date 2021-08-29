import { useEffect, useState } from 'react'
import RowComp from './classesRow/rowComp'

const classes = require('./code');
const dayTime = require('../dayTime')
var timeDate = dayTime();
var hour = timeDate.get("hour")

const Row = ({sem}) => {

    const [onClass, setOnClass] = useState("");
    const [onTime, setOnTime] = useState("");
    const [onLink, setOnLink] = useState("");
    const [upClass, setUpClass] = useState("");
    const [upTime, setUpTime] = useState("");
    const [upLink, setUpLink] = useState("");

    const setter = () => {
        timeDate = dayTime();
        hour = timeDate.get("hour")
    }
    setInterval(setter,1)
    useEffect(()=>{
        var data = classes(sem);
        setOnClass(data.ongoingClass);
        setOnTime(data.ongoingClassTime);
        setOnLink(data.ongoingLink);
        setUpClass(data.upcomingClass);
        setUpTime(data.upcomingClassTime);
        setUpLink(data.upcomingLink);
    },[sem,hour])
    return (
        <section id="timetable">
            <div className="mx-auto text-center my-10">
                <div className="text-3xl sm:text-5xl font-bold text-black">Time Table</div>
                <p className=":text-lg text-black font-normal mt-5 px-16">Get important books, notes, youtube channel, assignment and syllabus at one place.</p>
            </div>
            <RowComp row_type="ONGOING CLASS" class_name={onClass} time_of_class={onTime} join_link={onLink} button_status={(onClass === "No Ongoing Class") ? 0 : 1}></RowComp>
            <RowComp row_type="UPCOMING CLASS" class_name={upClass} time_of_class={upTime} join_link={upLink} button_status={(upClass === "No Upcoming Class") ? 0 : 1} ></RowComp>
        </section>
    )
}
export default Row;