// Object / Array Destructuring
const user = {
  name: "Ahmet",
  age: 25,
  address: "Ankara",
  hometown: "Samsun",
  job: "Software Developer",
};
/* user objesinin içinden almak istedigimiz hangi key'ler varsa bunu süslü parantez içerisinde yaziyoruz. */

// user objesinin içindeki name degerisine hedef aldi.
const { name } = user;

console.info(name);

// rest/spread operatörü. Bir objeden geriye kalanlari tek bir degiskene atadik.
const { age, ...restOf } = user;

console.log(restOf);

// React
function KullaniciGoster({ name, age }) {
  return `${name} isimli kullanici ${age} yasindadir.`;
}

//Array

const sayilar = [1, 2, 3, 4, 5];
const [bir, iki, uc, dort, bes] = sayilar;
console.log(bir, iki, uc, dort, bes);

const [birinciEleman, ...kalanElemanlar] = sayilar;
console.log(birinciEleman);
console.log(kalanElemanlar);

// spread operatoru geriye kalan elemanlar için kullanılır. Aşagıdaki hatali bir kullanimdir.
// const [...kalanElemanlar2, birinciEleman2] = sayilar;
// console.log(kalanElemanlar2);
