let carte = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


let valore;
riempi('All');

document.getElementById('scelta').addEventListener('change', function(){

	// console.log('ciccia' + this.value);
	valore = parseInt(this.value);
	// console.log(valore);
    play();
	
});


function play() {
	document.querySelector('.container').innerHTML = "";

	// console.log(valore);
    switch(valore){
        case 1:
			console.log('caso1');
            riempi('All'); 
            break;
        case 2: 
			console.log('caso2');
			riempi('Animali');
            break;
		case 3: 
			console.log('caso3');
			riempi('Piante');
            break;
		case 4:  
			console.log('caso4');
			riempi('Utente');
	} 
	      
}


function riempi(caso){
	if(caso == 'All'){
		for(let i = 0; i < carte.length;i++){
			addCard(carte[i]);
			console.log(i);
		}
	}else if(caso == 'Animali'){
		for(let i = 0; i < carte.length;i++){
			if(carte[i].type == 'animal'){
				addCard(carte[i]);
				console.log(i);
			}
		}
	}else if(caso == 'Piante'){
		for(let i = 0; i < carte.length;i++){
			if(carte[i].type == 'vegetable'){
				addCard(carte[i]);
				console.log(i);
			}
		}
	}else if(caso == 'Utente'){
		for(let i = 0; i < carte.length;i++){
			if(carte[i].type == 'user'){
				addCard(carte[i]);
				console.log(i);
			}
		}
	}
}


function addCard(carta){

	let card =`
	<div class="box ${carta.color}">
        <i class="${carta.family} ${carta.prefix}${carta.name}"></i>
        <span>${carta.name}</span>
    </div>`


	document.querySelector('.container').innerHTML += card;
}







