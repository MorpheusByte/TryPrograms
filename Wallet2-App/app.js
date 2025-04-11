//?SELECTORS
//HARCAMA FORMU

const harcamaFormu=document.getElementById("harcama-formu")
const tarihInput=document.getElementById("tarih")
const miktarInput=document.getElementById("miktar")
const harcamaAlaniInput=document.getElementById("harcama-alani")

//HARCAMA TABLOSU
const harcamaBody=document.getElementById("harcama-body")

// EKLE FORMU
const ekleBtn = document.getElementById("ekle-btn");

const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");


// SONUÇ TABLOSU
const gelirinizTable = document.getElementById("geliriniz");


const giderinizTable = document.getElementById("gideriniz");


const kalanTable = document.getElementById("kalan");


//? Variables

let harcamaListesi = []
let gelirler = 0

//! İlk formu doldurma


