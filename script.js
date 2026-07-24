// Fade animation
const cards = document.querySelectorAll(".card,.blog-card");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
});

cards.forEach(card=>{
card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="0.8s";
observer.observe(card);
});

// Navbar shadow on scroll
window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>50){
nav.style.boxShadow="0 5px 25px rgba(0,0,0,.5)";
}else{
nav.style.boxShadow="none";
}

});

// Button click effect
document.querySelectorAll(".btn").forEach(btn=>{
btn.addEventListener("click",(e)=>{
e.preventDefault();
alert("Welcome to AI Master Hub 🚀");
});
})function searchSite(){

let text=document.getElementById("searchInput").value.toLowerCase();

if(text.includes("chatgpt")){
alert("ChatGPT page will open soon.");
}
else if(text.includes("ai")){
alert("AI Tools page will open soon.");
}
else if(text==""){
alert("Please enter something.");
}
else{
alert("No result found.");
}

}
