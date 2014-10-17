/**
 * Created by Jen on 10/16/2014.
 */
function isSpeeding(speed,isBirthday){

    if (isBirthday){
        speed = speed - 5;
    }

     if(speed <=60 ){
       console.log("0");
     }else if (speed >60 && speed<=80 ) {
         console.log("1");
    }else if (speed >=80) {
         console.log("2");
    }
}

isSpeeding(83,false);


