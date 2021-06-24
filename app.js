// import functions

// reference needed DOM elements
// const playCat = document.getElementById('play-cat');
const catSound = document.getElementById('cat-sound');
const cat = document.getElementById('cat');
const dogSound = document.getElementById('dog-sound');
const dog = document.getElementById('dog');
const horseSound = document.getElementById('horse-sound');
const horse = document.getElementById('horse');


// set event listeners 
cat.addEventListener('click', ()=>{
    catSound.play();
});
dog.addEventListener('click', ()=>{
    dogSound.play();
});
horse.addEventListener('click', ()=>{
    horseSound.play();
});


document.addEventListener('keydown', event => {
    // console.log(event.code);
    if (event.code === 'KeyC'){
        catSound.play();
    }
    if (event.code === 'KeyD'){
        dogSound.play();
    }
    if (event.code === 'KeyH'){
        horseSound.play();
    }
});
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)

// document.addEventListener('keydown', (event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
// }, false);
  