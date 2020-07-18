function akaned(){
    event.preventDefault();
    var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    //  0         1           2           3           4           5           6
    var maleAkanName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
                    //      0       1           2       3       4       5       6
    var femaleAkanName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
                    //       0         1       2       3       4       5       6

    var day = parseInt(document.getElementById("day").value);
    alert(day);      //test
    var month = parseInt(document.getElementById("month").value);
    alert(month)     //test
    var year = document.getElementById("year").value;
    alert(year);     //test
    var gender = document.getElementById("gender").value;
    alert(gender);   //test


    var cc = parseInt(year.slice(0,2));
    var yy = parseInt(year.slice(2,4));
    alert(cc);          //test
    alert(yy);          //test

    var actualBirthDay = Math.abs(( ( (cc/4)-2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10))+day))%7;
    //confirm formula  //( ( (CC/4)-2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    // formula wrong on some dates //checked on calendars
    
    //Math.abs(( ( (cc/4)-2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10))+day)%7); 
    //on formular because of -ve values e.g 1st january 2020

    alert(actualBirthDay);               //give indices to dayOfWeek with decimals/reminders
    alert(Math.floor(actualBirthDay));   //give indices to dayOfWeek no decimals/reminders
    
    var akanDay = dayOfWeek[Math.floor(actualBirthDay)];  //value of index e.g. sunday etc
    alert(akanDay);                                       //test show days from dayOfWeek array  




}