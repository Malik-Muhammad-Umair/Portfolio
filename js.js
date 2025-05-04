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
let pl=document.getElementsByClassName('pl')[0];
let bodyall=document.getElementsByClassName('bodyall')[0];

let p1= new Promise((resolve,reject)=>{

    resolve(56);
})
p1.then((value)=>{
    bodyall.style.display="none";
    ghq.style.display="none";
})
p1.then((value)=>{
    setTimeout(()=>{
         bodyall.style.display="block"
         pl.style.display="none";
         cent.style.display="none";
         ghq.style.display="block";
    },3500)
})
