const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

const backgrounds = [
  'https://t3.ftcdn.net/jpg/02/14/52/44/240_F_214524451_LXXWMRWQ7glWwoyysjQtlwMNP1Igqnh2.jpg',
  'https://t3.ftcdn.net/jpg/02/70/35/00/240_F_270350073_WO6yQAdptEnAhYKM5GuA9035wbRnVJSr.jpg',
  'https://plus.unsplash.com/premium_photo-1673643405538-de0f82933fcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  
];

  let noOfBackground = 0;

  function changeBackground() {
    noOfBackground = (noOfBackground + 1) % backgrounds.length;

    document.querySelector('#page-1-bcg').style.backgroundImage = `url(${backgrounds[noOfBackground]})`;
  }
  setInterval(changeBackground, 7000);

const backgroundImageOne = [
    'https://t3.ftcdn.net/jpg/08/32/30/94/240_F_832309418_9iOQaBMLN38nXc9KmxiLvEcnNUbl1pu9.jpg',
    'https://t3.ftcdn.net/jpg/00/42/75/26/240_F_42752689_m827sA2kb4iB7Zs1mTQXGoefeDtmc3VF.jpg',
    'https://t3.ftcdn.net/jpg/09/64/27/08/240_F_964270871_weqP4ZfukiRhGeQq9LjaqPJ14cGlddqt.jpg',
    'https://t3.ftcdn.net/jpg/09/55/00/72/240_F_955007251_4s2fsY8zmadfok5JWm5oJ0dIXkFolqpZ.jpg'
];
let noOfBackgroundOne = 0;

function changeBackgroundOne() {
  noOfBackgroundOne = (noOfBackgroundOne + 1) % backgroundImageOne.length;

  document.querySelector('#one .img-sec').style.backgroundImage = `url(${backgroundImageOne[noOfBackgroundOne]})`;

}
setInterval(changeBackgroundOne, 5000);

const backgroundImageTwo = [
    'https://t4.ftcdn.net/jpg/05/21/12/67/240_F_521126741_WkkRsiKNWAaQVZLiS1DZ3spLZAUdeRDP.jpg',
    'https://as1.ftcdn.net/v2/jpg/04/14/52/02/1000_F_414520267_8LZvjYGVdGAGOOqkour0YQVsuakYIniH.jpg',
    'https://t3.ftcdn.net/jpg/04/14/52/02/240_F_414520267_8LZvjYGVdGAGOOqkour0YQVsuakYIniH.jpg',
    'https://t3.ftcdn.net/jpg/06/44/83/10/240_F_644831069_LkTlN9BgnjkopOnvVhQ06UwY99SDo7uM.jpg'
];
let noOfBackgroundTwo = 0;

function changeBackgroundTwo() {
  noOfBackgroundTwo = (noOfBackgroundTwo + 1) % backgroundImageTwo.length;

  document.querySelector('#two .img-sec').style.backgroundImage = `url(${backgroundImageTwo[noOfBackgroundTwo]})`;

}
setInterval(changeBackgroundTwo, 5000);
const backgroundImageThree = [
    'https://t4.ftcdn.net/jpg/01/27/28/35/240_F_127283542_fJTevf0DHy7WMSc21fmIttJuXnYwGZSm.jpg',
    'https://t3.ftcdn.net/jpg/00/14/16/64/240_F_14166473_05vWZwx6n4XHECiYuCm492PU46PHjOYZ.jpg',
    'https://t3.ftcdn.net/jpg/01/44/18/78/240_F_144187878_2Z2pHfO3mTedbUhEkEvH4Wop9hD97Rq0.jpg',
    'https://t4.ftcdn.net/jpg/05/83/88/95/240_F_583889520_XCjgJ1XcMKy548yCGsktjQc8sxB7Hgbd.jpg'
];
let noOfBackgroundThree = 0;
function changeBackgroundThree() {
  noOfBackgroundThree = (noOfBackgroundThree + 1) % backgroundImageThree.length;
  document.querySelector('#three .img-sec').style.backgroundImage = `url(${backgroundImageThree[noOfBackgroundThree]})`;
}
setInterval(changeBackgroundThree, 5000);

