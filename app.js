

let openShopping = document.querySelector('.shopping');

let closeShopping = document.querySelector('.closeShopping');

let list = document.querySelector('.list');

let listCard = document.querySelector('.listCard');

let body = document.querySelector('body');

let total = document.querySelector('.total');

let quantity = document.querySelector('.quantity');

let final = document.querySelector('.final');
let closefinal = document.querySelector('.closefinal');

openShopping.addEventListener('click', ()=>{
	body.classList.add('active');
}); 

closeShopping.addEventListener('click', ()=>{
	body.classList.remove('active');
});


		final.addEventListener('click', ()=>{
			body.classList.add('active-final');
		}); 

		closefinal.addEventListener('click', ()=>{
			body.classList.remove('active-final');
		});


let products = [
	{
		id: 1,
		name: 'Pixie Curls',
		image: 'aa.jpg',
		price: 8000

	},
	{
		id: 2,
		name: 'Bouncy Curls',
		image: 'a.jpg',
		price: 7500
	},
	{
		id: 3,
		name: 'Fringe Blunt Cut',
		image: 'b.jpg',
		price: 4500	
	},
	{
		id: 4,
		name: '12" Blunt Cut',
		image: 'c.jpg',
		price: 6850

	},
	{
		id: 5,
		name: 'Afro Wine-red',
		image: 'd.jpg',
		price: 3500

	},
	{
		id: 6,
		name: 'Afro Whitish',
		image: 'e.jpg',
		price: 3500

	},
	{
		id: 4,
		name: 'Illusion Frontal Curls',
		image: 'f.jpg',
		price: 4000

	},
	{
		id: 5,
		name: 'T Frontal Curls',
		image: 'g.jpg',
		price: 4000

	},
	{
		id: 6,
		name: 'Silky Straight',
		image: 'h.jpg',
		price: 6000

	},
	{
		id: 6,
		name: 'Silky Straight',
		image: 'i.jpg',
		price: 6000

	},
	{
		id: 6,
		name: 'T Frontal Bob hair blend',
		image: 'j.jpg',
		price: 10000

	},
	{
		id: 6,
		name: 'Blunt Cut T27',
		image: 'main.jpg',
		price: 6500

	},

];

let listCards = [];
function initApp(){
	products.forEach((value, key)=>{
		let newDiv = document.createElement('div');
		newDiv.classList.add('item');
		newDiv.innerHTML = `
			<img src="image/${value.image}"/>
			<div class="title">${value.name}</div>
			<div class="price">N ${value.price.toLocaleString()}</div>
			<button onClick="addToCard(${key})">Add To Cart</button>
			`;
			list.appendChild(newDiv);

	})
}
initApp(); 

function addToCard(key){
	if(listCards[key] == null){
		listCards[key] = JSON.parse(JSON.stringify(products[key]));
		listCards[key].quantity = 1;
	}
	reloadCard();
}
function reloadCard(){
	listCard.innerHTML = '';
	let count = 0;
	let totalPrice = 0;
	listCards.forEach((value, key) => {
		totalPrice = totalPrice + value.price;
		count = count + value.quantity;
		if(value != null){
			let newDiv = document.createElement('li');
			newDiv.innerHTML = `
				<div class="pname"><img src="image/${value.image}"/></div>
				<div class="pname">${value.name}</div>
				<div class="pname">N ${value.price.toLocaleString()}</div>
				<div>
					<button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
					<div class="count">${value.quantity}</div>
					<button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
				</div>	
			`
			listCard.appendChild(newDiv);
		}
	})
	total.innerText = "N " + totalPrice.toLocaleString();
	quantity.innerText = count;  

}
function changeQuantity(key, quantity){
	if(quantity == 0){
		delete listCards[key];
	} else {
		listCards[key].quantity = quantity;
		listCards[key].price = quantity * products[key].price;
	}
	reloadCard();
}
function showAboutUs(about) {
	var about = document.getElementById(about);
	about.style.display = about.style.display == "block"? "none": "block";
}
function hideAboutUs(button){
	var button = document.getElementById(button);
	button.style.display = button.style.display == "none"? "block": "none"
}
function contactUs(us){
	var contact = document.getElementById(us);
	contact.style.display = contact.style.display == "block"? "none" : "block"
}
function hideContact(hide){
	var hide = document.getElementById(hide);
	hide.style.display = hide.style.display == "none"? "block" : "none"
}
 function showNum(num){
    var num = document.getElementById(num);
    num.style.visibility = num.style.visibility == "visible"? "hidden" : "visible";
}
function showBar(bar){
	var bar = document.getElementById(bar);
	bar.style.display = bar.style.display == "block"? "none" : "block";
}


