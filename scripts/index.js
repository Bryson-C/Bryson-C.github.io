
const subHeaderTexts = [
    "If you behave, maybe you can have an intellectual article",
    "Imagine if I created anything but slop",
    "Java devs wouldn't understand, nor do I expect them to",
    "😔",
    "Local man, global hater"
]

function getRandomSubHeaderText() {
    return subHeaderTexts[Math.floor(Math.random() * subHeaderTexts.length)]
}

// This Is Defered, This Shouldn't Fail As The Document Is Always Loaded Before The Script
document.getElementById("sub-title").innerHTML = getRandomSubHeaderText()

/*
for (let elm of document.getElementsByClassName("blog-link")) {
    elm.addEventListener("mouseout", function() {
        let blog_tags = this.parentNode.getElementsByClassName("blog-tag-list")[0].children;
        for (let tag of blog_tags) {
            //tag.style.display = "none";
            tag.style.opacity = 0;
        }
    });
    elm.addEventListener("mouseover", function() {
        let blog_tags = this.parentNode.getElementsByClassName("blog-tag-list")[0].children;
        for (let tag of blog_tags) {
            //tag.style.display = "inline";
            tag.style.opacity = 1;
        }
    });
}
*/