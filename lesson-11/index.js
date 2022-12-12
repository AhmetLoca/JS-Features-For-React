//.includes()
const isim = "Mehmet";
console.log(isim.includes("mehmet")); // false
/*
includes, buyuk kucuk harfe duyarli.
*/

//.toLowerCase()

const yeniIsim = isim.toLowerCase();

console.log(yeniIsim.includes("mehmet")); // true

const urunler = [
  { id: 1, name: "Kalem", fiyat: 5 },
  { id: 2, name: "Defter", fiyat: 5 },
  { id: 3, name: "Silgi", fiyat: 3 },
  { id: 4, name: "Kalemtiras", fiyat: 7 },
];

const arama = "KALEM";
console.log(
  urunler.filter((urun) =>
    urun.name.toLowerCase().includes(arama.toLowerCase())
  )
);
