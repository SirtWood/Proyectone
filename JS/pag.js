function validación() {

    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    if (usuario == "Steven" && contraseña == "123456") {
        alert("Usuario y contraseña validos");
    }
    else {
        alert("Verifique sus datos");
    }

}

function validación2() {

    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let fecha = document.getElementById("fecha").value;
    let email = document.getElementById("email").value;
    let contraseña2 = document.getElementById("contraseña2").value;
    let confirmar = document.getElementById("confirmar").value;

    if (nombre == "" || nombre == null) {
        alert("Digite nombre");
    } else {
        if (apellidos == "" || apellidos == null) {
            alert("Digite apellidos");
        } else {
            if (fecha == "" || fecha == null) {
                alert("Digite fecha");
            }
            else {
                if (email == "" || email == null) {
                    alert("Digite email");
                }
                else {
                    if (contraseña2 == "" || contraseña2 == null) {
                        alert("Digite contraseña");
                    }

                    else {
                        if (confirmar == "" || confirmar == null) {
                            alert("Digite confirmación");
    
                            }

                            else {
                                if (confirmar != contraseña2) {
                                    alert("Las contraseñas no coinciden");

                                }

                                else {
                                   if(document.getElementById("acepto").checked == false){
                                       alert("Acepto los términos");                             
                                        
                                   }
                                   
                                   else {
                                    document.getElementById("nombre").value = "";
                                    document.getElementById("apellidos").value = "";
                                    document.getElementById("fecha").value = "";
                                    document.getElementById("email").value = "";
                                    document.getElementById("contraseña2").value = "";
                                    document.getElementById("confirmar").value = "";
                                    alert("Registro satisfactorio")
                                   }
                                }
                        }
                    }
                }
            }
        }
    }
}
