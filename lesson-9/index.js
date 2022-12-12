// Array Methods ( dizi Metodlari )
// .find() .some() .every()

/*
.find()
Bir dizide bir elemanı bulmaya yarar. Ancak bulur bulmaz islemi durdurur.
Dizide sizin verdiginiz butun elemanları bulmaz. İlk buldugu elemanda durur ve döndürür.
*/

const urunler = [
  { id: 1, name: "Kalem", fiyat: 5 },
  { id: 2, name: "Defter", fiyat: 10 },
  { id: 3, name: "Silgi", fiyat: 7 },
  { id: 4, name: "Kalemtraş", fiyat: 8 },
];

//callback function'inin aldıgı parametre dizinin herbir elemanını temsil eder.
console.log("find:",urunler.find((urun) => urun.fiyat > 5));
// ilk buldugu elemanı döndürdü ve bıraktı.

//.some()

/*
Dizide en az bir eleman kosulu saglıyorsa true döner.
*/

console.log(urunler.some((urun) => urun.fiyat < 7)); // false

//.every()

/*
dizideki butun elemanların burada verdigimiz kosulu saglayıp
saglamadıgına bakıyor.
*/
console.log(urunler.every((urun) => urun.fiyat > 1)); // true

