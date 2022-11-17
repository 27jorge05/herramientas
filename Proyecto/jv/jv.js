window.onload=function(){
    //alert("corre");
    $("#foot").hide();
    $("#señuelo").mouseenter(function(){
      $("#foot").show();
    });
    $("#señuelo").mouseleave(function(){
        $("#foot").hide();
      });
     
    todo();


}
const personas = [
    { id: 1,precio: 115,h:"bateria",p:1, nombre: 'LeandraMakita HP333DSAP1 10.8V Litio-Ion Batería juego de taladro percutor / destornillador (1x batería de 2 Ah) en bolso - ROSA' }, 
    { id: 2,precio: 135,h:"bateria",p:0, nombre: 'Makita DHR243RTJW 18V Li-Ion Batería SDS-plus Martillo combinado con mandril de cambio rápido y juego de extracción de polvo' }, 
    { id: 3,precio: 250,h:"bateria",p:0 ,nombre: 'Makita DCG180ZXK 18V Batería Li-Ion Pegamento y sellador cuerpo , incluido el soporte de tubo y el soporte de cartucho en' }, 
    { id: 4,precio: 255,h:"electricas",p:0 ,nombre: "Fein FMM 350 QSL Multimaster Top Herramienta multiuso + juego de accesorios de 41 piezas en maletín - 350 W " }, 
    { id: 5,precio: 225,h:"electricas",p:1, nombre: 'Makita TM3010CX5J Multiherramienta + juego de accesorios de 56 piezas en Mbox - 320W' }, 
    { id: 6,precio: 140,h:"electricas",p:1, nombre: 'DeWalt D25033K SDS-plus Martillo combinado en maletín - 710W - 2J - D25033K-QS' }, 
    { id: 7,precio: 45,h:"manuales",p:0 ,nombre: 'Juego de camping Fiskars 1025439 - Hacha - Sierra - Cuchillo' }, 
    { id: 8,precio: 113,h:"manuales",p:1, nombre: 'Brüder Mannesmann 98430 conjunto doble 215-delige - 1/4 ", 3/8" y 1/2 "' }, 
    { id: 9,precio: 73,h:"manuales",p:1, nombre: "Wolfcraft VLC 800 Laminaatsnijder - 661 x 211 x 197 mm - 6939000" }, 
    { id: 10,precio: 301,h:"medicion",p:0, nombre: "Laserliner BeamControl-Master 120 Juego de Láser rotatorio incluido trípode y receptor - 120 m - 026.04.00A" }, 
    { id: 11,precio: 111,h:"medicion",p:0, nombre: "Wolfcraft 6949000" }, 
    { id: 12,precio: 113,h:"medicion",p:1, nombre: "Bosch GMS 120 Detector digital con funda - 120mm - 0601081000" }];
