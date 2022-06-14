/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 * Conversion de Unidades de metros, pies, yardas y pulgadas
 * @method conversionUnidades
 * @param {String} id - ID de los inputs del formulario
 * @param {Number} valor - Valor de los inputs del formulario
 */

function conversionUnidades(id , valor)
{
    let metro, pie, pulgada, yarda;

    if(valor.includes(','))
    {
        valor = valor.replace(',' , '.');
    }

    if(isNaN(valor))
    {
        alert("Ingrese un numero");
        metro = "";
        pie = "";
        pulgada = "";
        yarda = "";

    } else if (id === "metro")
    {
        metro = valor;
        pulgada = valor*39.3701;
        yarda = valor*1.09361;
        pie = valor*3.28084;

    } else if (id === "pulgada")
    {
        pulgada = valor;
        metro = valor*0.0254;
        yarda = valor*0.0277778;
        pie = valor*0.0833333;

    } else if (id === "yarda")
    {
        yarda = valor;
        metro = valor*0.9144;
        pulgada = valor*36;
        pie = valor*3;

    } else if (id === "pie")
    {
        pie = valor;
        yarda = valor*0.333333;
        metro = valor*0.3048;
        pulgada = valor*12;

    }

    document.conversorUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.conversorUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.conversorUnidades.unid_yarda.value = Math.round(yarda*100)/100;
    document.conversorUnidades.unid_pie.value = Math.round(pie*100)/100;
}

/**
 * Conversion de Unidades de angulos en grados o radianes
 * @method conversionAngulos
 * @param {String} id - ID de los inputs del formulario
 */

function conversionAngulos(id) /*Verificar Funcionalidad*/
{
    let grados , rad;

    if (id == "grados")
    {
        grados = document.getElementById("grados").value;
        rad = (grados*Math.PI/180);

    }else if (id == "radianes")
    {
        rad = document.getElementById("radianes").value;
        grados = (rad*180/Math.PI);
    }

    document.getElementById("grados").value = grados;
    document.getElementById("radianes").value = rad;

}

/**
 * Segun el boton seleccionado, muestra u oculta el div en cuestion
 * @method mostrarOcultar
 * @param {string} valor - Valor de los botones del formulario
 */

function mostrarOcultar (valor)
{
    if (valor === "val_mostrar")
    {
        document.getElementById("div1").style.display = "block";
    } else if (valor === "val_ocultar")
    {
        document.getElementById("div1").style.display = "none";
    }
}

/**
 * Suma dos valores ingresados por el usuario
 * @method fnSuma
 */

function fnSuma()
{
    let num1 , num2;

    num1 = document.getElementById("nums1").value;
    num2 = document.getElementById("nums2").value;

    document.getElementById("totalS").value = Number(num1) + Number(num2);
}

/**
 * Resta dos valores ingresados por el usuario
 * @method fnResta
 */

function fnResta()
{
    let num1 , num2;

    num1 = document.getElementById("numr1").value;
    num2 = document.getElementById("numr2").value;

    document.getElementById("totalR").value = Number(num1) - Number(num2);
}

/**
 * Multiplica dos valores ingresados por el usuario
 * @method fnProducto
 */

function fnProducto()
{
    let num1 , num2;

    num1 = document.getElementById("numm1").value;
    num2 = document.getElementById("numm2").value;

    document.getElementById("totalM").value = Number(num1) * Number(num2);
}

/**
 * Divide dos valores ingresados por el usuario
 * @method fnDivision
 */

function fnDivision()
{
    let num1 , num2;

    num1 = document.getElementById("numd1").value;
    num2 = document.getElementById("numd2").value;

    document.getElementById("totalD").value = Number(num1) / Number(num2);
}

/**
 * Abre la segunda web cuando se apreta el boton
 * @method cargarWeb
 */

function cargarWeb()
{
    let cant , unidad , urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

/**
 * Carga los resultados de la primera web en la segunda cuando esta se carga
 * @method cargarResultado
 */

function cargarResultado()
{
    let cantidad , unidad , URL;

    URL = window.location.href;
    URL = URL.split("#");
    console.log(URL);

    cantidad = URL[1];
    unidad = URL[2];

    document.getElementById("dist").value = cantidad + ' ' + unidad;
}



function dibujarCirculoCuadrado(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d")

    let xMax = canvas.width;
    let yMax = canvas.height;
    let margen = 10;
    let tamCuadrado = 50;

    ctx.fillRect(0+margen, yMax-tamCuadrado-margen, tamCuadrado, tamCuadrado);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#9226c2";
    ctx.fill();
}

function borrarCanvas(){
    let canvas = document.getElementById("lienzoDibujo");
    let ctx = canvas.getContext("2d");

    canvas.widht = canvas.widht;
}
function cargarListener(){
    document.getElementById("lienzoDibujo").addEventListener("mousemove", function(event){
        let canvas = document.getElementById("lienzoDibujo");
        let ctx = canvas.getContext("2d");

        let mouseX = event.clientX;
        let mouseY = event.clientY;

        console.log(mouseX, mouseY);

        canvas.onmousedown = function(){bandera = true};
        canvas.onmouseup = function(){bandera = false};
        if(bandera){
            ctx.fillRect(mouseX-10, mouseY-10, 5, 5);
        }

    });
}


function dibujarCuadriculado(){
    let canvas= document.getElementById("myCanvas");
    let ctx= canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;

    //dibujar lineas horizontales

    for(let i=20; i<yMax;){
        ctx.beginPath();
        ctx.moveTo(0, i)
        ctx.lineTo(xMax, i);
        ctx.strokeStyle = "#1b73f8";
        ctx.stroke();
        ctx.closePath();
        i = i +20;}

    for(let i=20; i<xMax;){
        ctx.beginPath();
        ctx.moveTo(i, 0)
        ctx.lineTo(i, yMax);
        ctx.strokeStyle = "#1b73f8";
        ctx.stroke();
        ctx.closePath();
        i = i +20;
    }

    //Ejex
    ctx.beginPath();
    ctx.moveTo(0, yMax/2);
    ctx.lineTo(xMax, yMax/2);
    ctx.strokeStyle = "#ff0009";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.font= "10pt Verdiana";
    ctx.fillStyle = "blue";
    ctx.fillText("Eje x", canvas.width/2, canvas.height/2);
    ctx.closePath();



    //Ejey
    ctx.beginPath();
    ctx.moveTo(xMax/2, 0);
    ctx.lineTo(xMax/2, yMax);
    ctx.strokeStyle = "#ff0009";
    ctx.stroke();
    ctx.closePath();
}

function dibujarAuto(posX, posY) {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let img;
    canvas.width = canvas.width;


    img = new Image();
    img.src = "images/auto.png";

    console.log(posX, posY);

    img.onload = function () {
        ctx.drawImage(img, posX, posY);
        console.log("Se deberia dibujar la imagen")
    }
}

x = 0;
dx = 2;
function animarAuto(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let img;

    canvas.width = canvas.width;

    img = new Image();
    img.src = "images/auto.png";



    img.onload = function () {
        ctx.drawImage(img, x, 100);
    }

    if(x>canvas.width){
        x = 0;
    }
    x = x + dx;
}