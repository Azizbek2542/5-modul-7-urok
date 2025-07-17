let boshlangichArray = [2, 4, 9, 10, 45, 67, 8, 90];
let juftArray = [];

console.log(boshlangichArray, "boshlanishdagi array")

for (let i = 0; i < boshlangichArray.length; i++) {
  if (boshlangichArray[i] % 2 === 0) {
    juftArray.push(boshlangichArray[i]);
  }
}

console.log(juftArray, "juft sonlarga ajratilgan array");
