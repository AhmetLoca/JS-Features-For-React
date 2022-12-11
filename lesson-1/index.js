// Template Literals ( Şablon Dizileri )

// Example 1

const name = "Ahmet";

const message = `Merhaba, ${name}`;
console.info(message);

// Example 2
const unit_piece = 100;
const piece = 3;
const currency = "TL";

const total_piece = `${unit_piece * piece} ${currency}`;

console.info(total_piece);

//Template Literals

/* 
    props'tan gelen veya state'ten gelen degeri dinamik olarak
    önüne veya arkasına bir şeyler ekleyerek yazdırmamız gerekebilir.
*/
