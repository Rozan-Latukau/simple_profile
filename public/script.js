const Navbars = document.querySelectorAll("#navbar");
console.log(Navbars);
const About = document.getElementById("about");
console.log(About);
const Home = document.getElementById("home");
console.log(Home);
const IconNavbar = document.getElementById("icon");
console.log(IconNavbar);
const fotoProfile = document.getElementById("foto-profile");
console.log(fotoProfile);

const screenIcon = window.innerWidth

if (screenIcon > 768) {
    IconNavbar.classList.add("hidden");
} else {
    IconNavbar.classList.remove("hidden");
}


Navbars.forEach(e => {
    const screenNavbar = window.innerWidth
    if (screenNavbar < 768) {
        e.classList.add("hidden");
    } else {
        e.classList.remove("hidden");
    }
    IconNavbar.addEventListener("click", () => {
        e.classList.toggle("hidden");
    });
    const navs = e.querySelectorAll(".nav");
    console.log(navs);
    navs.forEach(nav => {
        nav.addEventListener("click", () => {
            navs.forEach(item => {
                if (item !== nav) {
                    item.classList.remove("text-red-500");
                }
            });
            nav.classList.toggle("text-red-500");

            if (nav.textContent.trim().toLowerCase() === 'about') {
                About.scrollIntoView({ behavior: 'smooth' });
            } else {
                Home.scrollIntoView({ behavior: 'smooth' });
            }
        });
        console.log(nav);
    })
});