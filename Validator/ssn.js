function isValidSSN(input) {
    const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
    return ssnRegex.test(input);
  }
document.getElementById("btn-ssn").addEventListener("click", function () {
    const ssnValue = document.getElementById("text-ssn").value;
    const isValid = isValidSSN(ssnValue)
        document.getElementById("ssn-output").textContent = isValid ? `Entered SSN(${ssnValue}) is valid` : "SSN must be 11 characters(9 digits 2 hypens)";
  });