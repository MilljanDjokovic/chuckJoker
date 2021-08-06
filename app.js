console.log("May the code be with You all");

// Get button and p element from the Dom

let button = document.getElementById('btn');
let jokeText = document.getElementById('output');


//Add button click event listener 

button.addEventListener('click', function(){
    
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        let joke = data.value;
        jokeText.innerText = `${joke}`
    });

}); 
