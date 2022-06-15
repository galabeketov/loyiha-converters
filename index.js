function openUnit(evt, unitName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(unitName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

/*temperature converter*/

function temperature(degree) {
  var x;
  var y;
  if (degree == "C") {
    x = (document.getElementById("c").value * 9) / 5 + 32;
    document.getElementById("f").value = x.toFixed(1);
    y = document.getElementById("c").value * 1 + 273.15;
    document.getElementById("k").value = y.toFixed(1);
  } else if (degree == "F") {
    x = ((document.getElementById("f").value - 32) * 5) / 9;
    document.getElementById("c").value = x.toFixed(1);
    y = (document.getElementById("f").value * 1 + 459.67) * (5 / 9);
    document.getElementById("k").value = y.toFixed(1);
  } else {
    x = document.getElementById("k").value * 1 - 273.15;
    document.getElementById("c").value = x.toFixed(1);
    y = document.getElementById("k").value * (9 / 5) - 459.67;
    document.getElementById("f").value = y.toFixed(1);
  }
}

/*speed converter*/

function speed(unit) {
  var x;
  var y;
  if (unit == "KPH") {
    x = document.getElementById("kph").value / 1.609344;
    document.getElementById("mph").value = x.toFixed(1);
    y = document.getElementById("kph").value / 1.852;
    document.getElementById("kn").value = y.toFixed(1);
  } else if (unit == "MPH") {
    x = document.getElementById("mph").value * 1.609344;
    document.getElementById("kph").value = x.toFixed(1);
    y = document.getElementById("mph").value / 1.150779;
    document.getElementById("kn").value = y.toFixed(1);
  } else {
    x = document.getElementById("kn").value * 1.852;
    document.getElementById("kph").value = x.toFixed(1);
    y = document.getElementById("kn").value * 1.150779;
    document.getElementById("mph").value = y.toFixed(1);
  }
}

/*weight converter*/

function weight(unit) {
  var x;
  var y;
  var z;
  if (unit == "KG") {
    x = document.getElementById("kg").value * 2.2046;
    document.getElementById("lb").value = x.toFixed(1);
    y = document.getElementById("kg").value * 35.274;
    document.getElementById("oz").value = y.toFixed(1);
    z = document.getElementById("kg").value * 0.1574;
    document.getElementById("st").value = z.toFixed(1);
  } else if (unit == "LB") {
    x = document.getElementById("lb").value / 2.2046;
    document.getElementById("kg").value = x.toFixed(1);
    y = document.getElementById("lb").value * 16;
    document.getElementById("oz").value = y.toFixed(1);
    z = document.getElementById("lb").value * 0.071429;
    document.getElementById("st").value = z.toFixed(2);
  } else if (unit == "OZ") {
    x = document.getElementById("oz").value / 35.274;
    document.getElementById("kg").value = x.toFixed(2);
    y = document.getElementById("oz").value * 0.0625;
    document.getElementById("lb").value = y.toFixed(2);
    z = document.getElementById("oz").value * 0.0044643;
    document.getElementById("st").value = z.toFixed(3);
  }
}

/*length converter*/

function length(unit) {
  var x;
  var y;
  var z;
  var q;
  if (unit == "KM") {
    x = document.getElementById("km").value * 0.62137;
    document.getElementById("mi").value = x.toFixed(1);
    y = document.getElementById("km").value * 1093.6;
    document.getElementById("yd").value = y.toFixed(0);
    z = document.getElementById("km").value * 39370;
    document.getElementById("in").value = z.toFixed(0);
    q = document.getElementById("km").value * 3280.8;
    document.getElementById("ft").value = q.toFixed(0);
  } else if (unit == "MI") {
    x = document.getElementById("mi").value / 0.62137;
    document.getElementById("km").value = x.toFixed(1);
    y = document.getElementById("mi").value * 1760;
    document.getElementById("yd").value = y.toFixed(0);
    z = document.getElementById("mi").value * 63360;
    document.getElementById("in").value = z.toFixed(0);
    q = document.getElementById("mi").value * 5280;
    document.getElementById("ft").value = q.toFixed(0);
  } else if (unit == "YD") {
    x = document.getElementById("yd").value / 1093.6;
    document.getElementById("km").value = x.toFixed(4);
    y = document.getElementById("yd").value * 0.00056818;
    document.getElementById("mi").value = y.toFixed(4);
    z = document.getElementById("yd").value * 36;
    document.getElementById("in").value = z.toFixed(0);
    q = document.getElementById("yd").value * 3;
    document.getElementById("ft").value = q.toFixed(0);
  } else if (unit == "IN") {
    x = document.getElementById("in").value / 39370;
    document.getElementById("km").value = x.toFixed(5);
    y = document.getElementById("in").value * 0.000015783;
    document.getElementById("mi").value = y.toFixed(5);
    z = document.getElementById("in").value * 0.027778;
    document.getElementById("yd").value = z.toFixed(2);
    q = document.getElementById("in").value * 0.083333;
    document.getElementById("ft").value = q.toFixed(2);
  } else {
    x = document.getElementById("ft").value / 3280.8;
    document.getElementById("km").value = x.toFixed(4);
    y = document.getElementById("ft").value * 0.00018939;
    document.getElementById("mi").value = y.toFixed(4);
    z = document.getElementById("ft").value * 0.33333;
    document.getElementById("yd").value = z.toFixed(1);
    q = document.getElementById("ft").value * 12;
    document.getElementById("in").value = q.toFixed(0);
  }
}

/*time converter*/

function time(unit) {
  var x;
  var y;
  var z;
  var q;
  if (unit == "SEC") {
    x = document.getElementById("sec").value / 60;
    document.getElementById("min").value = Math.floor(x);
    y = document.getElementById("sec").value / 3600;
    document.getElementById("hr").value = Math.floor(y);
    z = document.getElementById("sec").value / 86400;
    document.getElementById("day").value = Math.floor(z);
    q = document.getElementById("sec").value / 31557600;
    document.getElementById("year").value = q.toFixed(1);
  } else if (unit == "MIN") {
    x = document.getElementById("min").value * 60;
    document.getElementById("sec").value = Math.floor(x);
    y = document.getElementById("min").value * 0.01666667;
    document.getElementById("hr").value = Math.floor(y);
    z = document.getElementById("min").value * 0.00069444;
    document.getElementById("day").value = Math.floor(z);
    q = document.getElementById("min").value * 0.0000019;
    document.getElementById("year").value = Math.floor(q);
  } else if (unit == "HR") {
    x = document.getElementById("hr").value * 3600;
    document.getElementById("sec").value = Math.floor(x);
    y = document.getElementById("hr").value * 60;
    document.getElementById("min").value = Math.floor(y);
    z = document.getElementById("hr").value * 0.04166667;
    document.getElementById("day").value = Math.floor(z);
    q = document.getElementById("hr").value * 0.00011408;
    document.getElementById("year").value = Math.floor(q);
  } else if (unit == "DAY") {
    x = document.getElementById("day").value * 86400;
    document.getElementById("sec").value = Math.floor(x);
    y = document.getElementById("day").value * 1440;
    document.getElementById("min").value = Math.floor(y);
    z = document.getElementById("day").value * 24;
    document.getElementById("hr").value = Math.floor(z);
    q = document.getElementById("day").value * 0.00273785;
    document.getElementById("year").value = Math.floor(q);
  } else {
    x = document.getElementById("year").value * 31557600;
    document.getElementById("sec").value = x.toFixed(0);
    y = document.getElementById("year").value * 525960;
    document.getElementById("min").value = y.toFixed(0);
    z = document.getElementById("year").value * 8766;
    document.getElementById("hr").value = z.toFixed(0);
    q = document.getElementById("year").value * 365.25;
    document.getElementById("day").value = q.toFixed(0);
  }
}
