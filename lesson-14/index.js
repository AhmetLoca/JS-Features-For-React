//Array methods

// .reduce()

const urunler = [
  { id: 1, name: "Kalem", fiyat: 5 },
  { id: 2, name: "Defter", fiyat: 5 },
  { id: 3, name: "Silgi", fiyat: 3 },
  { id: 4, name: "Kalemtiras", fiyat: 7 },
];

/*
  .reduce -> verilen dizinin elemanlari üzerinde reducer olarak
  adlandırabilecegimiz bir callback fonksiyonu uyguluyor. 
  Bu fonksiyonu döndürdüğü sonuc herbir döngüde hatırlaniyor.
   Ve bir sonraki döndürülen sonuc bir öncekine ekleniyor.
    reduce 4 adet parametre alır.  ancak ilk 2sini kullaniriz.

    1.accumulator -> her döngüden cıkan sonucun toplandıgı deger
    diziyse dizi, string'se string
 
    2.current value -> sırası gelen dizi degeri

      1.elemandaysak birinci objeyi verir...

    3.index -> sırası gelen degerin dizideki konumu

    4.source array -> üzerinde reduce uyguladigimiz dizi.

    reduce metodu callback function'dan hemen sonra 
    2.parametre olarak baslangıc degeri de alır.
    Örneğin, Bir toplama işlemi yaptıracaksınız mesela urunlerin 
    içerisindeki fiyatların hepsini birbirine toplayıp sayı olarak
    cıktı vermek istiyorsunuz. Reduce içindeki callback function'dan
    hemen sonra toplama işleminin kaçtan başladıgını yazabilirsiniz.
    Veya string'leri birbirine ekleyecekseniz string'in ne ile başlamanasını
    ortaya belirtebilrisiniz.

    Veya bu bir dizi ise ve dizinin balangıc elemanları varsa bunu
    orada belirtebilirsiniz.
    */

//toplam degeri hatırlıyor. Bir önceki döngüden gelen degeri

const toplamUrunFiyati = urunler.reduce(
  (toplam, urun) => (toplam = toplam + urun.fiyat),
  0
);

console.log(toplamUrunFiyati);

//toplam -> degerlerin tutulacagı yer. accumulator
//urun -> herbir degeri ifade eden degisken
const toplamString = urunler.reduce(
  (toplam, urun) => (toplam = `${toplam} ${urun.name}`),
  "Urun Isimleri:"
); //baslangıc degeri

console.log(toplamString);

const toplamDizi = urunler.reduce(
  //yeni bir diziye bir öncekinden gelen degeleri atadık
  //ve uzerine urunun ismini ekledik.
  (toplam, urun) => (toplam = [...toplam, urun.name]),
  []
);

console.log(toplamDizi);

//map ile

const toplamDizi2 = urunler.map((urun) => `${urun.name} ${urun.fiyat} TL`);

console.log(toplamDizi2);
