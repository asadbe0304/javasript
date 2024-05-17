alert("some code");
// "use strict" below is ignored--it must be at the top

"use strict";

// strict mode is not activated

Uzoq vaqt davomida JavaScript moslik muammolarisiz rivojlandi. Tilga yangi funksiyalar qo‘shildi, eski funksiya esa o‘zgarmadi.

Bu mavjud kodni hech qachon buzmaslikning foydasiga ega edi. Ammo salbiy tomoni shundaki, JavaScript yaratuvchilari tomonidan qilingan har qanday xato yoki nomukammal qaror tilda abadiy qolib ketgan.

Bu 2009 yilgacha ECMAScript 5 (ES5) paydo bo'lgunga qadar shunday edi. U tilga yangi xususiyatlarni qo'shdi va mavjudlarini o'zgartirdi. Eski kodning ishlashini ta'minlash uchun bunday o'zgartirishlarning aksariyati sukut bo'yicha o'chirilgan. Siz ularni maxsus direktiva bilan aniq yoqishingiz kerak: "use strict".

Direktiv satrga o'xshaydi: "use strict"yoki 'use strict'. Agar u skriptning yuqori qismida joylashgan bo'lsa, butun skript "zamonaviy" usulda ishlaydi.


<h1>Variables</h1>

O'zgaruvchilar
Ko'pincha JavaScript ilovasi ma'lumotlar bilan ishlashi kerak. Mana ikkita misol:

Onlayn do'kon - ma'lumotlar sotilayotgan tovarlar va xarid qilish savatini o'z ichiga olishi mumkin.
Chat ilovasi - ma'lumotlar foydalanuvchilar, xabarlar va boshqalarni o'z ichiga olishi mumkin.

Ushbu ma'lumotlarni saqlash uchun o'zgaruvchilar ishlatiladi.

O'zgaruvchi ma'lumotlar uchun "nomli xotira" dir . Biz o'zgaruvchilardan shirinliklar, tashrif buyuruvchilar va boshqa ma'lumotlarni saqlash uchun foydalanishimiz mumkin.

JavaScript-da o'zgaruvchi yaratish uchun let kalit so'zdan foydalaning.

Quyidagi bayonot “message” nomli o‘zgaruvchini yaratadi (boshqacha aytganda: e’lon qiladi ):

let message;

message = 'Hello!';

alert(message); // 


Haqiqiy hayotdagi o'xshashlik
Agar biz uni ma'lumotlar uchun "quti" sifatida tasavvur qilsak, "o'zgaruvchi" tushunchasini osongina tushunishimiz mumkin, unda noyob nomli stiker.

Masalan, o'zgaruvchini undagi qiymat bilan message belgilangan quti sifatida tasavvur qilish mumkin :"message""Hello!"


Biz qutiga istalgan qiymatni qo'yishimiz mumkin.

Shuningdek, biz uni xohlagancha o'zgartirishimiz mumkin:

let message;

message = 'Hello!';

message = 'World!'; // value changed

alert(message);
Qiymat o'zgartirilganda, eski ma'lumotlar o'zgaruvchidan o'chiriladi:


Shuningdek, biz ikkita o'zgaruvchini e'lon qilishimiz va ma'lumotlarni biridan ikkinchisiga nusxalashimiz mumkin.

let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!


