
/*Constante */ 
const images = [
    { src: 'img/Caminho-do-Ouro.jpg', alt: 'caminho do ouro' },
    { src: 'img/Ilha-do-Cedro.jpg', alt: 'ilha do cedro' },
    { src: 'img/Lagoa-Azul.jpg', alt: 'lagoa azul' },
    { src: 'img/Cachoeira.jpg', alt: 'cachoeira' },
    { src: 'img/Cais.jpg', alt: 'cais' },
    { src: 'img/Poco-Ingleses.jpg', alt: 'poços ingleses' }
];

const array_images = [ 'img/Caminho-do-Ouro.jpg',  'caminho do ouro'
, 'img/Ilha-do-Cedro.jpg', 'ilha do cedro' 
, 'img/Lagoa-Azul.jpg',  'lagoa azul' 
, 'img/Cachoeira.jpg',  'cachoeira' 
, 'img/Poco-Ingleses.jpg',  'poços ingleses' ];

let index = 0;

function exibeGaleria(){
    // Array com os caminhos das imagens e seus respectivos textos alternativos

    const galeriaDiv = document.querySelector('.galeria');

    // Para cada imagem no array, cria um elemento img e o adiciona à div galeria
    images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.alt;
    galeriaDiv.appendChild(imgElement);
    });

     // Função para alterar a imagem do slideshow
  function changeImage() {

   window.alert("oi")

    const slideshow = document.getElementById('slideshow');
   
    slideshow.innerHTML = `<img src="${array_images[index]}" alt=" ${array_images[index + 1]}">`;
    
    index = (index + 2) % images.length; // Avança para a próxima imagem circularmente
  }

    
}

