let arr1=[4,8,9,2,1,5];
const temp=arr1.sort((a,b)=>a-b);
const reverse=temp.sort((a,b)=>a+b);
console.log(temp);
console.log(reverse);