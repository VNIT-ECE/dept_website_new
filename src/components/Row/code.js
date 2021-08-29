const classes = (sem) => {
  const dayTimeData = require('../dayTime');
  const dayTime = dayTimeData();
  var day = dayTime.get("day");
  var hour = dayTime.get("hour");

  // var day = "thursday"
  // console.log(time);
  // console.log(day);

  const timeTableData = require('../timeTableData');
  const timeTable = timeTableData(sem);

  const monday = timeTable.get("monday");
  const tuesday = timeTable.get("tuesday");
  const wednesday = timeTable.get("wednesday");
  const thursday = timeTable.get("thursday");
  const friday = timeTable.get("friday");
  const saturday = timeTable.get("saturday");


  var current;
  var upcoming;
  var hour2 = hour;

  if (day == "monday") {
    current = monday.get(hour);
    if (current == undefined) {
      current = "No Ongoing Class";
    }
    while (true) {
      hour2 += 1;
      if (hour2 >= 16) {
        upcoming = "No Upcoming Class";
        break
      }
      if (monday.get(hour2) != undefined && monday.get(hour2) != "Break" && monday.get(hour2) != "-") {
        upcoming = monday.get(hour2);
        break
      }
    }
  } else if (day == "tuesday") {
    current = tuesday.get(hour);
    if (current == undefined) {
      current = "No Ongoing Class";
    }
    while (true) {
      hour2 += 1;
      if (hour2 >= 16) {
        upcoming = "No Upcoming Class";
        break
      }
      if (tuesday.get(hour2) != undefined && tuesday.get(hour2) != "Break" && tuesday.get(hour2) != "-") {
        upcoming = tuesday.get(hour2);
        break
      }
    }
  } else if (day == "wednesday") {
    current = wednesday.get(hour);
    if (current == undefined) {
      current = "No Ongoing Class";
    }
    while (true) {
      hour2 += 1;
      if (hour2 >= 16) {
        upcoming = "No Upcoming Class";
        break
      }
      if (wednesday.get(hour2) != undefined && wednesday.get(hour2) != "Break" && wednesday.get(hour2) != "-") {
        upcoming = wednesday.get(hour2);
        break
      }
    }
  } else if (day == "thursday") {
    current = thursday.get(hour);
    if (current == undefined) {
      current = "No Ongoing Class";
    }
    while (true) {
      hour2 += 1;
      if (hour2 >= 16) {
        upcoming = "No Upcoming Class";
        break
      }
      if (thursday.get(hour2) == "Break") {
        continue;
      } else if (thursday.get(hour2) != undefined && thursday.get(hour2) != "Break" && thursday.get(hour2) != "-") {
        upcoming = thursday.get(hour2);
        break
      }
    }
  } else if (day == "friday") {
    current = friday.get(hour);
    if (current == undefined) {
      current = "No Ongoing Class";
    }
    while (true) {
      hour2 += 1;
      if (hour2 >= 16) {
        upcoming = "No Upcoming Class";
        break
      }
      if (friday.get(hour2) != undefined && friday.get(hour2) != "Break" && friday.get(hour2) != "-") {
        upcoming = friday.get(hour2);
        break


      }
    }
  } else if (day == "saturday") {
    current = saturday.get(hour);
    if (current == undefined) {
      current = "No Ongoing Class";
    }
    while (true) {
      hour2 += 1;
      if (hour2 >= 16) {

        upcoming = "No Upcoming Class";
        break
      } if (saturday.get(hour2) != undefined && saturday.get(hour2) != "Break" && saturday.get(hour2) != "-") {
        upcoming = saturday.get(hour2);
        break
      }
    }
  } else if (day == "sunday") {
    current = "No Ongoing Class";
    upcoming = "No Upcoming Class";
  }
  if (hour2 > 12) {
    hour2 -= 12;
  }
  if (hour > 12) {
    hour -= 12;
  }
  hour = hour + ":00";
  hour2 = hour2 + ":00";
  if (current == "No Ongoing Class") {
    hour = "-"
  }
  if (upcoming == "No Upcoming Class") {
    hour2 = "-"
  }
  if (current == "Break" || current == "-") {
    current = "No Ongoing Class";
    hour = "-";
  }
  //  if(upcoming == "Break"){
  //   upcoming = "No Upcoming Class";
  //   hour2 = "-";
  //  }

  var link = new Map();
  link.set("WA", "https://vnit.webex.com/meet/akothari");
  link.set("CE", "https://vnit.webex.com/join/punitbhavsar");
  link.set("MI", "https://vnit.webex.com/meet/ksurender");
  link.set("ES", "https://vnit.webex.com/meet/manishaparlewar.aapp");
  link.set("AC", "https://vnit.webex.com/meet/ankitbhurane");
  link.set("Algo", undefined);
  link.set("DE", undefined);
  link.set("OOP", "https://vnit.webex.com/webappng/sites/vnit/meeting/download/33faa2bc954945be903d03774968c5f1?siteurl=vnit&MTID=m9a5881adbde3a43ef8c2222eaf0f03e7");
  link.set("SNS", "https://vnit.webex.com/webappng/sites/vnit/meeting/download/3b01b938787142a5a64f9119e89aaa7f?siteurl=vnit&MTID=md957e7ef52aba56aa4898f01e6fead2d");
  link.set("LA", "https://meet.google.com/prc-ritw-nzm");
  link.set("EDC", "https://vnit.webex.com/vnit/j.php?MTID=m06e1aa771a3ab1112376ea9faf418e84");
  link.set("LNT", "https://vnit.webex.com/webappng/sites/vnit/meeting/download/3d6bfd19e84246d1a9d98f183a1c7fb0?siteurl=vnit&MTID=m8fc9c7224f43a2c8e8536d980563d09d");
  link.set("OC", undefined);
  link.set("HM", "https://vnit.webex.com/webappng/sites/vnit/meeting/download/4223742e146246838da9eb94e08b3d03?siteurl=vnit&MTID=m530577f890c994d8c7fab736bf969539");
  link.set("SNS(B1)", "https://vnit.webex.com/webappng/sites/vnit/meeting/download/51d126d1845443279af9eed95619aac0?siteurl=vnit&MTID=m271ae52fff9542d2e0c3c4a30c62d758");
  link.set("SNS(B2)", "https://vnit.webex.com/webappng/sites/vnit/meeting/download/51d126d1845443279af9eed95619aac0?siteurl=vnit&MTID=m271ae52fff9542d2e0c3c4a30c62d758");
  link.set("SNS(B3)", "https://vnit.webex.com/webappng/sites/vnit/meeting/download/51d126d1845443279af9eed95619aac0?siteurl=vnit&MTID=m271ae52fff9542d2e0c3c4a30c62d758");
  link.set("SNS(B4)", "https://vnit.webex.com/webappng/sites/vnit/meeting/download/51d126d1845443279af9eed95619aac0?siteurl=vnit&MTID=m271ae52fff9542d2e0c3c4a30c62d758");
  link.set("EDC(Lab)", "https://vnit.webex.com/webappng/sites/vnit/meeting/download/5d4e609d6f54455cb42b2ede0466232c?siteurl=vnit&MTID=me940889a64a1d82e4c63f8d40e53ebec");
  

  var linkOn = link.get(current);
  var linkUp = link.get(upcoming);

  var data = { "ongoingClass": current, "ongoingClassTime": hour, "ongoingLink": linkOn, "upcomingClass": upcoming, "upcomingClassTime": hour2, "upcomingLink": linkUp };

  return data;
}

module.exports = classes;