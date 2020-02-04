let arr = [];
let size = 20;
let iter = 0
while(iter<size){
    arr.push( Math.round( Math.random() * 100 ));
    iter++;
};
console.log(arr);
arr.forEach(element => {
    console.log(element)
});
  