function limpiar() {
    let opcion = confirm("Confirmar solo en caso de querer borrar carrito");
    
    if (opcion) {
        cantidadtragos = 0;
        total = 0;
        console.clear();
        console.log("El carrito quedó vacio!)");
    } else {
        console.log("El carrito no se reinició, podes seguir comprando :)");
    }
    }
    
    function mostrar() {
    console.log(
        " Tu carrito lleva en total " +
        cantidadtragos +
        " tragos. \n Tenes " +
        fernet +
        " de fernet; " +
        gintonic +
        " de gintonic, y " +
        gancia +
        " de gancia.\n El total gastado hasta el momento es de $" +
        total);
    }
    
    let menu,
      menu2,
      total = 0,
      cantidadtragos = 0,
      fernet = 0,
      gintonic = 0,
      gancia = 0;
    
    do {
      menu = Number(prompt(
        "- Ingrese un numero: \n \n \
            1) Tragos. \n \
            2) Carrito. \n \
            3) Reset carrito. \n \
            0) Salir"
        ));
    
    switch (menu) {
        case 1:
        do {
            menu2 = Number(
            prompt(
                "- Elija el trago entre estas opciones:\n\n\
                    1) fernet ($950) \n \
                    2) gintonic ($1250) \n \
                    3) gancia ($1000) \n \
                    0) Nada mas por ahora"
            )
            );
            switch (menu2) {
            case 1:
                total = total + 950;
                cantidadtragos++;
                fernet++;
                console.log("Añadiste un traguito:)");
                break;
            case 2:
                total = total + 1250;
                cantidadtragos++;
                gintonic++;
                console.log("Añadiste un traguito:)");
                break;
            case 3:
                total = total + 1000;
                cantidadtragos++;
                gancia++;
                console.log("Añadiste un traguito:)");
                break;
            case 0:
                break;
            default:
                console.log("Por favor, ingresar numero válido");
                break;
            }
        } while (menu2 != 0);
        break;
    
        case 2:
            mostrar();
        break;
        case 3:
            limpiar();
        break;
        case 0:
        break;
        default:
            console.log("Por favor, ingresar numero válido");
        break;
      }
    } while (menu != 0);
    
    console.log(
        " Gracias por tu compra! \n Tu carrito quedó con un total " +
        cantidadtragos +
        " tragos. \n Vas a llevar " +
        fernet +
        " de fernet; " +
        gintonic +
        " de gintonic, y " +
        gancia +
        " de gancia.\n El total es de $ " +
        total + 
        ".\n Muchas gracias por confiar en nosotros");