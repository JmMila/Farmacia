const fnValidar02= () => {
    {
        
        
        ///=======================================================///
    
    
        ///=======================================================///
    
        var elementoPref = document.getElementsByName("chkPre");
        var contador = 0;
    
        for (var i=0; i<elementoPref.length; i++) {
            if(elementoPref[i].checked) {
                contador++ ;
            }
        }
    
        if(contador !=3){
            alert("Debe elegir 3 opciones... NO ("+ contador +") opciones");
            return false;
        }
    
        let elementoEstado = document.getElementsByName("radEstado");
        let valorElegidoPreEstado = "";
        let eligioEstado = false;
        for(let i=0; i < elementoEstado.length; i++) {
            if(elementoEstado[i].checked){
                valorElegidoPreEstado = elementoEstado[i].value;
                eligioEstado = true;
            }
        }
    
        if(!eligioEstado){
            alert("Elija su TURNO..");
            return false;
        }
    
    
    
        var txText = document.getElementById("txtTexto").value;
        
        if (txText == "" || /^\s+$/.test(txtNombre)) {
            alert("Escribe Texto");
            return false;
        }
    
    
        /// Caso contrario ///
        return true;
    
    }}