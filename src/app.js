console.log("Merhaba Kodlama.io")

//JS type safe değildir.
let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11:BUNU YAPAMIYORUZ CONST SABİT DEMEK DEĞİŞKEN DEĞİŞEMEZ!

console.log(euroDun)

//array(DİZİ)
//camelCasing:isimlendirme kuralı
//PascalCasing:isimlendirme kuralı
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i <konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
} 
console.log("</ul>")  
    





console.log(konutKredileri)