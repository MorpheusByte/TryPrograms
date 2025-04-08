document.getElementById("harcamaForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Formun sayfayı yenilemesini engeller

    // Formdan değerleri al
    const tarih = document.getElementById("date").value;
    const miktar = document.getElementById("harcama_miktari").value;
    const alan = document.getElementById("harcama_alani").value;

    // Yeni satır oluştur
    const table = document.getElementById("harcamaTablosu").querySelector("tbody");
    const newRow = table.insertRow();

    // Hücreleri doldur
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.textContent = tarih;
    cell2.textContent = alan;
    cell3.textContent = miktar + " $";

    // Silme butonu
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash";
    deleteIcon.style.cursor = "pointer";
    deleteIcon.style.color = "red";
    cell4.appendChild(deleteIcon)


    deleteIcon.addEventListener("click", function () {
      table.removeChild(newRow);
    });

    // Formu temizle
    document.getElementById("harcamaForm").reset();
  });