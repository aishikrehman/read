document.querySelectorAll("#TableOfContents a").forEach(link => {
    link.addEventListener("click", e => {
        document.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
    });
});
