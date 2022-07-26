const gallery = document.querySelectorAll(".image"),
    previewBox = document.querySelector(".preview-box"),
    previewImg = previewBox.querySelector("img"),
    closeIcon = previewBox.querySelector(".icon"),
    currentImg = previewBox.querySelector(".current-img"),
    totalImg = previewBox.querySelector(".total-img"),
    shadow = document.querySelector(".shadow");
window.onload = () => {
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; 
        let newIndex = i; 
        let clickedImgIndex; 

        gallery[i].onclick = () => {
            clickedImgIndex = i; 
            function preview() {
                currentImg.textContent = newIndex + 1;
                let imageURL = gallery[newIndex].querySelector("img").src; 
                previewImg.src = imageURL; 
            }
            preview(); 

            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if (newIndex == 0) { 
                prevBtn.style.display = "none";
            }
            if (newIndex >= gallery.length - 1) { 
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = () => {
                newIndex--; 
                if (newIndex == 0) {
                    preview();
                    prevBtn.style.display = "none";
                } else {
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = () => {
                newIndex++; 
                if (newIndex >= gallery.length - 1) {
                    preview();
                    nextBtn.style.display = "none";
                } else {
                    preview();
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show");
            shadow.style.display = "block";
            closeIcon.onclick = () => {
                newIndex = clickedImgIndex; 
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }

    }
}









/* const camara = [
    {nombre: "Sony a7M3", precio: 500000},
    {nombre2: "Sony ILCE 7K", precio: 200000}
]
const resultadoBusqueda = camara.find((el) => el.nombre ==="Sony a7M3")

alert(resultadoBusqueda.nombre)

 */


const produ =[
    {nombre: 'Sony a7', precio: '$ 200.000'},
    {nombre: 'Sony a6400', precio: '$ 200.000'},
    {nombre: 'Sony a7rii', precio: '$ 150.000'},
    {nombre: 'Sony a7riii', precio: '$ 400.000'},
    {nombre: 'Sony a7iv', precio: '$ 500.000'},
    {nombre: 'Sony a7siii', precio: '$ 600.000'},
    {nombre: 'Sony a7sii', precio: '$ 250.000'},
    {nombre: 'Sony a6600', precio: '$ 350.000'},
    {nombre: 'Canon 5D Marki', precio: '$ 50.000'},
    {nombre: 'Canon 5D Markii', precio: '$ 150.000'},
    {nombre: 'Canon 5D Markiii', precio: '$ 520.000'},
    {nombre: 'Canon 5D Markiv', precio: '$ 5.340.000'},
    {nombre: 'Nikon d600', precio: '$ 78.000'},
    {nombre: 'Nikon d60', precio: '$ 28.000'},
    {nombre: 'Nikon d3400', precio: '$ 18.000'},
    {nombre: 'Macbook', precio: '$ 2000.000'}
];

const formulario = document.querySelector('#buscame');
const boton= document.querySelector('#buscar')
const resultado = document.querySelector('#resultado')

const filtrar=()=>{
    //console.log(formulario.value);
    resultado.innerHTML = '';
    
    const texto= formulario.value.toLowerCase();
    event.preventDefault();

    for (let producto of produ){
       let nombre = producto.nombre.toLowerCase();
       if(nombre.indexOf(texto) !== -1) {
        resultado.innerHTML += `
        <li>${producto.nombre} - valor: ${producto.precio}</li>
        `
       }
    }
    if (resultado.innerHTML===''){
        resultado.innerHTML+=
        swal("Producto no encontrado...")
        
    }
}
boton.addEventListener('click', filtrar);
formulario.addEventListener('keyUp', filtrar);

