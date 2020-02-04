let name= prompt("Your Name","Nastia" );
let textHi = "Hi ";
let textPrivet = "Privet ";
let textBye = "Bye ";
let changeName = function(yourName,hi){alert(hi+yourName)};
function changeYourName(yourName,hi){
    alert(hi+ yourName);
}
var changeNameTwo = new Function('yourname,bye', ' confirm(bye+yourname); ');
changeName(name,textHi);
changeYourName(name,textPrivet);
changeNameTwo(name, textBye)

  