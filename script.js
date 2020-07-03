


// var chartURL = "https://chart.googleapis.com/chart?"+
// "cht=qr&choe=UTF-8&chld=M|0&chs=400x400"+
// "&chl="+
// "SPC%0A0200%0A1%0A"+
// "CH0983019ROBERTSALZER"+//IBAN
// "%0AS%0A"+
// "Robert%20Salzer"+ //Name
// "%0A"+"Bahnhofstrasse"+ //Strasse
// "%0A"+"1"+ //Nummer
// "%0A"+"8032"+ //PLZ
// "%0A"+"Zürich"+ //ORT
// "%0A"+"CH"+ //Land
// "%0A%0A%0A%0A%0A%0A%0A%0A"+
// "5.00"+ //Betrag
// "%0A"+"CHF"+ //Währung
// "%0A%0A%0A%0A%0A%0A%0A%0ANON%0A%0A"+
// "Spende%20an%20Robert%20Salzer"+ //Beschreibung
// "%0AEPD%0A";

//chartURL = "https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chld=M|0&chs=400x400&chl=SPC%0A0200%0A1%0ACH0983019ROBERTSALZER%0AS%0ARobert%20Salzer%0A%0A%0A8032%0AZürich%0ACH%0A%0A%0A%0A%0A%0A%0A%0A5.00%0ACHF%0A%0A%0A%0A%0A%0A%0A%0ANON%0A%0ASpende%20an%20Robert%20Salzer%0AEPD%0A";

function createQRCode() {
  var iban = document.getElementById("iban").value;
  var name = document.getElementById("name").value;
  var street = document.getElementById("street").value;
  var housenumber = document.getElementById("housenumber").value;
  var plz = document.getElementById("plz").value;
  var place = document.getElementById("place").value;
  var amount = document.getElementById("amount").value;
  var reason = document.getElementById("reason").value;

  var chartURL = "https://chart.googleapis.com/chart?"+
  "cht=qr&choe=UTF-8&chld=M|0&chs=400x400"+
  "&chl="+
  "SPC%0A0200%0A1%0A"+
  encodeURIComponent(iban)+//IBAN
  "%0AS%0A"+
  encodeURIComponent(name)+ //Name
  "%0A"+encodeURIComponent(street)+ //Strasse
  "%0A"+encodeURIComponent(housenumber)+ //Nummer
  "%0A"+encodeURIComponent(plz)+ //PLZ
  "%0A"+encodeURIComponent(place)+ //ORT
  "%0A"+"CH"+ //Land
  "%0A%0A%0A%0A%0A%0A%0A%0A"+
  encodeURIComponent(amount)+ //Betrag
  "%0A"+"CHF"+ //Währung
  "%0A%0A%0A%0A%0A%0A%0A%0ANON%0A%0A"+
  encodeURIComponent(reason)+ //Beschreibung
  "%0AEPD%0A";

  var img = document.getElementById("qr");
  img.src = chartURL;
}

createQRCode();

