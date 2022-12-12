// Array methods
// .filter()

const urunler = [
  { id: 1, name: "Kalem", fiyat: 5 },
  { id: 2, name: "Defter", fiyat: 5 },
  { id: 3, name: "Silgi", fiyat: 3 },
  { id: 4, name: "Kalemtiras", fiyat: 7 },
];

console.log(
  urunler
    .filter((urun) => urun.fiyat > 5)
    .map((urun) => `${urun.name} fiyati 5'ten buyuktur.`)
);

/*
filter dizi döndürüyor.
map'te bir dizi metotu.

filter'i map ile birlikte kullaniyoruz. bunlar birbirine chain olabilen metotlar.
 Bir listeyi önce filter'leyip arkasından ekrana yazdırmak istedigimizde kullaniyoruz.


*/
