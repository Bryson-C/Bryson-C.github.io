
const subHeaderTexts = [
    "If you behave, maybe you can have an intellectual article",
    "Imagine if I created anything but slop",
    "Java devs wouldn't understand, nor do I expect them to",
    "😔",
    "Local man, global hater"
]

function getRandomSubHeaderText() {
    const text = subHeaderTexts[Math.floor(Math.random() * subHeaderTexts.length)]
    console.log(text)
    return text
}

// This Is Defered, This Shouldn't Fail As The Document Is Always Loaded Before The Script
document.getElementById("sub-title").innerHTML = getRandomSubHeaderText()
