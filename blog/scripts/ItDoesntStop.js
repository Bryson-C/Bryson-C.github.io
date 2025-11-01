function toggleNavbarOptions() {
    let article_section = document.getElementById("it-doesnt-stop-navbar")
    if (article_section.style.display === "none") {
        article_section.style.display = "grid";
    } else {
        article_section.style.display = "none";
    }
}