export function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var logo = document.getElementById("logo").id;
  var logoValue = document.getElementById("logo").value;
  var totalPaid = document.getElementById("total-paid").id;
  var totalPaidValue = document.getElementById("total-paid").value;
  var dateSeller = document.getElementById("date-seller").id;
  var dateSellerValue = document.getElementById("date-seller").value;
  var dateOwner = document.getElementById("date-owner").id;
  var dateOwnerValue = document.getElementById("date-owner").value;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  function setValue(id, newValue) {
    var s = document.getElementById(id);
    s.value = newValue;
    console.log(id + newValue);
  }

  window.onload = setValue(logo, logoValue);
  window.onload = setValue(totalPaid, totalPaidValue);
  window.onload = setValue(dateSeller, dateSellerValue);
  window.onload = setValue(dateOwner, dateOwnerValue);

  window.print();

  document.body.innerHTML = originalContents;

  window.onload = setValue(logo, logoValue);
  window.onload = setValue(totalPaid, totalPaidValue);
  window.onload = setValue(dateSeller, dateSellerValue);
  window.onload = setValue(dateOwner, dateOwnerValue);
}
