
function calcular(){
    diasDiferencia();
    calculoTotal();
}

function diasDiferencia(){
    var fecha1 = new Date(document.getElementById("fecha01").value);
    var fecha2 = new Date(document.getElementById("fecha1").value);

    var milisegundosDia = 24*60*60*1000;
    var milisegundosTranscurridos = Math.abs(fecha1.getTime()- fecha2.getTime());
    var diasTranscurridos = Math.round(milisegundosTranscurridos/milisegundosDia);

    document.getElementById("1").innerHTML=diasTranscurridos;
}


function calculoTotal(){

    var flujo = 0;
    var interes = parseInt(document.getElementById("interes").value);
    var plazo = parseInt(document.getElementById("plazo").value);
    var importe = parseInt(document.getElementById("importe").value);
    var disposicion = -importe;
    interes /=100;

    document.getElementById("disposicion").innerHTML = disposicion;
    document.getElementById("saldo").innerHTML = -disposicion;
    document.getElementById("comision").innerHTML = importe*0.01;
    
    var comision = parseInt(document.getElementById("comision").innerHTML);
    document.getElementById("iva").innerHTML = comision*0.16;

    var iva0 = parseInt(document.getElementById("iva").innerHTML);
    flujo = disposicion + comision + iva0;
    document.getElementById("flujo").innerHTML = flujo;

/////////////////////////////////1
    var iva = 0.16;
    var inicial = 1776.98;
    document.getElementById("inicial").innerHTML = inicial;

    document.getElementById("intereses1").innerHTML = Math.round(importe*interes/360*31);
    var intereses1 = parseInt(document.getElementById("intereses1").innerHTML);

    document.getElementById("iva1").innerHTML = intereses1 * iva;
    var iva1 = parseInt(document.getElementById("iva1").innerHTML);

    document.getElementById("amortizacion1").innerHTML = inicial - intereses1;
    var amortizacion1 = parseInt(document.getElementById("amortizacion1").innerHTML);

    document.getElementById("saldo1").innerHTML = -disposicion -amortizacion1;

    document.getElementById("flujo1").innerHTML = inicial + iva1;

///////////////////////////////////2
    var saldo1 = parseInt(document.getElementById("saldo1").innerHTML);

    document.getElementById("intereses2").innerHTML = Math.round(saldo1*interes/360*30);
    var intereses2 = parseInt(document.getElementById("intereses2").innerHTML);

    document.getElementById("iva2").innerHTML = intereses2 * iva;
    var iva2 = parseInt(document.getElementById("iva2").innerHTML);

    document.getElementById("amortizacion2").innerHTML = inicial - intereses2;
    var amortizacion2 = parseInt(document.getElementById("amortizacion2").innerHTML);

    document.getElementById("saldo2").innerHTML = saldo1 - amortizacion2;

    document.getElementById("flujo2").innerHTML = inicial + iva2;


    ///////////////////////////////////3
    var saldo2 = parseInt(document.getElementById("saldo2").innerHTML);

    document.getElementById("intereses3").innerHTML = Math.round(saldo2*interes/360*31);
    var intereses3 = parseInt(document.getElementById("intereses3").innerHTML);

    document.getElementById("iva3").innerHTML = intereses3 * iva;
    var iva3 = parseInt(document.getElementById("iva3").innerHTML);

    document.getElementById("amortizacion3").innerHTML = inicial - intereses3;
    var amortizacion3 = parseInt(document.getElementById("amortizacion3").innerHTML);

    document.getElementById("saldo3").innerHTML = saldo2 - amortizacion3;

    document.getElementById("flujo3").innerHTML = inicial + iva3;


    ///////////////////////////////////4
    var saldo3 = parseInt(document.getElementById("saldo3").innerHTML);

    document.getElementById("intereses4").innerHTML = Math.round(saldo3*interes/360*31);
    var intereses4 = parseInt(document.getElementById("intereses4").innerHTML);

    document.getElementById("iva4").innerHTML = intereses4 * iva;
    var iva4 = parseInt(document.getElementById("iva4").innerHTML);

    document.getElementById("amortizacion4").innerHTML = inicial - intereses4;
    var amortizacion4 = parseInt(document.getElementById("amortizacion4").innerHTML);

    document.getElementById("saldo4").innerHTML = saldo3 - amortizacion4;

    document.getElementById("flujo4").innerHTML = inicial + iva4;


    ///////////////////////////////////5
    var saldo4 = parseInt(document.getElementById("saldo4").innerHTML);

    document.getElementById("intereses5").innerHTML = Math.round(saldo4 * interes / 360 * 30);
    var intereses5 = parseInt(document.getElementById("intereses5").innerHTML);

    document.getElementById("iva5").innerHTML = intereses5 * iva;
    var iva5 = parseInt(document.getElementById("iva5").innerHTML);

    document.getElementById("amortizacion5").innerHTML = inicial - intereses5;
    var amortizacion5 = parseInt(document.getElementById("amortizacion5").innerHTML);

    document.getElementById("saldo5").innerHTML = saldo4 - amortizacion5;

    document.getElementById("flujo5").innerHTML = inicial + iva5;


    ///////////////////////////////////6
    var saldo5 = parseInt(document.getElementById("saldo5").innerHTML);

    document.getElementById("intereses6").innerHTML = Math.round(saldo5 * interes / 360 * 31);
    var intereses6 = parseInt(document.getElementById("intereses6").innerHTML);

    document.getElementById("iva6").innerHTML = intereses6 * iva;
    var iva6 = parseInt(document.getElementById("iva6").innerHTML);

    document.getElementById("amortizacion6").innerHTML = inicial - intereses6;
    var amortizacion6 = parseInt(document.getElementById("amortizacion6").innerHTML);

    document.getElementById("saldo6").innerHTML = saldo5 - amortizacion6;

    document.getElementById("flujo6").innerHTML = inicial + iva6;


    ///////////////////////////////////7
    var saldo6 = parseInt(document.getElementById("saldo6").innerHTML);

    document.getElementById("intereses7").innerHTML = Math.round(saldo6 * interes / 360 * 30);
    var intereses7 = parseInt(document.getElementById("intereses7").innerHTML);

    document.getElementById("iva7").innerHTML = intereses7 * iva;
    var iva7 = parseInt(document.getElementById("iva7").innerHTML);

    document.getElementById("amortizacion7").innerHTML = inicial - intereses7;
    var amortizacion7 = parseInt(document.getElementById("amortizacion7").innerHTML);

    document.getElementById("saldo7").innerHTML = saldo6 - amortizacion7;

    document.getElementById("flujo7").innerHTML = inicial + iva7;


    ///////////////////////////////////8
    var saldo7 = parseInt(document.getElementById("saldo7").innerHTML);

    document.getElementById("intereses8").innerHTML = Math.round(saldo7 * interes / 360 * 31);
    var intereses8 = parseInt(document.getElementById("intereses8").innerHTML);

    document.getElementById("iva8").innerHTML = intereses8 * iva;
    var iva8 = parseInt(document.getElementById("iva8").innerHTML);

    document.getElementById("amortizacion8").innerHTML = inicial - intereses8;
    var amortizacion8 = parseInt(document.getElementById("amortizacion8").innerHTML);

    document.getElementById("saldo8").innerHTML = saldo7 - amortizacion8;

    document.getElementById("flujo8").innerHTML = inicial + iva8;


    ///////////////////////////////////9
    var saldo8 = parseInt(document.getElementById("saldo8").innerHTML);

    document.getElementById("intereses9").innerHTML = Math.round(saldo8 * interes / 360 * 31);
    var intereses9 = parseInt(document.getElementById("intereses9").innerHTML);

    document.getElementById("iva9").innerHTML = intereses9 * iva;
    var iva9 = parseInt(document.getElementById("iva9").innerHTML);

    document.getElementById("amortizacion9").innerHTML = inicial - intereses9;
    var amortizacion9 = parseInt(document.getElementById("amortizacion9").innerHTML);

    document.getElementById("saldo9").innerHTML = saldo8 - amortizacion9;

    document.getElementById("flujo9").innerHTML = inicial + iva9;


    ///////////////////////////////////10
    var saldo9 = parseInt(document.getElementById("saldo9").innerHTML);

    document.getElementById("intereses10").innerHTML = Math.round(saldo9 * interes / 360 * 28);
    var intereses10 = parseInt(document.getElementById("intereses10").innerHTML);

    document.getElementById("iva10").innerHTML = intereses10 * iva;
    var iva10 = parseInt(document.getElementById("iva10").innerHTML);

    document.getElementById("amortizacion10").innerHTML = inicial - intereses10;
    var amortizacion10 = parseInt(document.getElementById("amortizacion10").innerHTML);

    document.getElementById("saldo10").innerHTML = saldo9 - amortizacion10;

    document.getElementById("flujo10").innerHTML = inicial + iva10;


    ///////////////////////////////////11
    var saldo10 = parseInt(document.getElementById("saldo10").innerHTML);

    document.getElementById("intereses11").innerHTML = Math.round(saldo10 * interes / 360 * 31);
    var intereses11 = parseInt(document.getElementById("intereses11").innerHTML);

    document.getElementById("iva11").innerHTML = intereses11 * iva;
    var iva11 = parseInt(document.getElementById("iva11").innerHTML);

    document.getElementById("amortizacion11").innerHTML = inicial - intereses11;
    var amortizacion11 = parseInt(document.getElementById("amortizacion11").innerHTML);

    document.getElementById("saldo11").innerHTML = saldo10 - amortizacion11;

    document.getElementById("flujo11").innerHTML = inicial + iva11;


    ///////////////////////////////////12
    var saldo11 = parseInt(document.getElementById("saldo11").innerHTML);

    document.getElementById("intereses12").innerHTML = Math.round(saldo11 * interes / 360 * 30);
    var intereses12 = parseInt(document.getElementById("intereses12").innerHTML);

    document.getElementById("iva12").innerHTML = intereses12 * iva;
    var iva12 = parseInt(document.getElementById("iva12").innerHTML);

    document.getElementById("amortizacion12").innerHTML = inicial - intereses12;
    var amortizacion12 = parseInt(document.getElementById("amortizacion12").innerHTML);

    document.getElementById("saldo12").innerHTML = saldo11 - amortizacion12;

    document.getElementById("flujo12").innerHTML = inicial + iva12;
}

