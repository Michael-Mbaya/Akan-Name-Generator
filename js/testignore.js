
   function formula1(){
    var cc = parseInt(year.slice(0,2));
    var yy = parseInt(year.slice(2,4));
    alert(cc);          //test
    alert(yy);          //test
    var actualBirthDay = Math.abs(( ( (cc/4)-2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10))+day))%7;
   //  confirm formula          //( ( (CC/4)-2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
   //  formula wrong on some dates //checked on calendars
    
   //  Math.abs(( ( (cc/4)-2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10))+day)%7); 
   //  on formular because of -ve values e.g 1st january 2020

    alert(actualBirthDay);               //give indices to dayOfWeek with decimals/reminders
    alert(Math.floor(actualBirthDay));   //give indices to dayOfWeek no decimals/reminders
    
    var akanDay = dayOfWeek[Math.floor(actualBirthDay)];  //value of index e.g. sunday etc
    alert(akanDay);                                       //test show days from dayOfWeek array  
   }
   
   
   function formula2(){
     var a =Math.floor( (14 - month) / 12);
                                  
     var y = year - a;                   

     var m = month + 12 * a - 2;

     var d = ( day + y +Math.floor( y / 4) - Math.floor(y / 100)  + Math.floor( year / 400 ) + Math.floor((31 * m / 12)) % 7 );
     // 
}