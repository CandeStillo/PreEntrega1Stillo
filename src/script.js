//Función para ingresar a la página

function ingresar() {
    //Datos principales
    let edad = parseInt(prompt("Ingrese su edad:"))
    let mail = "mmcandestillo@gmail.com"
    let contrasenia = "candela"
    //Primer condicional
    if (edad >= 18) {
        console.log("Puede ingresar.")
        let mail1 = prompt("Ingrese su mail:")

        //Segundo condicional con mail

        if (mail == mail1) {
            console.log("Mail correcto.")
            contrasenia1 = prompt("Ingrese su contraseña:")

            //Tercer condicional

            if (contrasenia == contrasenia1) {
                console.log("Contraseña correcta.")
                alert("Bienvenida M. Candela Stillo")

                // Elegir una pelicula (Switch)

                let elegir = prompt("Elija si quiere ver About time, IT o Barbie o escriba ESC para cancelar:")
                while (elegir != "ESC" && elegir != "esc") {
                    switch (elegir) {
                        case "About time":
                            console.log(`Usted va a ver "${elegir}"`)
                            break;
                        case "IT":
                            console.log(`Usted va a ver "${elegir}"`)
                            break;
                        case "Barbie":
                            console.log(`Usted va a ver "${elegir}"`)
                            break;
                        default:
                            console.log("Opcion no reconocida.")
                            break;

                    }
                    break;
                }
                if (elegir == "esc" || elegir == "ESC") {
                    console.log("Usted ha cancelado.")
                }

            } else {
                //Ciclo for + elegir pelicula si contraseña es correcta
                console.log("Contraseña incorrecta. Tiene 3 intentos más.")
                const maxIntentos = 3;
                const contrasenia = "candela"
                for (let intento = 1; intento <= maxIntentos; intento++) {
                    let intento1 = prompt("Vuelva a ingresar su contraseña");
                    if (intento1 == contrasenia) {
                        console.log("Acceso exitoso en el intento " + intento);
                        let elegir = prompt("Elija si quiere ver About time, IT o Barbie o escriba ESC para cancelar:")
                        while (elegir != "ESC" && elegir != "esc") {
                            switch (elegir) {
                                case "About time":
                                    console.log(`Usted va a ver "${elegir}"`)
                                    break;
                                case "IT":
                                    console.log(`Usted va a ver "${elegir}"`)
                                    break;
                                case "Barbie":
                                    console.log(`Usted va a ver "${elegir}"`)
                                    break;
                                default:
                                    console.log("Opcion no reconocida.")
                                    break;
        
                            }
                            break;
                        }
                        if (elegir == "esc" || elegir == "ESC") {
                            console.log("Usted ha cancelado.")
                        }
                        break;
                    } else {
                        console.log("Intento " + intento + " fallido");
                    }
                    if (intento > maxIntentos) {
                        console.log("Se agotaron los intentos. No se pudo acceder a la página.")
                    }
                }
            }
        } else {
            console.log("Mail incorrecto.")
        }

    } else {
        console.log("Debe ser mayor de edad para ingresar.")
    }
}
ingresar()