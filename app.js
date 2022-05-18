//DECLARO TODAS LAS VARIABLES QUE VOY A USAR
let comprar = confirm("¿DESEA REALIZAR LA COMPRA?"),
    contadorNautilus = 0,
    contadorFuzzilla = 0,
    contadorApocalipsis = 0,
    contadorAndromeda = 0,
    precioNautilus = 18000,
    precioFuzzilla = 20000,
    precioApocalipsis = 18000,
    precioAndromeda = 22000,
    total,
    confirmar = "";

//ESTA FUNCIÓN ES PARA CONOCER EL TOTAL DEL PRECIO DE LA COMPRA
const totalPagar = (contadorNautilus, contadorFuzzilla, contadorApocalipsis, contadorAndromeda) =>{
    let totalAPagar =  (precioNautilus * contadorNautilus) + (precioFuzzilla * contadorFuzzilla) + (precioApocalipsis * contadorApocalipsis) + (precioAndromeda * contadorAndromeda);
    return totalAPagar;
}

//EL BUCLE VA DAR LA POSIBILIDAD DE ELEGIR EL PEDAL (DE GUITARRA), SIEMPRE QUE DE ACEPTAR A LA PREGUNTAR SI DESEA COMPRAR
while (comprar == true) {
    let pedal = prompt(
        "SELECCIONE EL PEDAL | NAUTILUS - FUZZILLA - APOCALIPSIS - ANDROMEDA"
    ).toLowerCase();

    switch (pedal) {
        case "nautilus":
            contadorNautilus++;
            alert(
                `HA AGREGADO UN PEDAL NAUTILUS A SU COMPRA | CANTIDAD ${contadorNautilus}`
            );
            break;

        case "fuzzilla":
            contadorFuzzilla++;
            alert(
                `HA AGREGADO UN PEDAL FUZZILLA A SU COMPRA | CANTIDAD ${contadorFuzzilla}`
            );
            break;

        case "apocalipsis":
            contadorApocalipsis++;
            alert(
                `HA AGREGADO UN PEDAL APOCALIPSIS A SU COMPRA | CANTIDAD ${contadorApocalipsis}`
            );
            break;

        case "andromeda":
            contadorAndromeda++;
            alert(
                `HA AGREGADO UN PEDAL ANDROMEDA A SU COMPRA | CANTIDAD ${contadorAndromeda}`
            );
            break;

        default:
            alert(
                `ASEGURESE DE ESCRIBIR CORRECTAMENTE EL NOMBRE DEL PEDAL SELECCIONADO`
            );
            break;
    }
    comprar = confirm("¿DESEA COMPRAR OTRO PEDAL?");
}

//CUANDO SE LE PONE CANCELAR AL CONFIRM VA A SALIR DEL BUCLE Y LE VA A MOSTRAR UN RESUMEN DE SU COMPRA
//SI ESTA DE ACUERDO LE VA A MOSTRAR EL PRECIO A PAGAR

    confirmar = confirm(`USTED HA COMPRADO:   
                                           ${contadorNautilus} - "NAUTILUS"
                                           ${contadorFuzzilla} - "FUZZILLA"
                                           ${contadorApocalipsis} - "APOCALIPSIS
                                           ${contadorAndromeda} - "ANDROMEDA"`);
    if (confirmar == true) {
        total = totalPagar(contadorNautilus,contadorFuzzilla,contadorApocalipsis,contadorAndromeda);
        if(total > 0){
            alert(`TOTAL A PAGAR: $${total}
                GRACIAS POR SU COMPRA!`);
        }else{
            alert("GRACIAS POR VISITARNOS - CUANDO QUIERA PUEDE TERMINAR SU COMPRA")
        }
    } else {
        alert("GRACIAS POR VISITARNOS - CUANDO QUIERA PUEDE TERMINAR SU COMPRA")
    }


