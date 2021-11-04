function traerInformacionCategorias(){
    $.ajax({
        url:"http://144.22.247.183:8080/api/Category/all", 
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionCategorias("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarCategoria("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    } 
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategorias(){
    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://144.22.247.183:8080/api/Category/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()  
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");  
        }
        });

}

function actualizarInformacionCategorias(idElemento){
    let myData={
        id:idElemento,
        name:$("#Cname").val(),
        description:$("#Cdescription").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.247.183:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#Cname").val("");
            $("#Cdescription").val("");
            traerInformacionCategorias();
            alert("se ha Actualizado correctamente la categoria")
        }
    });

}

function borrarCategoria(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.247.183:8080/api/Category/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionCategorias();
            alert("Se ha Eliminado.")
        }
    });

}



///////Palco///////////

function traerInformacionPalcos(){
    $.ajax({
        url:"http://144.22.247.183:8080/api/Box/all", 
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta1(respuesta);
        }
    });
}

function pintarRespuesta1(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].location+"</td>";
        myTable+="<td>"+respuesta[i].capacity+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionPalcos("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarPalco("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    } 
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionPalcos(){
    let var2 = {
        name:$("#Pname").val(),
        location:$("#Plocation").val(),
        capacity:$("#Pcapacity").val(),
        description:$("#Pdescription").val(),
        category:$("#Pcategory").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://144.22.247.183:8080/api/Box/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()  
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");  
        }
        });

}

function actualizarInformacionPalcos(idElemento){
    let myData={
        id:idElemento,
        name:$("#Pname").val(),
        location:$("#Plocation").val(),
        capacity:$("#Pcapacity").val(),
        description:$("#Pdescription").val(),
        category:$("#Pcategory").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.247.183:8080/api/Box/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#Pname").val("");
            $("#Plocation").val("");
            $("#Pcapacity").val("");
            $("#Pdescription").val("");
            traerInformacionPalcos();
            alert("se ha Actualizado correctamente el palco")
        }
    });

}

function borrarPalco(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.247.183:8080/api/Box/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionPalcos();
            alert("Se ha Eliminado.")
        }
    });

}




///////CLIENTE///////////

function traerInformacionClientes(){
    $.ajax({
        url:"http://144.22.247.183:8080/api/Client/all", 
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta2(respuesta);
        }
    });
}

function pintarRespuesta2(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idClient+"</td>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionClientes("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarCliente("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    } 
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionClientes(){
    let var2 = {      
        email:$("#Clemail").val(),
        password:$("#Clpassword").val(),
        name:$("#Clname").val(),
        age:$("#Clage").val(),
        category:$("#Pcategory").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://144.22.247.183:8080/api/Client/save",
       
        
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()  
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");  
        }
        });

}

function actualizarInformacionClientes(idElemento){
    let myData={
        id:idElemento,
        email:$("#Clemail").val(),
        password:$("#Clpassword").val(),
        name:$("#Clname").val(),
        age:$("#Clage").val(),
        category:$("#Clcategory").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.247.183:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#Clemail").val("");
            $("#Clpassword").val("");
            $("#Clname").val("");
            $("#Clage").val("");
            traerInformacionClientes();
            alert("se ha Actualizado correctamente el cliente")
        }
    });

}

function borrarCliente(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.247.183:8080/api/Client/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionClientes();
            alert("Se ha Eliminado.")
        }
    });

}


/////////////////////MENSAJE/////////////////////




function traerInformacionMensajes(){
    $.ajax({
        url:"http://144.22.247.183:8080/api/Message/all", 
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta3(respuesta);
        }
    });
}

function pintarRespuesta3(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idMessage+"</td>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        function pintarRespuesta(name) {            
        }
        myTable+="<td> <button onclick=' actualizarInformacionMensajes("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarMensaje("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    } 
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMensajes(){
    let var2 = {
        messageText:$("#MmessageText").val(),
        category:$("#Mcategory").val(),
        
        };
        function pintarRespuesta(name) {            
        }
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://144.22.247.183:8080/api/Message/save",
       
        
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()  
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");  
        }
        });

}

function actualizarInformacionMensajes(idElemento){
    let myData={
        id:idElemento,
        messageText:$("#MmessageText").val(),
        category:$("#Mcategory").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.247.183:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#MmessageText").val("");
            traerInformacionMensajes();
            alert("se ha Actualizado correctamente el mensaje")
        }
    });

}

function borrarMensaje(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.247.183:8080/api/Message/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionMensajes();
            alert("Se ha Eliminado.")
        }
    });

}





/////////RESERVACIÓN///////////////




function traerInformacionReservaciones(){
    $.ajax({
        url:"http://144.22.247.183:8080/api/Reservation/all", 
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta4(respuesta);
        }
    });
}

function pintarRespuesta4(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idElemento+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionReservaciones("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarReservacion("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    } 
    myTable+="</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionReservaciones(){
    let var2 = {
        name:$("#Rname").val(),
        startDate:$("#RstartDate").val(),
        devolutionDate:$("#RdevolutionDate").val(),
        category:$("#Rcategory").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://144.22.247.183:8080/api/Reservation/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()  
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");  
        }
        });

}

function actualizarInformacionReservaciones(idElemento){
    let myData={
        id:idElemento,
        startDate:$("#RstartDate").val(),
        devolutionDate:$("#RdevolutionDate").val(),
        category:$("#Rcategory").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.247.183:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            startDate:$("#RstartDate").val(),
            // devolutionDate:$("#RdevolutionDate").val(),
            traerInformacionReservaciones();
            alert("se ha Actualizado correctamente")
        }
    });

}

function borrarReservacion(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://144.22.247.183:8080/api/Reservation/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionReservaciones();
            alert("Se ha Eliminado.")
        }
    });

}


// html = "";
//         obj = {
//             "1" : "Name",
//             "2" : "Age",
//             "3" : "Gender",
//         }
//         for(var key in obj) {
//             html += "<option value=" + key + ">" +obj[key] + ""
//         }
//         document.getElementById("datas").innerHTML = html