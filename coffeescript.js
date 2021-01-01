const iban = "CH1304835083417090000";

function createQRCode() {
  var plz = "8032";
  var place = "Zürich";
  var name = "Robert Salzer";
  var amount = document.getElementById("amount").value;
  var reason = document.getElementById("reason").value;
  if(reason=="") reason = "Kaffee für Robert";
  if(amount=="") amount = "10.00";
  var chartURL = "https://chart.googleapis.com/chart?"+
  "cht=qr&choe=UTF-8&chld=M|0&chs=400x400"+
  "&chl="+
  "SPC%0A0200%0A1%0A"+
  encodeURIComponent(iban)+//IBAN
  "%0AS%0A"+
  encodeURIComponent(name)+ //Name
  "%0A"+//encodeURIComponent(street)+ //Strasse
  "%0A"+//encodeURIComponent(housenumber)+ //Nummer
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

function showPayment() {
  var div = document.getElementById("qrcode");
  div.style.display = "block";
}

function copyIban() {
  document.getElementById("accountdetails").style.display = 'block';
  var copyText = document.getElementById("iban");
  const el = document.createElement('textarea');
  el.value = iban;
  document.body.appendChild(el);
  el.select();
  el.setSelectionRange(0, 99999)
  document.execCommand('copy');
  document.body.removeChild(el);
  setTimeout(function() {
    alert(iban+" wurde in die Zwischenablage kopiert");
  }, 300);
}

createQRCode();

