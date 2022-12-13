// promises and async / await

/*
promise -> sonucu olumlu veya olumsuz gelecekte belli olacak bir
işlemi ifade ediyor. Bir kaynaga baglanıp veri alıyorsunuz ornegin
ve ne zaman sonuclanacagını bilmiyorsunuz bu işlemin.

promise olarak olusturdugunuzda bu işlem javascript'teki
callstack'in en sonuna atılıyor.

Dolayısıyla sizin senkronize olan kodlarınız block'lanmadan tamamlanıyor.
En son callstack'in sonunda kalan promise neyse ne zaman sonuclanırsa o zaman
sonuclanıyor.

Bu sayede, olusturdugunuz async kodlar kodunuzu engellemiyor.
*/

//constructor functions ( new Object, new Array...)
const veriGetir = new Promise((resolve, reject) => {
  const veriGeldiMi = false;
  if (veriGeldiMi) {
    resolve("Basarili");
  } else {
    reject("Basarisiz");
  }
});

veriGetir.then((res) => console.log(res)).catch((ress) => console.log(ress));

/*
Network request'ler yaparken hep promise'lerle yapilir. Bunlar size hazir gelir
*/
const axios = require("axios");
console.log(axios);

async function ulkeGetir() {
  //   axios
  //     .get("https://restcountries.eu/rest/v2/all")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  const ulkeListesi = await axios.get("https://restcountries.eu/rest/v2/all");
  console.log(ulkeListesi.data[0]);
}

ulkeGetir();
