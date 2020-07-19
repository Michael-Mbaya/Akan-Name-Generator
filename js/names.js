function akaned(){
    event.preventDefault();
    var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    //  0         1           2           3           4           5           6
    var maleAkanName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
                    //      0       1           2       3       4       5       6
    var femaleAkanName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
                    //       0         1       2       3       4       5       6

    var day = parseInt(document.getElementById("day").value);
    // alert(day);      //test
    var month = parseInt(document.getElementById("month").value);
    // alert(month)     //test
    var year = document.getElementById("year").value;
    // alert(year);     //test
    var gender = document.getElementById("gender").value;
    // alert(gender);   //test

    var date = new Date(year +"/" + month + "/"+day);
    var actualBirthDay = date.getDay();
    // alert(actualBirthDay);                          //show index of week/sun=0 to sat=6
    var akanDay = dayOfWeek[actualBirthDay];        //value of index from dayOfWeek
    // alert(akanDay);                          //test show days for various dates //correct on dates

   function testignore(){
    // var cc = parseInt(year.slice(0,2));
    // var yy = parseInt(year.slice(2,4));
    // alert(cc);          //test
    // alert(yy);          //test
    // var actualBirthDay = Math.abs(( ( (cc/4)-2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10))+day))%7;
    //confirm formula  //( ( (CC/4)-2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    // formula wrong on some dates //checked on calendars
    
    //Math.abs(( ( (cc/4)-2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10))+day)%7); 
    //on formular because of -ve values e.g 1st january 2020

    // alert(actualBirthDay);               //give indices to dayOfWeek with decimals/reminders
    // alert(Math.floor(actualBirthDay));   //give indices to dayOfWeek no decimals/reminders
    // 
    // var akanDay = dayOfWeek[Math.floor(actualBirthDay)];  //value of index e.g. sunday etc
    // alert(akanDay);                                       //test show days from dayOfWeek array  
   }

  var invalidMonth = ( month<1 || month>12 || ((document.getElementById("month").value)=="") );        
            //above boolean: month is <1 or >12 or empty
  var invalidDay = ( day<1 || day>31 || ((document.getElementById("day").value)=="") );                
            //above boolean: day is <1 or >31 or empty  
  var invalidYear = (  year<1 || ( year>( new Date().getFullYear() ) ) || ((document.getElementById("year").value)=="") );
           //above boolean: year is <1 or >current year or empty
  var invalidGender = ( (gender=="selectdefault") );
           //above boolean: gender is 'selectdefault' i.e no chosen gender of female or male
  var invalidAll = ((invalidDay==true)&&(invalidMonth==true)&&(invalidYear==true)&&(invalidGender==true));
           //above boolean is true if all inputs(day,month,year and gender) are wrong
  var validFemale = ((invalidDay==false)&&(invalidMonth==false)&&(invalidYear==false)&&(gender==="Female"));
           //above boolean: day and month and year are all correct and gender='Female'  
  var validMale = ((invalidDay==false)&&(invalidMonth==false)&&(invalidYear==false)&&(gender==="Male"));
           //above boolean: day and month and year are all correct and gender='Male' 
  var febDates = ( ((month===2)&&(day==30)) || ((month===2)&&(day==31)) );
           //above boolean: check for feb 30 and feb 31 inputs (non-existing dates) 
  var aprJune =  ( ((month===4)&&(day==31)) || ((month===6)&&(day==31)) );
           //above boolean: check for apr 31 and June 31 inputs (non-existing dates)
  var septOct =  ( ((month===9)&&(day==31)) || ((month===11)&&(day==31)) );
           //above boolean: check for Sept 31 and Nov 31 (non-existing dates)
  
    if ( invalidAll==true ) {
     document.getElementById('result').textContent = "*Kindly Enter all Details Correctly!";
     document.getElementById("result").style.color = "red";
     document.getElementById("resultintro").style.display = "none";
    }
   else if( invalidDay ) {  
     document.getElementById('result').textContent = "*Please enter a Valid Day Number from 1 - 31";
     document.getElementById("result").style.color = "red";      
     document.getElementById("resultintro").style.display = "none";
   }
   else if ( invalidMonth==true ) {
     document.getElementById('result').textContent = "*Please enter a Valid Month Number from 1 - 12";
     document.getElementById("result").style.color = "red";
     document.getElementById("resultintro").style.display = "none";
    }
   else if ( invalidYear==true ) {
     document.getElementById('result').textContent = "*Please enter a Valid Year or Current Year";
     document.getElementById("result").style.color = "red";
     document.getElementById("resultintro").style.display = "none";
    }
   else if ( invalidGender==true ) {
     document.getElementById('result').textContent = "*please select a gender in order to get your Akan name";
     document.getElementById("result").style.color = "red";
     document.getElementById("resultintro").style.display = "none";
     }
   else if ( (febDates==true) || (aprJune==true) ||(septOct==true) ) {
     document.getElementById('result').textContent = "*Please Select an existing Date.";
     document.getElementById("result").style.color = "red";
     document.getElementById("resultintro").style.display = "none";
     }
   else if ( validFemale==true ) {
     document.getElementById('result').textContent = "You were born on "+ akanDay+ " and your Akan name is " +femaleAkanName[actualBirthDay];
     document.getElementById("result").style.color = "white";     
     document.getElementById("resultintro").style.display = "none";
    }
   else if ( validMale==true) {
     document.getElementById('result').textContent = "You were born on "+ akanDay+ " and your Akan name is " +maleAkanName[actualBirthDay];
     document.getElementById("result").style.color = "white";    
     document.getElementById("resultintro").style.display = "none";
    }
   else {
     alert("Wow!!! It Seems You are either an old Being with no known date of birth or from the Future! Cannot Compute your Akan Name");
    }

}