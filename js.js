function showSection(evt,sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden')
        
    });

    // Show the selected section
    document.getElementById(sectionId).classList.remove('hidden');
    document.querySelectorAll('.tabs').forEach(tab=>{
        tab.classList.remove("active")
    })
    evt.currentTarget.className += " active";
}
// Get the side nav and hamburger icon
// Get the side nav, hamburger, and close button
const sidenav = document.getElementById('sidenav');
const hamburger = document.getElementById('hamburger');
const closebtn = document.getElementById('closebtn');

// Toggle the sidenav on/off when clicking the hamburger icon
hamburger.addEventListener('click', () => {
    sidenav.style.width = '250px';
});

// Close the sidenav when clicking the close button
closebtn.addEventListener('click', () => {
    sidenav.style.width = '0';
});
const hider=()=>{
    sidenav.style.display="none"
}
hamburger.addEventListener('click',()=>{
     sidenav.style.display="block"
})
// loader logic
let all=document.getElementsByClassName("combo")[0];
let loader=document.getElementsByClassName("terminal-loader")[0];

// body.hidden=true
function showspinner(){

  loader.style.display="block"

 all.style.display="none"

 ghq.style.display="none"
 
}
function hidespinner(){
    ghq.style.display="block"

  loader.style.display="none"

  all.style.display="block"

  
}
showspinner();
setTimeout(hidespinner,4000);