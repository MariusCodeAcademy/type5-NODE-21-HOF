const students = [
  {
    name: 'Panatėja',
    surname: 'Sulindytė',
    faculty: 'Informatikos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Operacinės sistemos',
        credits: 6,
        marks: [10, 7, 7, 6, 9],
      },
      {
        title: 'Algoritmų analizė',
        credits: 9,
        marks: [8, 8, 6, 4, 6],
      },
      {
        title: 'Tikimybės ir Statistika',
        credits: 6,
        marks: [9, 7, 8, 9, 6],
      },
      {
        title: 'Inžinerinis projektas',
        credits: 3,
        marks: [10, 8, 9, 8],
      },
      {
        title: 'Kompiuterių architektūra',
        credits: 6,
        marks: [6, 8, 7, 8, 8],
      },
    ],
  },
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [7, 6, 9, 10, 8],
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [7, 8, 9, 4, 8],
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [6, 8, 10, 9, 9],
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [10, 8, 9, 8, 8],
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [6, 7, 8, 8, 8],
      },
    ],
  },
  {
    name: 'Laptokas',
    surname: 'Klavianskas',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [9, 8, 10, 9, 10],
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [9, 9, 10, 10, 8],
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [10, 10, 10, 9, 10],
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [9, 8, 9, 10, 10],
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [8, 9, 8, 10, 8],
      },
    ],
  },
  {
    name: 'Skaistė',
    surname: 'Kolbaitė',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [9, 9, 10, 9, 8],
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [10, 10, 10, 9, 9],
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [9, 9, 9, 9],
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [10, 9, 8, 10, 7],
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [9, 10, 10, 10, 9],
      },
    ],
  },
  {
    name: 'Cilindras',
    surname: 'Katalizatorius',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [6, 8, 9, 4, 8],
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [9, 8, 7, 8, 10],
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [7, 8, 9, 10, 6],
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [8, 9, 6, 4],
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [8, 7, 9, 5, 9],
      },
    ],
  },
  {
    name: 'Grandinius',
    surname: 'Varžauskas',
    faculty: 'Elektros ir elektronikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [8, 9, 9, 9, 9],
      },
      {
        title: 'Elektos grandinės',
        credits: 6,
        marks: [8, 7, 9, 9, 10],
      },
      {
        title: 'Elektros tinklai',
        credits: 6,
        marks: [9, 9, 8, 8, 10],
      },
      {
        title: 'Braižyba',
        credits: 6,
        marks: [6, 8, 9, 8, 7],
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [9, 9, 9, 10, 8],
      },
    ],
  },
];

/*
  1. Peržvelgti students masyvą, jeigu patogu susibraižyti ant lapo duoenų struktūras, kad būtų aiškiau kas kam priklauso.
  2. Peržiūrėti duomenis naršyklės konsolėje, jie pateikti naudojant console.table
  3. Pagal funkcijų aprašus implementuoti logiką ir pavaizduoti korektiška funkcijų veikimą.
    3.1 Naudoti Array.prototype metodus:
      3.1.1 - forEach
      3.1.2 - map
      3.1.3 - filter
      3.1.4 - reduce
      3.1.5 - sort
      3.1.6 - slice

  Užduotims atlikti galima patiems susigalvoti papildomas funkcijas, jas pasivadinti ir panaudoti.
  Taip pat galima ir labai skatintina naudoti jau aprašytas funkcijas kitų užduočių sprendimui. (Code reuse)
*/

const kiekStudentu = students.length;
// console.log('kiekStudentu ===', kiekStudentu);

// 1. atrinkti tik pirmo kurso studentus
//Psiaudo kodas
// 0. susikurti nauja svaru grazu tusia masyva reikemes susideti
const pirmakursiai = [];
// 1.sukti cikla per visa masyva, pasiimant kiekviena reiksme
students.forEach((studObj) => {
  // 2. ciklo metu turint sudento objekta as noriu patikrinti obj.course === 1
  if (studObj.course === 1) {
    // 2.a jei lygu tai as ta reiksme push i nauja masyva
    pirmakursiai.push(studObj);
  }
  // 2.b jei ne tai ... nieko
});
//3. ciklo pabaigoje turetume buti atrinke tik pirmo kurso studentus
// console.log('pirmakursiai ===', pirmakursiai);
const primakursiaiFilter = students.filter((studObj) => studObj.course === 1);
// console.log('primakursiaiFilter ===', primakursiaiFilter);

// 2. Atrenkame visus Informatikos fakulteto studentus
const informatikai = students.filter((studObj) => studObj.faculty === 'Informatikos fakultetas');
// console.log('informatikai ===', informatikai);

// 3. Atrenkame visus Elektros ir elektronikos fakulteto studentus

// 4. Graziname nauja masyva kuriame yra tik studento name, surname ir faculty.
const smallerStudetArray = students.map((studentObj) => {
  const { name, surname, faculty } = studentObj;
  const newObj = {
    name,
    surname,
    faculty,
    nameSurname: `${studentObj.name} ${studentObj.surname}`,
  };

  return newObj;
});
// console.log('smallerStudetArray ===', smallerStudetArray);

// students
// 5.0 sugeneruoti htmle, divo viduje mygtukus su visu studentu vardais.

// 5. surasti studenta vardu 'Cilindras' ir grazinti jo objekta
const cilObj = students.find((stObj) => stObj.name === 'Cilindras');
// console.log('cilObj ===', cilObj);

// 6. sukurti funkcija kuriai padavus pavarde ji grazina kelintame kurse mokosi studentas
// 6.0 sukti cikla per studentu ir ziurei ar kazkurio obj surnmae === duotai reiksmei
// 6.1 atrinkti studenta pagal pavarde
// 6.2 kai randam objekta,  grazinam kursa kuriame jis mokosi (stObj.course)
function getCourseBySurname(pavarde) {
  const foundStObj = students.find((stObj) => stObj.surname === pavarde);
  // console.log('foundStObj ===', foundStObj);
  if (foundStObj) {
    return foundStObj.course;
  }
  console.log('studentas pavarde', pavarde, 'nerastas');
}
const kursasV = getCourseBySurname('Varžauskas');
// console.log('kursasV ===', kursasV);
// 7. suskaiciuoti koks yra studento vardu 'Laptokas', 'Matematika' modulio vidurkis

// 8. parasysi funkcija kuriai padatus modulio objekta ji grazina pazymiu vidurki

// 9. sukuurti funkcija pavadinimu arrAvg(). ji gauna masyva kaip argumenta ir grazina jo vidurki.
// 1. sukti cikla per gauta masyva ir sudeti visus narius
// 2. grazinti visa benra suma padalinta is kiek yra masyve nariu

// 10 parasyti funkcija kuri grazina 3 skaiciu vidurki
// 10.1 funcijos vidueje panaudoti laikina kintamaji 'total' kuris butu lygus visu skaiciu sumai

function avg3(sk1, sk2, sk3) {
  let total = 0;
  total += sk1;
  total += sk2;
  total += sk3;
  console.log('total ===', total);
  const avg = total / 3;
  // console.log('avg ===', avg);
  return avg;
}

const avg1 = avg3(1, 2, 3);
console.log('avg1 ===', avg1);

function arrAvg(someArray) {
  let total = 0;
  someArray.forEach((sk) => {
    total += sk;
  });
  return total / someArray.length;
}

const avg11 = arrAvg([1, 2, 3]);
console.log('avg11 ===', avg11);
