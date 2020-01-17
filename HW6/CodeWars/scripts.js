// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript Сдесь подсмотрел, незнал как сделать.
// function minSum(arr) {
//     const sorted=arr.sort((a,b) => a-b);
//     let sum = 0;
//     for (let i=0;i<arr.length/2;i++){
//     sum+=sorted[i]*sorted[sorted.length-1-i]
//     }
//     return sum;
//   }

// minSum([5,2,4,3])
// minSum([12,6,10,26,3,24])
// minSum([9,2,8,7,5,4,0,6])



// https://www.codewars.com/kata/55c28f7304e3eaebef0000da/train/javascript Сделал сам.
function createArray(number){
    var newArray = [];
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
      }
      return newArray;
  }
  createArray(3);
  
  
  // https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript Сделал сам.
  function getMiddle(s){
    let a = s.split("")
    let d;
    let c;
      if(a.length%2==0){
          for(let i = 0; i< a.length/2; i++){
              d = a[i];
              }
          for(let i = 0; i< a.length/2; i++){
              c = a[i+1];
              }
          return d+c;
      }else{
          for(let i = 0; i< a.length/2; i++){
              d = a[i];
              }
          return d;
          
      }
  }
  getMiddle("testt");
  