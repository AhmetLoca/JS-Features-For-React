// ES6 Rest / Spread Operator

let user = { name: "Ahmet", age: 25, city: "Ankara" };

//user objesini mutate etmiş oluyoruz.
//BUNU REACT İÇİNDE STATE DEGİSİKLİGİNDE KULLANMIYORUZ!.
user.city = "Istanbul";


//spread operatoru
user2 = { ...user, city: "Istanbul" }; //iki tane city isimli anahtar oldugundan dolayı ikinci anahtarın degeri birincisinin uzerine yazılır.
console.log(user2); //{ name: "Ahmet", age: 25, city: "Istanbul" };


//REDUX İÇİNDE COK KULLANILIR. 
//OZELLİKLE REDUCER İCİNDE STATE GUNCELLEMELERİNİ YAPARKEN

INITIAL_STATE = {
    yukleniyor:false,
    hataMesaji:"",
    arabalar:["Mercedes","BMW","Audi"],
}

// dispatch({ type:"ARABA_EKLE", payload:"Tofas"})

const reducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case "ARABA_EKLE":
            //...state -> state'in içindeki her şeyi kopyalıyor.
            //daha sonra arabalar degerini guncelliyor.
            //state.arabalar içindeki her şeyi kopyalıyor ve uzerine actiondan
            //gelen payload'u ekliyor.
            return {...state, arabalar:[...state.arabalar, action.payload]}
        default: return state;
    }
}

state.arabalar // ["Mercedes","BMW","Audi","Tofas"]

/*
Biz eski obje ile yeni objenin yerini degistirmiş oluyoruz.
*/

state.arabalar.push("Tofas") 
// yapsakdık. Yine arabalar dizisine bir eleman eklemiş olurduk.

0001 -> {yukleniyor, hataMesaji, arabalar} -> state
//push yaptıgımızda hafizadaki yeri degistirmis olmuyoruz. State hale aynı objenin içine bakıyor

//yeni bir obje olusturdugumuzda
0002 -> {yukleniyor, hataMesaji, [...arabalar,"Tofas"]} -> state
/*
artık state yeni bir objede.
Bu sayede "immutability yani degismezlik kuralına riayet edebildik."
*/