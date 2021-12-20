let x;
x = "";    //необходимо изменить значение х
let y;
y = typeof(x);
console.log(y);
switch (y) {
  case "Number":
    console.log("x - число");
    break;
  case "boolean":
    console.log("x - boolean");
    break;
  case "string":
    console.log("x - строка");
    break;
  default:
    console.log("Тип x не определён");
}