//Array methods - .map()

/* map metodu verilen dizi elemanlarına girilen callback fonksiyonunu uygular
ve elde edilen sonuclarla yeni bir dizi olusturur.

map ile forEach'in farkı : map yeni bir dizi dondurur. forEach dondurmez. */

const urunler = [
  { id: 1, name: "Kalem", fiyat: 5 },
  { id: 2, name: "Defter", fiyat: 5 },
  { id: 3, name: "Silgi", fiyat: 3 },
  { id: 4, name: "Kalemtiras", fiyat: 7 },
];

const urunOlusturucu = (urun) => `${urun.name} fiyati ${urun.fiyat} liradir`;

//bu parametre herbir urunu temsil ediyor.
console.log(urunler.map(urunOlusturucu));

//React için

 //urunListesi prop'lardan gelsin ve biz bunu destrucuring yapalim.
function UrunGoster({urunListesi}){
    return urunListesi.map( (urun,index) => <li key={index}>{urun.name} fiyati {urun.fiyat} liradir.</li>)
}
