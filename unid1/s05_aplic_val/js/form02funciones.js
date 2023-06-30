function fnValidar02()
{
    let xNombre = document.getElementById("txtNombres").value;
    if (xNombre == "" || /^\s+$/.test(xNombre)) {
        alert("Escriba su nombre");
        return false;
    }

    let xApellido = document.getElementById("txtApellidos").value;
    if (xApellido == "" || /^\s+$/.test(xApellido)) {
        alert("Escriba su apellido");
        return false;
    }

    let xDireccion = document.getElementById("txtDireccion").value;
    if (xDireccion == "" || /^\s+$/.test(xDireccion)) {
        alert("Escriba su Direccion");
        return false;
    }

    let xEdad = document.getElementById("txtEdad").value;
    if (xEdad == "" || /^\s+$/.test(xEdad)) {
        alert("Ingrese su Edad");
        return false;
    }

    let xFechanac = document.getElementById("txtFechanac").value;
    if (xFechanac == "" || /^\s+$/.test(xFechanac)) {
        alert("Ingrese su Fecha de Nacimiento");
        return false;
    }

    let xGenero = document.getElementById("txtGenero").value;
    if (xGenero == "" || /^\s+$/.test(xGenero)) {
        alert("Ingrese su Genero");
        return false;
    }

    let xEstadoCivil = document.getElementById("txtEstadoCivil").value;
    if (xEstadoCivil == "" || /^\s+$/.test(xEstadoCivil)) {
        alert("Ingrese su Estado Civil");
        return false;
    }




    return true;   
}