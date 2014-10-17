/**
 * Created by Jen on 10/16/2014.
 */
function coverBricks(small,large,total_length){
    //number of small, number of large, length of wall needing to be covered
   //brick units are numbers, total_length is feet
    //changing brick lengths to reflect actual brick standard lengths
    if( (((small*2.25)+(large*8))/12)>= total_length){
        return "true";
    }else{
        return "false"
     }

}

console.log(coverBricks (10, 10, 90));

//do over using variables. add conversion before comparison. extensible?

