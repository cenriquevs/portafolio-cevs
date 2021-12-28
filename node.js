window.addEventListener("scroll", function(){
    var hrf = this.document.querySelector("nav");
    hrf.classList.toggle("active" , window.scrollY >=450)
})

var imagenes =['img/D3.jpg','img/D4.jpg','img/D1.jpg','img/d2.jpg','img/cloud.jpg']
var cont = 0;

function carruosel(contenedor){
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;

        if (tgt == atras){
            if(cont > 0){
                img.src = imagenes[cont - 1];
                cont --;
            }else{
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length -1;
            }
        } else if(tgt == adelante){
            if(cont < imagenes.length - 1){
                img.src = imagenes[cont + 1];
                cont++;
            } else{
                img.src = imagenes[0];
                cont = 0;
            }
        }
    });
}
document.addEventListener("DOMContentLoaded", ()=>{
    let contenedor = document.querySelector('.soport');
    carruosel(contenedor);
});

function cv(){
    location.href = "doc.html"
}

