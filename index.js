
// burger 

const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () =>{
    nav.classList.toggle("nav-open")
    burger.classList.toggle("toggle")
})

links.forEach( link => {
    link.addEventListener("click", ()=>{
        nav.classList.toggle("nav-open");
        burger.classList.toggle("toggle");
    });
})

//spinners 

const buttons = document.querySelectorAll('.blacky');

buttons.forEach(button => {
    button.addEventListener('click',function() {
        button.classList.toggle('button-loading');
    })
})

//carousel

let firstSlider = document.querySelectorAll('.first-products');
let secondSlider = document.querySelectorAll('.second-products');
let arrows = document.querySelectorAll('.arrow');
let move = 0;
let movePer = 29;
let maxMove = 120;
let mob_view1 = window.matchMedia("(max-width: 375px)");
let mob_view2 = window.matchMedia("(max-width: 500px)");
let mob_view3 = window.matchMedia("(max-width: 640px)");
	
  
    if (mob_view3.matches) {
        movePer = 30;
        maxMove = 180;
    }
    if (mob_view2.matches) {
        movePer = 45;
        maxMove = 300;
    }
    if (mob_view1.matches) {
        movePer = 65;
        maxMove = 400;
    }


	function right_mover (slider){
		move = move + movePer;
       
		for (const product of slider)
		{
			if (move > maxMove)
            { move = move - movePer;}
			product.style.left = '-' + move + '%';

		}

	}

	function left_mover(slider){
		move = move - movePer;
		if (move<=0){move = 0;}
		for(const product of slider){
			if (Math.ceil(slider.length/4) >1 ){
				product.style.left = '-' + move + '%';
			}
		}
	}
    


arrows[1].addEventListener('click', function(){
    right_mover(firstSlider);
});
arrows[0].addEventListener('click', function(){
    left_mover(firstSlider);
});
arrows[3].addEventListener('click', function(){
    right_mover(secondSlider);
});
arrows[2].addEventListener('click', function(){
    left_mover(secondSlider);
});