function todo(personas2=personas,q=0){
    //alert("llego todo");
    res="";
    for(let i=0;i<personas2.length;i++)
    {
        console.log(" for i: "+i);
        r="<div class='ficha'> <img src='img/"+personas2[i].id+".jpg'>";
        r+="<p><a href='#'>"+personas2[i].nombre+"</a></p>";
        if(q==1)
        {
            r+="<div id='cont'> <h1 style='    text-decoration: line-through;    '>"+parseInt((personas2[i].precio)*0.8)+"Bs</h1>"+"<h1>"+personas2[i].precio+"Bs</h1> </div>";
        }
        else{
            r+="<h1>"+personas2[i].precio+"Bs</h1>";
        }
        if (q==1)
        {
            r+="<img class='promocion' src='img/promocion.png'>"
        }

        r+="<div class='acar'>  Añadir al carro <img src='img/carrito.png'> </div> </div> ";
        res+=r;
    }
    actualiza(res);
}
function ba(personas2=personas,q=0){
    //alert("llego todo");
    res="";
    let p= personas2.filter(pe=>pe.h=="bateria")
    for(let i=0;i<p.length;i++)
    {
        console.log("ba for i: "+i);
        r="<div class='ficha'> <img src='img/"+p[i].id+".jpg'>";
        r+="<p><a href='#'>"+p[i].nombre+"</a></p>";
        if(q==1)
        {
            r+="<div id='cont'> <h1 style='    text-decoration: line-through;    '>"+parseInt((p[i].precio)*0.8)+"Bs</h1>"+"<h1>"+p[i].precio+"Bs</h1> </div>";
        }
        else{
            r+="<h1>"+p[i].precio+"Bs</h1>";
        }
        if (q==1)
        {
            r+="<img class='promocion' src='img/promocion.png'>"
        }

        r+="<div class='acar'>  Añadir al carro <img src='img/carrito.png'> </div> </div> ";
        res+=r;
    }
    actualiza(res);
}
function el(personas2=personas,q=0){
    //alert("llego todo");
    res="";
    let p= personas2.filter(pe=>pe.h=="electricas")
    for(let i=0;i<p.length;i++)
    {
        console.log("ba for i: "+i);
        r="<div class='ficha'> <img src='img/"+p[i].id+".jpg'>";
        r+="<p><a href='#'>"+p[i].nombre+"</a></p>";
        if(q==1)
        {
            r+="<div id='cont'> <h1 style='    text-decoration: line-through;    '>"+parseInt((p[i].precio)*0.8)+"Bs</h1>"+"<h1>"+p[i].precio+"Bs</h1> </div>";
        }
        else{
            r+="<h1>"+p[i].precio+"Bs</h1>";
        }
        if (q==1)
        {
            r+="<img class='promocion' src='img/promocion.png'>"
        }

        r+="<div class='acar'>  Añadir al carro <img src='img/carrito.png'> </div> </div> ";
        res+=r;
    }
    actualiza(res);
}
function ma(personas2=personas,q=0){
    //alert("llego todo");
    res="";
    let p= personas2.filter(pe=>pe.h=="manuales")
    for(let i=0;i<p.length;i++)
    {
        console.log("ba for i: "+i);
        r="<div class='ficha'> <img src='img/"+p[i].id+".jpg'>";
        r+="<p><a href='#'>"+p[i].nombre+"</a></p>";
        if(q==1)
        {
            r+="<div id='cont'> <h1 style='    text-decoration: line-through;    '>"+parseInt((p[i].precio)*0.8)+"Bs</h1>"+"<h1>"+p[i].precio+"Bs</h1> </div>";
        }
        else{
            r+="<h1>"+p[i].precio+"Bs</h1>";
        }
        if (q==1)
        {
            r+="<img class='promocion' src='img/promocion.png'>"
        }

        r+="<div class='acar'>  Añadir al carro <img src='img/carrito.png'> </div> </div> ";
        res+=r;
    }
    actualiza(res);
}
function me(personas2=personas,q=0){
    //alert("llego todo");
    res="";
    let p= personas2.filter(pe=>pe.h=="medicion")
    for(let i=0;i<p.length;i++)
    {
        console.log("ba for i: "+i);
        r="<div class='ficha'> <img src='img/"+p[i].id+".jpg'>";
        r+="<p><a href='#'>"+p[i].nombre+"</a></p>";
        if(q==1)
        {
            r+="<div id='cont'> <h1 style='    text-decoration: line-through;    '>"+parseInt((p[i].precio)*0.8)+"Bs</h1>"+"<h1>"+p[i].precio+"Bs</h1> </div>";
        }
        else{
            r+="<h1>"+p[i].precio+"Bs</h1>";
        }
        if (q==1)
        {
            r+="<img class='promocion' src='img/promocion.png'>"
        }

        r+="<div class='acar'>  Añadir al carro <img src='img/carrito.png'> </div> </div> ";
        res+=r;
    }
    actualiza(res);
}
function actualiza(r){
    //alert("llego actualizar");
    document.getElementById("part2").innerHTML=r;

}
function prom(f){
    ayu=personas.filter(per=>per.p==1);
    if (f==1)
    {
        todo(ayu,1);
    }
    else if(f==2){
        ba(ayu,1);
    }
    else if(f==3){
        el(ayu,1);
    }
    else if(f==4){
        ma(ayu,1);
    }
    else if(f==5){
        me(ayu,1);
    }

}


