const numbers = [1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45];

function arrAvg(someArray) {
  let total = 0;
  someArray.forEach((sk) => {
    total += sk;
  });
  return total / someArray.length;
}
const numbersVIdurkis = arrAvg(numbers);
console.log('numbersVIdurkis ===', numbersVIdurkis);

// 1. sugeneruoti rikiuota sarasa is numbers masyvo reiksmiu ir ideti i html
function makeListOfArray(arr, dest) {
  const olEl = document.createElement('ol');
  arr.forEach((sk) => {
    const liEl = document.createElement('li');
    liEl.textContent = sk;
    olEl.append(liEl);
  });
  dest.append(olEl);
}
const sarEl = document.getElementById('sarasas');
// makeListOfArray(numbers, sarEl);

function makeListOfArrayInner(arr, dest) {
  let string = '<ol>';
  arr.forEach((sk) => {
    string += `<li>${sk}</li>`;
  });
  string += '</ol>';
  dest.innerHTML = string;
  const better = `
  <ol>
  ${arr.map((sk) => `<li>${sk}</li>`).join('')}
  </ol>
  `;
  dest.innerHTML = better;
}
makeListOfArrayInner(numbers, sarEl);
// 2. grazinti objektu masyva kuriu key yra 'reiksme' o value yra masyvo reiksme
// [
//   {reiksme: 1},
//   {reiksme: 2},
//   ...
// ]

//  3. Sukurkite ir atvaizduokite masyvą su dvigubomis reikšmėmis;
const double = numbers.map((sk) => sk * 2);
console.log('double ===', double);

//  4. Sukurkite ir atvaizduokite masyvą su kvadratu pekltomis reikšmėmis;

//  5. Sukurkite ir atvaizduokite masyvą su reikšmėmis padaugintomis iš jų vietos masyve indekso

//  6. Atrinkti tiktai teigimų elementų masyvą

//  7. Atrinkti tiktai neigiamų elementų masyvą

// 13. Atrinkti kas antrą elementą į naują masyvą

// 14. Atrinkti kas penktą elementą į naują masyvą

// 15. atrinkti reiksme kuri lygi -16, grazinti/atspausdinti jos indexa

// 18. Rasti didžiausią skaičių masyve

// 19. Rasti mažiausią skaičių masyve
