//your JS code here. If required.

const btn =document.getElementById("incrementBtn")
const counter=document.getElementById("counter")
let c=0;

btn.addEventListener('click', ()=>{
	c++;
	counter.innerText=c.toString()
})