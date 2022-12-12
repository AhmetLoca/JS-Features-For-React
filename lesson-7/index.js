// Rest / Spread Operator

/* 
bir fonksiyonun parametrelerini tek bir diziye atarken kullanırız.
*/

function topla(sayi1, sayi2, sayi3) {
  return sayi1 + sayi2 + sayi3;
}
const sayilar = [1, 2, 3];

//topla function'inin icine eger bir dizinin elemanlarını girmek istiyorsak
//spread operator'u ile girebiliyoruz.
console.log(topla(...sayilar));

/*
iki diziyi veya iki objeyi birleştirirken spread operatoru kullanabiliriz.
*/

const sayilar1 = [1, 2, 3];
const sayilar2 = [4, 5, 6];

const birlesmisDizi = sayilar1.concat(sayilar2);
console.log(birlesmisDizi);

const birlesmisDiziSpread = [...sayilar1, ...sayilar2];
console.log(birlesmisDiziSpread);

const user = { name: "Ahmet", age: 25 };
const address = { city: "Istanbul", district: "Levent" };

const birlesmisObje = { ...user, ...address };

console.log(birlesmisObje);
