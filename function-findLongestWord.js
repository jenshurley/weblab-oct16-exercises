/**
 * Created by Jen on 10/16/2014.
 */

function findLongestWord(str){
    var longest="";
    //intializing and setting longest as empty string
    var words = str.trim().split(" ");
    //use split command to split on a ****SPACE***! get array of words.

    for(var i=0; i<words.length;i++){
        /*as we go through each words, each time different - run n times based on string
         need to start adding it into this counts*/
        var word = words[i];

        /*if the words.length just run through the loop is > the prev word run through,
        store value of that one. reassign longest*/
        //conditional clause here
       if(word.length > longest.length){
           longest = word;

       }
    }


return longest;
}

console.log(findLongestWord("do the conversions first"));
