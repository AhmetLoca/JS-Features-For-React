// Parameter Defaults

function topla(sayi1, sayi2) {
  return sayi1 + sayi2; // 3 + undefined
}

console.log(topla(3)); // NaN

//Parameter defaults

function topla2(sayi1, sayi2 = 4) {
  return sayi1 + sayi2; // 3 + 4
}

console.log(topla2(3)); // NaN

/*
React'ta reducer olustururken state'te baslangıc state'ti giriyoruz ve bunu orada kullanıyoruz
*/

const STATE_BASLANGIC = { yukleniyor : false, yazilar:[]};

const reducer =(state = STATE_BASLANGIC, action)=>{ // State degerine baslangic olarak STATE_BASLANGIC degeri atadik.
    return state;
}