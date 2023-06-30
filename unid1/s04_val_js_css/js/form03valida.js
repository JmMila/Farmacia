const fnValidar03 = () => {

	let elementoPref = document.getElementsByName("chkPrefer");
	let valorElegidoPreferencia = "";
	let elegidoPreferencia = false;
    for(let i=0; i < elementoPref.length; i++) {
		if(elementoPref[i].checked) {
			valorElegidoPreferencia = elementoPref[i].value;
			elegidoPreferencia = true;
		}
    }

    let elementoEstado = document.getElementsByName("radEstado");
    let valorElegidoPreEstado = "";
	let elegidoEstado = false;
	for(let i=0; i < elementoEstado.length; i++) {
		if(elementoEstado[i].checked) {
			valorElegidoPreEstado = elegidoEstado[i].value;
			elegidoEstado = true;
		}
	}
     
	if(!elegidoPreferencia) {
		alert("Elija UNA PREFERENCIA...");
		return false;
	}else{
		alert("Su preferencia elegida es " + valorElegidoPreferencia);
	}

	if(!elegidoEstado) {
		alert("Elija un ESTADO CIVIL...");
		return false;
	}else{
		alert("Su estad civil es " + valorElegidoPreEstado);
	}

	/// Caso contrario ///
	return true;

}