let stroka= prompt("Your String","Alphabet" );
let count = 0;
let char = prompt("Your String","ABC" );
stroka.toString.toLowerCase;
char.toString.toLowerCase
console.log(stroka);
console.log("Letters: "+char)
for(let iter of stroka){
  for(let char_iter of char){
    if(iter == char_iter){
      count++;
    };
  };
};
console.log("Count:  "+count);
alert("Count of same letter:   "+count);
  