
let toplam_gelir = 0;
let toplam_gider = 0;
let kalan = 0;

const toplamGelirSpan = document.getElementById("toplam-gelir");
const toplamGiderSpan = document.getElementById("toplam-gider");
const kalanSpan = document.getElementById("kalan");

function guncelleOzet() {
  kalan = toplam_gelir - toplam_gider;
  toplamGelirSpan.innerText = Number(toplam_gelir);
  toplamGiderSpan.innerText = Number(toplam_gider);
  kalanSpan.innerText = Number(kalan);
}

// Sayfa yüklendiğinde sıfırla
guncelleOzet();

// GELİR EKLEME
document.getElementById("btn-ekle").addEventListener("click", function () {
  const gelirInput = document.getElementById("gelir").value;
  const gelir = Number(gelirInput);

  if (!isNaN(gelir) && gelir > 0) {
    toplam_gelir += gelir;
    guncelleOzet();
    document.getElementById("gelir").value = "";
  } else {
    alert("Lütfen geçerli bir gelir girin.");
  }
});

// HARCAMA EKLEME
document.getElementById("harcamaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const tarih = document.getElementById("date").value;
  const miktar = Number(document.getElementById("harcama_miktari").value);
  const alan = document.getElementById("harcama_alani").value;

  if (!tarih || !alan || isNaN(miktar) || miktar <= 0) {
    alert("Lütfen tüm alanları düzgün doldurun.");
    return;
  }

  const table = document.getElementById("harcamaTablosu").querySelector("tbody");
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  cell1.textContent = tarih;
  cell2.textContent = alan;
  cell3.textContent = miktar + " $";

  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-trash";
  deleteIcon.style.cursor = "pointer";
  deleteIcon.style.color = "red";
  cell4.appendChild(deleteIcon);

  toplam_gider += miktar;
  guncelleOzet();

  document.getElementById("date").value = "";
  document.getElementById("harcama_miktari").value= "";
  document.getElementById("harcama_alani").value="";

  deleteIcon.addEventListener("click", function () {
    table.removeChild(newRow);
    toplam_gider -= miktar;
    guncelleOzet();
  });


});
