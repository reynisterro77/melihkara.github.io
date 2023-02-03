
let header=document.querySelector("header");
let menu=document.querySelector("#menu-icon");

let navbar=document.querySelector(".navbar");

const projectBoxes = document.querySelectorAll('.projects-box');
const projetsContainer=document.querySelector(".projects-container");

window.addEventListener("scroll",()=>{
    header.classList.toggle("shadow",window.scrollY>0);
})

menu.onclick=()=>{
    navbar.classList.toggle("active");
}
window.onscroll=()=>{
    navbar.classList.remove("active");
}




projectBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const overPlay = box.querySelector('.over-play');
        overPlay.classList.add('active');
        overPlay.querySelector(".bx-x").style.display="block";
        const activeDiv=document.querySelector(".projects-container");
        let activeDivPos=activeDiv.offsetTop;//seçilen divin yükseliğini alıyor
        const closeIcon = overPlay.querySelector('.bx-x');

        closeIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            overPlay.classList.remove("active")

            console.log(overPlay.classList)
            activeDivPos=box.offsetTop;
        });

        window.scrollTo({//scrol barı kaydırma
            top:activeDivPos,
        })

    });
});

// darkmode +
let  darkmode=document.querySelector("#darkmode");
darkmode.onclick=()=>{
    if(darkmode.classList.contains("bx-moon")){
        darkmode.classList.replace("bx-moon","bx-sun");
        document.body.classList.add("active");
    }
    else {
        darkmode.classList.replace("bx-sun","bx-moon");
        document.body.classList.remove("active");
    }
}





