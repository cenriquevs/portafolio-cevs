window.addEventListener("scroll", function(){
    var hrf = this.document.querySelector("nav");
    hrf.classList.toggle("active" , window.scrollY >=450)
})

var imagenes =['img/D1.jpg','img/D2.jpg','img/D3.jpg','img/D4.jpg','img/D5.jpg','img/D6.jpg','img/D7.jpg','img/D8.jpg','img/D9.jpg','img/D10.jpg','img/D11.jpg','img/D12.jpg','img/D13.jpg','img/D14.jpg','img/D15.jpg','img/D16.jpg','img/D17.jpg','img/D18.jpg','img/D19.jpg','img/D20.jpg','img/D21.jpg','img/D22.jpg','img/D23.jpg','img/D24.jpg','img/D25.jpg','img/D26.jpg','img/D27.jpg','img/D28.jpg','img/D29.jpg']
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

