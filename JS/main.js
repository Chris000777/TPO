document.getElementById("header").innerHTML=`

    <nav>
        <a id="logo" href="./index.html"><img src="./img/Ferrari-nav.jpg" alt="ferrari-logo" width="40" style="vertical-align: middle;" ></a>
        <a class="menu" href="./index.html">Home</a>
        <a class="menu" href="./Sucursales.html">Sucursales</a>
        <a class="menu" href="./Registro.html">Registro</a>
        <a class="menu" href="./Iniciar sesión.html">Iniciar sesión</a>
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
    let x=document.getElementById("CodigoPostal").value;
    if (isNaN(x) || x < 1 || x > 9999) {
        let text = "El codigo postal ingresado no es valido";
        document.getElementById("codigo").innerHTML = text;
        return;
    }
    this.submit()
} 
