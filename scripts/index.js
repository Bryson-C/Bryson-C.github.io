
const subHeaderTexts = [
    "If You Behave, Maybe You Can Have An Intellectual Article",
    "Imagine If I Created Anything But Slop",
    "Java Devs Wouldn't Understand, Nor Do I Expect Them To",
    "😔",
    "Local Man, Global Hater",
    "Do Your Country A Favor: Report Those Commies!",
    "Trust Me Bro, You Just Have To Get Past The First 30 Episodes",
    "Society Was Caught With It's Pants Down: Now Billions Must Pay The Price 😔",
    "Added 50% More Gender Fluid (Up To Interpretation)",
    "The Giant Enemy Spider!",
    "Still Better Than Buzzfeeed",
    "The Middle East Needs To Be Put In The Timeout Corner",
    "10 Dead, Suspect: Javascript Framework Creators",
    "This Just In: Political Thing In Political Place!",
    "Nothing Can Prepare You For The \"World War II Kids\" Useless Knowledge",
    "In This House We Measure In Anything But Metric! Now Go To Your Room!",
]

function getRandomSubHeaderText() {
    return subHeaderTexts[Math.floor(Math.random() * subHeaderTexts.length)]
}

// This Is Defered, This Shouldn't Fail As The Document Is Always Loaded Before The Script
document.getElementById("sub-title").innerHTML = getRandomSubHeaderText()

function addTags(element, strings, color) {
    for (let i = 0; i < strings.length; i++) {
        let childTag = document.createElement('li');
        childTag.innerHTML = strings[i];
        childTag.classList = ['blog-tag', `blog-tag-${color[i]}`];
        element.appendChild(childTag);
    }
}
