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

harcamaFormu.addEventListener("submit", (e)=> {
    e.preventDefault()
    harcamaListesi.push({
        id:new Date().getTime(),
        tarih:tarihInput.value,
        miktar:miktarInput.value,
        türü: harcamaAlaniInput.value,
    })
    harcamaListesi.push(yeniHarcama);
    console.log(harcamaListesi);

    harcamayıDomaYaz(yeniHarcama)
})

//! harcamaları DOM a bastırma

const harcamayıDomaYaz = ({id,tarih,miktar,türü}) =>{
    harcamaBody.innerHTML += `
    <tr>
    <td class="bg-warning">${tarih}</td>
    <td class="bg-warning">${türü}</td>
    <td class="bg-warning">${miktar}</td>
    
    </tr>
    
    `
}
