import React from "react";

export const PrintDivButton = () => {
  function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }

  return <button onClick={() => printDiv("printableArea")}>Print</button>;
};
