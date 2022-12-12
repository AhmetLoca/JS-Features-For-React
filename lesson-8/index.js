// Ternary Conditional Operators

//dogruysa bolumu tek bir ifade olmak zorunda.
// kosul ? dogruysa : yanlissa;

//if'in içerisi tek bir ifade degilse if kullanilir.
// if(kosul){
//     dogruysa
// }else{
//     yanlissa
// }

const koprununDurumu = "Tadilat var";

koprununDurumu === "open"
  ? console.log("Kopru Open")
  : koprununDurumu === "close"
  ? console.log("Kopru close")
  : console.log(koprununDurumu);

/*
  null
  NaN
  0
  ""
  undefined
  ifadelerini bize false döndürür.
  
 dolu string true dondurur. boş string false dondurur.
  {} ve [] de true döndürür.

  const deger = [];
  deger.length ? console.log("sayi gecerli") : console.log("sayi gecersiz");

  //sayi gecersiz. Çünkü array'in içinde hiçbir eleman yok.

ornek2

const deger = {};

  Object.keys(deger).length ? console.log("sayi gecerli") : console.log("sayi gecersiz");

  //Object.keys dizi döndürür.
  */

const sayi = 0;
sayi ? console.log("sayi gecerli") : console.log("sayi gecersiz");