const backgroundImageFour = [
    'https://t4.ftcdn.net/jpg/09/01/84/31/240_F_901843106_MX8UpyWOALnEZ78wtT3RKbQoF7Bu32qA.jpg',
    'https://images.pexels.com/photos/23732429/pexels-photo-23732429/free-photo-of-sailing-boats-in-bay.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/208340/pexels-photo-208340.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/24742343/pexels-photo-24742343/free-photo-of-aerial-view-of-the-guanabara-bay-with-the-sugarloaf-mountain-at-sunset-rio-de-janeiro-brazil.jpeg?auto=compress&cs=tinysrgb&w=600',
];
let noOfBackgroundFour = 0;
function changeBackgroundFour() {
  noOfBackgroundFour = (noOfBackgroundFour + 1) % backgroundImageFour.length;
  document.querySelector('#four .img-sec').style.backgroundImage = `url(${backgroundImageFour[noOfBackgroundFour]})`;
}
setInterval(changeBackgroundFour, 5000);

const backgroundImageFive = [
    'https://t4.ftcdn.net/jpg/09/73/31/27/240_F_973312744_Y7VvYXNl2kErQ5EtLQpEtlG6l6kcg4L5.jpg',
    'https://t4.ftcdn.net/jpg/05/79/98/33/240_F_579983339_joSA1MqsnKgSX6gkf74G626PEXw0NCJD.jpg',
    'https://t4.ftcdn.net/jpg/00/98/35/21/240_F_98352199_bIEGksPeFhI7X9COFfV5S4wYmg6Hbai3.jpg',
    'https://t3.ftcdn.net/jpg/06/37/51/60/240_F_637516043_TsykkJiDtGu83Xec9IF01qaJBYxofdap.jpg',
];
let noOfBackgroundFive = 0;
function changeBackgroundFive() {
  noOfBackgroundFive = (noOfBackgroundFive + 1) % backgroundImageFive.length;
  document.querySelector('#five .img-sec').style.backgroundImage = `url(${backgroundImageFive[noOfBackgroundFive]})`;
}
setInterval(changeBackgroundFive, 5000);

const backgroundImageSix = [
    'https://t4.ftcdn.net/jpg/01/58/22/93/240_F_158229385_iUUozthkFxBKhjU559MtVv8Q1CaEjCEH.jpg',
    'https://t4.ftcdn.net/jpg/02/09/71/41/240_F_209714142_7rI2tTIcNeaRAhoTN5T7EckLuhEkTGcR.jpg',
    'https://t3.ftcdn.net/jpg/02/54/70/32/240_F_254703201_3vpALE5zQwQgyU1SslEVqVyriuZslsGf.jpg',
    'https://t3.ftcdn.net/jpg/00/56/87/48/240_F_56874840_LFtwqLfxEqYtBLccCCcxksX4C2q8WNfh.jpg',
];
let noOfBackgroundSix = 0;
function changeBackgroundSix() {
  noOfBackgroundSix = (noOfBackgroundSix + 1) % backgroundImageSix.length;
  document.querySelector('#six .img-sec').style.backgroundImage = `url(${backgroundImageSix[noOfBackgroundSix]})`;
}
setInterval(changeBackgroundSix, 5000);

const backgroundImageSeven = [
    'https://t4.ftcdn.net/jpg/05/39/95/49/240_F_539954938_CVb0S2AaTtK2ERmiznChbh9yS5Y0WP6q.jpg',
    'https://t3.ftcdn.net/jpg/09/06/34/00/240_F_906340053_7UTgFYfXSN9POzgchP0HdZl31XCoTNUy.jpg',
    'https://t4.ftcdn.net/jpg/08/68/91/51/240_F_868915175_BYa8mMOy9jO1n1P5UhctMEsuNfUbv57x.jpg',
    'https://t4.ftcdn.net/jpg/09/74/12/55/240_F_974125567_k4Pt5bVuNGOJJtKCCpuBOIHWs1roOeho.jpg',
];
let noOfBackgroundSeven = 0;
function changeBackgroundSeven() {
  noOfBackgroundSeven = (noOfBackgroundSeven + 1) % backgroundImageSeven.length;
  document.querySelector('#seven .img-sec').style.backgroundImage = `url(${backgroundImageSeven[noOfBackgroundSeven]})`;
}
setInterval(changeBackgroundSeven, 5000);



let currentIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.explore-nature');
    
    slides.forEach(slide => slide.style.display = 'none');
    
    for (let i = 0; i < 2; i++) {
        let slideIndex = (currentIndex + i) % slides.length;
        slides[slideIndex].style.display = 'flex';
    }
}

function nextSlide() {
    const slides = document.querySelectorAll('.explore-nature');
    currentIndex = (currentIndex + 2) % slides.length;
    showSlides();
}

function prevSlide() {
    const slides = document.querySelectorAll('.explore-nature');
    currentIndex = (currentIndex - 2 + slides.length) % slides.length;
    showSlides();
}
showSlides();
setInterval(nextSlide, 4000);