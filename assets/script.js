const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right'); 
const dots = document.querySelector('.dots');

let currentSlide = 0; 

/*Gestionnaire d'événements pour les clics sur les flèches*/ 

arrowLeft.addEventListener("click", function(){
	console.log('Left arrow clicked!'); 
	currentSlide = (currentSlide -1);
	updateCarrousel (currentSlide, 'left');
	updateDots();
})

arrowRight.addEventListener("click", function(){
	console.log('Right arrow clicked!'); 
	currentSlide = (currentSlide +1); 
	updateCarrousel (currentSlide, 'right');
	updateDots();
})

/*Ajout des bullet points*/ 

function createDots(){
	for (let i = 0; i < slides.length; i++){
		const dot = document.createElement('div');
		dot.classList.add('dot');
		dots.appendChild(dot);
	}
}

createDots()

function updateDots(){
	const listeDots = document.querySelectorAll(".dot");
	for (let i = 0; i < listeDots.length; i++){ 

		const dot = listeDots[i];
		if (i == currentSlide){
			dot.classList.add('dot_selected');
		}
		else{
		dot.classList.remove('dot_selected');
	}
	}
}

updateDots()
/*Mise à jour du carrousel*/

function updateCarrousel(index, direction) {
	if (currentSlide === -1 && direction === 'left') {
		currentSlide = slides.length - 1;
  } else if (currentSlide === slides.length && direction === 'right') {
	currentSlide = 0;
  }

/*Mettre à jour l'image*/
  const imagePath = `assets/images/slideshow/${slides[currentSlide].image}`;
  bannerImg.src = imagePath;
  bannerImg.alt = `Slide ${currentSlide + 1}`;

/*Mettre à jour le texte*/
  const tagLine = slides[currentSlide].tagLine;
  document.querySelector('p').innerHTML = tagLine;
}
