function openRumus(evt, rumusName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(rumusName).style.display = "block";
    evt.currentTarget.className += " active";
}

function hitungLuas() {
    var alas = document.getElementById('alas').value;
    var tinggi = document.getElementById('tinggi').value;
    res = Number(alas) * Number(tinggi) / 2;
    html = "L = 1/2 x a x t<br/>L = 1/2 x " + alas + " x " + tinggi + "<br/>L = " + res;
    document.getElementById("luasRes").innerHTML = html;
}

function hitungKeliling() {
    var sisia = document.getElementById('sisia').value;
    var sisib = document.getElementById('sisib').value;
    var sisic = document.getElementById('sisic').value;
    res = Number(sisia) + Number(sisib) + Number(sisic);
    html = "K = A + B + C<br/>K = " + sisia + " + " + sisib + " + " + sisic + "<br/>K = " + res;
    document.getElementById("kelilingRes").innerHTML = html;
}

function reset(val) {
    if (val == 'luas') {
        document.getElementById('alas').value = "";
        document.getElementById('tinggi').value = "";
        document.getElementById("luasRes").innerHTML = "";
    } else if (val == 'keliling') {
        document.getElementById('sisia').value = "";
        document.getElementById('sisib').value = "";
        document.getElementById('sisic').value = "";
        document.getElementById("kelilingRes").innerHTML = "";
    }
}

document.getElementById("defaultOpen").click();