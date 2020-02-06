let name= prompt("Your Name","Amigo" );
let textHi = "Hi ";
let textPrivet = "Privet ";
let textBye = "Bye ";
let changeName = function(yourName,hi){
    hi = hi+yourName
    alert(hi)};
function changeYourName(yourName,hi){
    hi = hi+yourName
    alert(hi);
}
var changeNameTwo = new Function('yourname,bye', ' confirm(bye+yourname); ');
function MyArray(...args) {
    for (i = 0; i < args.length; i++) {
        if (args[i] == 1) { // Проверка на наличие числа 1 в массиве
            return console.log("Число 1")
        } ;
    };
  };
function MyDefaultArray(a,r,g = 3) {
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] == 1) { // Проверка на наличие числа 1 в массиве
            return console.log("Число 2")
        }; 
    };
  };

MyArray(4,1,6,0);
MyDefaultArray(1,4);
changeName(name,textHi);
changeYourName(name,textPrivet);
changeNameTwo(name, textBye)

  