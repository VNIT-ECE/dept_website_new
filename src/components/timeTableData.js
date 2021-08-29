const timeTableData = (sem) =>{

    if (sem === 3){

        var monday = new Map();
        monday.set(9,"-");
        monday.set(10,"EDC");
        monday.set(11,"OOP");
        monday.set(12,"LA");
        monday.set(13,"Break");
        monday.set(14,"SNS");
        monday.set(15,"-");
        monday.set(16,"-")
        monday.set(17,"SNS(B3)")
    
        var tuesday = new Map();
        tuesday.set(9,"-");
        tuesday.set(10,"SNS");
        tuesday.set(11,"LNT");
        tuesday.set(12,"-");
        tuesday.set(13,"Break");
        tuesday.set(14,"-");
        tuesday.set(15,"OOP");
        tuesday.set(16,"-");
        tuesday.set(17,"SNS(B4)");
    
        var wednesday = new Map();
        wednesday.set(9,"-");
        wednesday.set(10,"LA");
        wednesday.set(11,"EDC");
        wednesday.set(12,"OOP");
        wednesday.set(13,"Break");
        wednesday.set(14,"HM");
        wednesday.set(15,"LNT");
        wednesday.set(16,"SNS(B6)");
        wednesday.set(17,"SNS(B5)");
    
        var thursday = new Map();
        thursday.set(9,"-");
        thursday.set(10,"HM");
        thursday.set(11,"SNS");
        thursday.set(12,"LNT");
        thursday.set(13,"Break");
        thursday.set(14,"LA");
        thursday.set(15,"EDC");
        thursday.set(16,"EDC(Lab)");
        thursday.set(17,"SNS(B1)");
    
        var friday = new Map();
        friday.set(9,"OOP");
        friday.set(10,"LA");
        friday.set(11,"LNT");
        friday.set(12,"EDC");
        friday.set(13,"Break");
        friday.set(14,"-");
        friday.set(15,"HM");
        friday.set(16,"-");
        friday.set(17,"SNS(B2)");
    
        var saturday = new Map();
        saturday.set(9,"-");
        saturday.set(10,"-");
        saturday.set(11,"-");
        saturday.set(12,"SNS");
        saturday.set(13,"OC");
        saturday.set(14,"-");
        saturday.set(15,"-");
        saturday.set(16,"-");
        saturday.set(17,"-");
    
        }

    if (sem === 5){

    var monday = new Map();
    monday.set(9,"-");
    monday.set(10,"ES");
    monday.set(11,"CE");
    monday.set(12,"DE");
    monday.set(13,"Break");
    monday.set(14,"WA");
    monday.set(15,"-");
    monday.set(16,"-")
    monday.set(17,"-")

    var tuesday = new Map();
    tuesday.set(9,"Algo");
    tuesday.set(10,"WA");
    tuesday.set(11,"AC");
    tuesday.set(12,"MI");
    tuesday.set(13,"Break");
    tuesday.set(14,"-");
    tuesday.set(15,"CE");
    tuesday.set(16,"-")
    tuesday.set(17,"-")

    var wednesday = new Map();
    wednesday.set(9,"DE");
    wednesday.set(10,"-");
    wednesday.set(11,"ES");
    wednesday.set(12,"CE");
    wednesday.set(13,"Break");
    wednesday.set(14,"Algo");
    wednesday.set(15,"AC");
    wednesday.set(16,"-")
    wednesday.set(17,"-")

    var thursday = new Map();
    thursday.set(9,"MI");
    thursday.set(10,"Algo");
    thursday.set(11,"WA");
    thursday.set(12,"AC");
    thursday.set(13,"Break");
    thursday.set(14,"DE");
    thursday.set(15,"ES");
    thursday.set(16,"-")
    thursday.set(17,"-")

    var friday = new Map();
    friday.set(9,"CE");
    friday.set(10,"DE");
    friday.set(11,"MI");
    friday.set(12,"ES");
    friday.set(13,"Break");
    friday.set(14,"-");
    friday.set(15,"-");
    friday.set(16,"-")
    friday.set(17,"-")

    var saturday = new Map();
    saturday.set(9,"AC");
    saturday.set(10,"MI");
    saturday.set(11,"Algo");
    saturday.set(12,"WA");
    saturday.set(13,"Break");
    saturday.set(14,"-");
    saturday.set(15,"-");
    saturday.set(16,"-")
    saturday.set(17,"-")
    
    }

    const timeTable = new Map();
    timeTable.set("monday",monday);
    timeTable.set("tuesday",tuesday);
    timeTable.set("wednesday",wednesday);
    timeTable.set("thursday",thursday);
    timeTable.set("friday",friday);
    timeTable.set("saturday",saturday);

    return(timeTable);
}
module.exports = timeTableData;
