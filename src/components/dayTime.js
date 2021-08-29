const dayTime = () => {
    var time = new Date().toLocaleTimeString("en-IN", { weekday: 'long', timeZone: 'Asia/Kolkata', hourCycle: 'h24' });
    var time2 = time.split(",");
    var timeFinal = time2[1];
    var hour = parseInt(timeFinal.split(":")[0]);
    //  hour = 13;
    var day = time2[0].toLowerCase();
    // day = "saturday";
    var dayTime = new Map();
    dayTime.set("hour", hour);
    dayTime.set("day", day);
    return dayTime;
}
module.exports = dayTime;