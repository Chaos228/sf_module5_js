let a;
a = prompt();
a++;
if (isNaN(a)) {
  console.log("Упс, кажется, вы ошиблись");
}
else {
  if (a % 2 == 1) {
    console.log("число четное");
  }
  else {
    console.log("число не четное");
  }
}