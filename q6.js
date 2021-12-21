let arr = [3, 2, 3, 4, 5, 6, 1, 3];
let n;
n = arr.length;
console.log(n);
for(let x = 0; x < n; x++) {
  for (let y = 0; y < n; y++) {
    if (x != y) {
      if (arr[x] == arr[y]){
        let a = x +1;
        let b = y + 1;
        console.log("Элемент №" + a + " равен элементу №" + b);
      }
    }
    else {
      break;
    }
  }
}