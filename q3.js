let str = "Hello";
console.log(str);
let str1;
str1 = "";
let n = str.length;

for (let i = 0 ; i < n; i++){
  str1 = str1 + str[n - 1 - i];
}
console.log(str1);