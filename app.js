const observer = new IntersectionObserver(
    (entries, obs) => {
        entries.forEach(({ isIntersecting, target }) => {
            if (!isIntersecting) return;

            target.classList.add("mostrar");
            obs.unobserve(target);
        });
    },
    { threshold: 0.15 }
);

document
    .querySelectorAll(".animar-scroll")
    .forEach(el => observer.observe(el));

const formularioTarget = document.getElementById("contato");

document
    .querySelectorAll('a[href="#contato"]')
    .forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();

            formularioTarget.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            formularioTarget.classList.remove("destaque-form");
            void formularioTarget.offsetWidth;
            formularioTarget.classList.add("destaque-form");
        });
    });

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

function adjustBodyPadding() {
  const header = document.querySelector(".header");
  document.body.style.paddingTop = header.offsetHeight + "px";
}

window.addEventListener("load", adjustBodyPadding);
window.addEventListener("resize", adjustBodyPadding);