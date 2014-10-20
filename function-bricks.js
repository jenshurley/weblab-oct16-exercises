/**
 * Created by Jen on 10/16/2014.
 */
function brickWall(small,large,total_length){
    //number of small, number of large, length of wall needing to be covered
   //brick units are numbers, total_length is feet
    //brick lengths to reflect actual brick standard lengths
   var small = small*2.25;
   var large = large*8;

    var smallfeet = small/12;
    var largefeet = large/12;

    if( (smallfeet+largefeet)>= total_length){
        return "Bricks will cover the length of the wall.";
    }else{
        return "You need more bricks."
     }

}

console.log(brickWall (20, 5, 8));

//do over using variables. add conversion before comparison.