Konstantalar
Doimiy (o'zgarmas) o'zgaruvchini e'lon qilish uchun consto'rniga foydalaning let:

const myBirthday = '18.04.1982';
Foydalanish orqali e'lon qilingan o'zgaruvchilar const"doimiy" deb ataladi. Ularni qayta tayinlash mumkin emas. Bunga urinish xatoga olib keladi:

const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!
Agar dasturchi o'zgaruvchi hech qachon o'zgarmasligiga amin bo'lsa, ular constbu faktni kafolatlash va hammaga etkazish uchun uni e'lon qilishlari mumkin.

Katta harf konstantalari
Amalga oshirishdan oldin ma'lum bo'lgan eslab qolish qiyin bo'lgan qiymatlar uchun konstantalarni taxallus sifatida ishlatish keng tarqalgan.

Bunday doimiylar bosh harflar va pastki chiziq yordamida nomlanadi.

Misol uchun, keling, ranglar uchun "veb" (o'n oltilik) formatda konstantalar yarataylik:

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
Foydasi:

COLOR_ORANGEga qaraganda eslash ancha oson "#FF7F00".
"#FF7F00"ga qaraganda xato yozish ancha oson COLOR_ORANGE.
Kodni o'qiyotganda, COLOR_ORANGEga qaraganda ancha mazmunli #FF7F00.
Qachon doimiy uchun bosh harflardan foydalanishimiz kerak va qachon uni normal nomlashimiz kerak? Keling, buni aniq qilib olaylik.

"Doimiy" bo'lish shunchaki o'zgaruvchining qiymati hech qachon o'zgarmasligini anglatadi. Ammo ba'zi konstantalar bajarilishdan oldin ma'lum (masalan, qizil rang uchun o'n oltilik qiymat) va ba'zi konstantalar ish vaqtida, bajarilish vaqtida hisoblab chiqiladi , lekin ular dastlabki tayinlanganidan keyin o'zgarmaydi.

Masalan; misol uchun:

const pageLoadTime = /* time taken by a webpage to load */;
ning qiymati pageLoadTimesahifa yuklanishidan oldin noma'lum, shuning uchun u odatdagidek nomlanadi. Ammo bu hali ham doimiy, chunki u topshiriqdan keyin o'zgarmaydi.

Boshqacha qilib aytganda, katta harflar bilan atalgan konstantalar faqat “qattiq kodlangan” qiymatlar uchun taxallus sifatida ishlatiladi.

<mark>
JavaScriptda o'zgaruvchilarni e'lon qilish uchun uchta asosiy kalit so'z mavjud: var, let, va const. Quyida har biri haqida batafsil ma'lumot keltirilgan.

var
var kalit so'zi bilan o'zgaruvchi e'lon qilish JavaScriptning dastlabki versiyalaridan beri mavjud:

javascript
///////////////////////////////////////////////////
var x = 5;
Xususiyatlari:

Function-scoped: var kalit so'zi bilan e'lon qilingan o'zgaruvchi faqat o'zining funktsiyasi yoki global scope'da mavjud bo'ladi.
Hoisting: var kalit so'zi bilan e'lon qilingan o'zgaruvchilar deklaratsiyasi kodning yuqorisiga "hoisting". Biroq, ular undefined qiymati bilan initsializatsiya qilinadi.
javascript
///////////////////////////////////////////////////
console.log(x); // undefined
var x = 5;
Re-declaration: var kalit so'zi bilan bir xil nomdagi o'zgaruvchini qayta e'lon qilish mumkin.
javascript
///////////////////////////////////////////////////
var x = 10;
var x = 20; // hech qanday xato yo'q
let
ES6 (ECMAScript 2015) bilan kiritilgan let kalit so'zi blok scope'iga ega o'zgaruvchilarni e'lon qilish uchun ishlatiladi:

javascript
///////////////////////////////////////////////////
let y = 10;
Xususiyatlari:

Block-scoped: let kalit so'zi bilan e'lon qilingan o'zgaruvchi faqat e'lon qilingan blok ichida mavjud bo'ladi.
javascript
///////////////////////////////////////////////////
{
    let y = 10;
    console.log(y); // 10
}
console.log(y); // ReferenceError: y is not defined
Hoisting: let bilan e'lon qilingan o'zgaruvchilar hoist qilinadi, ammo temporal dead zone (TDZ) sababli ular initsializatsiya qilinmaguncha ularga murojaat qilish mumkin emas.
javascript
///////////////////////////////////////////////////
console.log(z); // ReferenceError: z is not defined
let z = 5;
Re-declaration: Bir xil scope ichida let kalit so'zi bilan bir xil nomdagi o'zgaruvchini qayta e'lon qilish mumkin emas.
javascript
///////////////////////////////////////////////////
let a = 10;
let a = 20; // SyntaxError: Identifier 'a' has already been declared
const
const kalit so'zi bilan e'lon qilingan o'zgaruvchilar doimiy (constant) bo'lib, bir marta e'lon qilingandan keyin ularga yangi qiymat berib bo'lmaydi:

javascript
///////////////////////////////////////////////////
const b = 15;
Xususiyatlari:

Block-scoped: const kalit so'zi bilan e'lon qilingan o'zgaruvchi faqat o'zining blokida mavjud bo'ladi.
javascript
///////////////////////////////////////////////////
{
    const b = 15;
    console.log(b); // 15
}
console.log(b); // ReferenceError: b is not defined
Hoisting: const bilan e'lon qilingan o'zgaruvchilar hoist qilinadi, ammo TDZ sababli ular initsializatsiya qilinmaguncha ularga murojaat qilish mumkin emas.
javascript
console.log(c); // ReferenceError: c is not defined
const c = 20;
Assignment: const bilan e'lon qilingan o'zgaruvchilarga yangi qiymat berib bo'lmaydi.
javascript
///////////////////////////////////////////////////
const d = 25;
d = 30; // TypeError: Assignment to constant variable.
Qachon var, let, yoki const ishlatish kerak?
var: Eski kodlar bilan ishlashda yoki global scope kerak bo'lganda ishlatilishi mumkin, ammo tavsiya etilmaydi.
let: Blok scope kerak bo'lganda, va qiymati o'zgarishi mumkin bo'lgan o'zgaruvchilar uchun ishlatiladi.
const: Doimiy bo'lgan va qiymati o'zgarmas o'zgaruvchilar uchun ishlatiladi. Tavsiya etiladigan amaliyot constdan imkon qadar ko'proq foydalanish, va faqat kerak bo'lganda letdan foydalanishdir.
</mark>