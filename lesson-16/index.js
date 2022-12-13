// Optional Chaining(?) ve Nullish Coalescing(??)
// ?? -> nullish coalescing ()
// ? -> optional chaining ( chaining işlemini optional hale getiriyor )

/* 
chaning yaptıgımız işlemde herhangi bir property ya da calistirdiginiz
bir fonksiyon  yoksa script'timiz hata veriyor.
*/

const user = {
  name: "Tayfun",
};

// basına birde soru işareti koyuyor olsaydım bu optional chaning
// anlamına gelirdi ve anlamı şu olacaktı :
// eger boyle bir sey yoksa hata vermek yerine bana undefined ver.
console.log(user.name.getName?.());
console.log("Kod calisti mi ?");

//--------------
const user2 = {
  name: {
    getName() {
      return "ahmet";
    },
  },
};

console.log(user2.name.getName?.());

const user3 = {
  name: "ahmet",
  cat: {
    name: "pasa",
  },
};

/* olmayan bir  obje içerisinde olmayan bir property koymaya
calistigimda type hatası alıyorum.

Bunu genelde nerede kullanırız?

Mudahale edemedigimiz kodlarda kullanıyoruz. Mesela bir API'a istek attınız
Ve size bir cevap dondu. Bazen cat var bazen dog var diyelim.
Gelen data belirsiz. Dolayısıyla bunu sizin bir noktada kontrol
etmeniz gerekiyor.

Tek tek kontrol etmek :

console.log(user && user.dog && user.dog.name)

or 

console.log(user?.dog?.name)

Yani hata alacak bir işlem varsa hata basmasın. Undefined bassın.
Ve boylece script'im calısmaya devam etsin !


Example 2

let nestedProp = obj.first && obj.first.second;

let nestedProp = obj.first?.second;

fonksiyonlar ile

let result = someInterface.customMethod?.();
*/
console.log(user3.dog?.name);

function sayHello(msg, callback) {
  console.log("Msg", msg);
  callback?.();
}
sayHello("Tayfun", () => console.log("callback calisti"));
/*
callback'i vermeseydim type Error hatası alacaktım ve script'im calismayi
durduracaktı. Onun yerine callback?.() koyarsanız script calismaya
devam edecektir.
*/

// ?? -> nullish coalescing --------------------

const user4 = {
  name: "Ahmet",
  cat: {
    name: "pasa",
  },
};

//optional chaining ve nullish coalescing bir arada kullanilir.
// neden?

/*
cunku optional chaining ile yaptıgımız kod parcası undefined verecek
sol taraf undefined veya null ise sap taraftaki işlem calisacak.

Bu operator cok sik kullaniliyor !!
*/
console.log("Kopek adi:", user4?.dog?.name ?? "Bilinmiyor");

// example

const foo = null ?? "default string";
console.log(foo); //default string

//example2

const baz = 0 ?? 42;
console.log(baz); //0

// example3

let count = 0;
let text = "";

console.log("new examples");
let qty = count || 42; // 42
let message = text || "hi"; // hi
let qty2 = count ?? 42; // 0
console.log(qty);
console.log(message);
console.log(qty2);

// example 3

console.log("example3");
function A() {
  console.log("A was called");
  return undefined;
}

function B() {
  console.log("B was called");
  return false;
}

function C() {
  console.log("C was called");
  return "foo";
}

console.log(A() ?? C()); // A was called //C was called foo
console.log("---");
console.log(B() ?? C()); // B was called //false 
//B false döndürdüğü için C() function2i calismayacaktir.

// Dogru kullanim

null || undefined ?? "foo"; //YANLIS raises a SyntaxError

{null || undefined} ?? "foo"; //DOGRU "foo"

/*
yukarıda iki ifade olmus oluyor.
asagıda parantez içine alarak tek expression'a cekiyorsunuz.
Yani parantez içindekinin sonucunda donen sey '??'
operatorunu ilgilendiriyor.

*/



/*
Özet:
dataniz dengesizse ve calisan script'in hata vermesini 
istemiyorsanız optional chaninig'i kullanin.

Dom'daki bir objeye bir event tanımlayacaksınız. Bir sayfada
var bir sayfada yok. Kontrol edip de onu tanımlamak yerine
opitional chaning'i kullanarakta bu işlemi yaptırabilirdiniz.

undefined olursa bir şey yapmayacak. Ama dom'da bulursa onu 
gidip o işlemi yapacaktır.

*/