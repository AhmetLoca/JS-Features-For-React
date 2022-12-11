// Shorthand Property Names

// Obje'ler key : value anahtar deger sistemiyle calısan veri tipi.

/*
Eğer objenin içindeki bir anahtarın değeri bir değişkenden geliyorsa
anahtarın açıkça belirtilmesine gerek yoktur.

Değişkenin direkt olarak objeye girilmesi değişkenin ismini anahtar olarak değerini ise 
deger olarak atar.
*/

const name = "Ahmet";
const age = 25;

// { name : "Mehmet", age : 25 }
const user_object = { name, age };

/* anahtar ve value ayni isimlere sahip oldugunda sadece anahtari kullanarak objemizi olusturabiliriz.
 */

console.info(user_object);

//React kullanimi

/* bir sayacimiz olsun ve bu custom olarak hazirlanmis bir hook'tan gelsin. */


            //object disctraction. Burada gelen props degerinin içinden biz bu degerleri aliyoruz
function Sayac({ baslangicDegeri,adim }){
/* baslangic degerinin ve adimin bize bir yerden gelmesi gerekiyor. Bu kisim
props'lardan disctraction yaparak geliyor. */
const [sayac, setSayac] = useCounter({ baslangicDegeri, adim });
                                    /* ayriyetten anahtar ve key ayri ayri belirtmemize gerek yok */

    return <button onClick={setSayac}>{sayac}</button>

}

