document.getElementById("header").innerHTML=`

    <nav>
        <a id="logo" href="./index.html"><img src="./img/Ferrari-nav.jpg" alt="ferrari-logo" width="40" style="vertical-align: middle;" ></a>
        <a class="menu" href="./index.html">Home</a>
        <a class="menu" href="./Sucursales.html">Sucursales</a>
        <a class="menu" href="./Registro.html">Registro</a>
        <a class="menu" href="./Iniciar sesión.html">Iniciar sesión</a>
        <a class="menu" href="./tienda.html">Tienda</a>
    </nav>

    <h1>Scuderia Ferrari</h1>
    <br>
`

document.getElementById("footer").innerHTML=`
<nav id="navfooter">
    
    <a href="https://www.facebook.com/" target="blank">
    <i class="fa-brands fa-facebook fa-xl"></i>
    </a>

    <a href="https://www.twitter.com/" target="blank">
    <i class="fa-brands fa-twitter fa-xl "></i>
    </a>

    <a href="https://www.instagram.com" target="blank">
    <i class="fa-brands fa-instagram fa-xl"></i>
    </a>

    <a href="https://www.youtube.com" target="blank">
    <i class="fa-brands fa-youtube fa-xl"></i>
    </a>

    <a href="mailto:FerrariClub@gmail.com">
    <i class="fa-solid fa-envelope fa-xl"></i>
    </a>
</nav>
    <br>
    <p align="center">Derechos reservados @2022</p>
`

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("form").addEventListener("submit", validacion);
});

function validacion(event) {
    event.preventDefault();
    let a=document.getElementById("Nombre").value;
    if(a.length==0){
        let text1 = "<p>El Nombre ingresado no es valido</p>";
        document.getElementById("nomb").innerHTML = text1;
        return;
    }
    let b=document.getElementById("Apellido").value;
    if(b.length==0){
        let text2 = "<p>El Apellido ingresado no es valido</p>";
        document.getElementById("apell").innerHTML = text2;
        return;
    }
    let c=document.getElementById("Pais").value;
    if(c.length==0){
        let text3 = "<p>No a ingresado ningún País</p>";
        document.getElementById("pa").innerHTML = text3;
        return;
    }
    let d=document.getElementById("CodigoPostal").value;
    if (d<1 || d>9999) {
        let text4 = "<p>El código postal ingresado no es valido</p>";
        document.getElementById("codigo").innerHTML = text4;
        return;
    }
    let e=document.getElementById("DNI").value;
    if (e<1) {
        let text5 = "<p>El DNI ingresado no es valido</p>";
        document.getElementById("dn").innerHTML = text5;
        return;
    }
    this.submit()
} 

const tabla = document.querySelector('#cuerpo');
          const opciones = {
            method :'GET'
          }

          fetch('https://backflaskcrud.herokuapp.com/productos',opciones)
            .then(response => response.json())
            .then(response =>{

                response.forEach(elemento => {
                  
                  tabla.innerHTML +=  `
                            <tr>
                              <th id="fotoTienda" scope="row"><img src="./uploads/${elemento.foto}" alt="" width="400px"></th>
                              <td>${elemento.nombre}</td>
                              <td class="descripcion">${elemento.descripcion}</td>
                              <td>${elemento.precio}</td>
                              <td><a href="#" class="btn btn-danger" style="color:rgb(230, 230, 230)!important">Comprar</a></td>
                              <td><a href="#" class="btn btn-success" style="color:rgb(230, 230, 230)!important">Añadir al carrito</a></td>
                            </tr>
                  `
                });
            });
