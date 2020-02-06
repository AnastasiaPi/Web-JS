let stroka= prompt("Your String","Alphabet" );
let count = 0;
let char = prompt("Your String","ABC" );
console.log(stroka);
console.log("Letters: "+char)
function Search_count(str, ch, ct){
  str.toString.toLowerCase;
  ch.toString.toLowerCase;
  for(let iter of str){
    for(let char_iter of ch){
      if(iter == char_iter){
        ct++;
      };};};
  return ct;
};
count = Search_count(stroka,char, count);
console.log("Count:  "+count);
alert("Count of same letter:   "+count);
  