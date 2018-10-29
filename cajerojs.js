var v_dinero_disp = [];
    v_dinero_disp["50"] = 3;
    v_dinero_disp["20"] = 3;
    v_dinero_disp["10"] = 3;

var cant_retirar = document.getElementById("cant_retirar");
var retirar = document.getElementById("retirar");



retirar.addEventListener("click", verificar_cant_disp);

function verificar_cant_disp() {
    document.getElementById("resultado50").innerText = ""
    document.getElementById("resultado20").innerText = ""
    document.getElementById("resultado10").innerText = ""
    can_retirar= parseInt(cant_retirar.value);
    dinero_disp = c_dinero_disponible(v_dinero_disp);
    
    if (dinero_disp >= can_retirar && can_retirar % 10 == 0) {
        c_billetes_50(can_retirar, v_dinero_disp);
    }

    else if (dinero_disp < can_retirar) {
        document.getElementById("resultado50").innerText = "Cajero con fondos insuficientes";
    }

    else {
        document.getElementById("resultado50").innerText = "No se puede entragar esa cantidad";
    }

}

function c_dinero_disponible(dinero_disp) {
    dinero_total = dinero_disp;
    suma = dinero_total["50"] * 50 + dinero_total["20"] * 20 + dinero_total["10"] * 10;
    return suma;
}


function c_billetes_50(cant_retirar, v_dinero_disp) {
    if (cant_retirar >= 50) {
        var cant = Math.floor(cant_retirar / 50);
        if (cant > 0 && cant <= v_dinero_disp["50"]) {
            document.getElementById("resultado50").innerText = "Entregando" + cant +" billetes de 50" ;
            cant_retirar = cant_retirar - (cant * 50);
        }
        else {
            document.getElementById("resultado50").innerText = "Entregando" + v_dinero_disp["50"] +" billetes de 50" ;
            cant_retirar = cant_retirar - (v_dinero_disp["50"] * 50)
        }
       
        c_billetes_20(cant_retirar, v_dinero_disp);
    }
    else { c_billetes_20(cant_retirar, v_dinero_disp) }
}

function c_billetes_20(cant_retirar, v_dinero_disp) {
    if (cant_retirar >= 20) {
        cant = Math.floor(cant_retirar / 20);
        if (cant > 0 && cant <= v_dinero_disp["20"]) {
            document.getElementById("resultado20").innerText = "Entregando" + cant +" billetes de 20" ;
        
            cant_retirar = cant_retirar - (cant * 20);
        } else {
            document.getElementById("resultado20").innerText = "Entregando" + v_dinero_disp["20"] +" billetes de 50";
            cant_retirar = cant_retirar - (v_dinero_disp["20"] * 20)
        }
       
        c_billetes_10(cant_retirar, v_dinero_disp);
    }
    else { c_billetes_10(cant_retirar, v_dinero_disp) }
}
function c_billetes_10(cant_retirar, v_dinero_disp) {
    cant = Math.floor(cant_retirar / 10);

    if (cant > 0 && cant <= v_dinero_disp["10"]) {
        document.getElementById("resultado10").innerText = "Entregando" + cant +" billetes de 10" ;
    }
}

