
const subHeaderTexts = [
    "If You Behave, Maybe You Can Have An Intellectual Article",
    "Imagine If I Created Anything But Slop",
    "Java Devs Wouldn't Understand, Nor Do I Expect Them To",
    "😔",
    "😎",
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
    "Dependancy Hell Is Just Normal Hell But You're Behind A Computer",
    "Are We Stupid, Or Did Society Crumble?",
    "AI Bros Couldn't Conceive The Idea Of Rational Thought",
    "Freewill? More Like Dismiss William",
    "Mods, Launch This Guy To Orbit",
    "700+ Dependencies Node/Cargo (And Counting!!!)",
    "I Should Have Read My Textbooks Instead Of Ranting About AI!",
    "Lets Perscribe Children Drugs!!! Doctors, Cash In Those Checks!!!"
]

function random(len) {
    return Math.floor(Math.random() * len);
}

const enableEpicMusic = false;

function getRandomSubHeaderText() {
    let subHeader = subHeaderTexts[random(subHeaderTexts.length)];
    if (subHeader === "😎" && enableEpicMusic === true) {
        let xxEpicMusicSlayerXX = new Audio("music/epic.mp3");
        xxEpicMusicSlayerXX.volume = 0.5;
        xxEpicMusicSlayerXX.currentTime = 22;
        xxEpicMusicSlayerXX.play().then(()=>{

        }).catch(()=> {
            console.log("Bro didn't allow audio, your loss")
        });
    }
    return subHeader;
}

// This Is Defered, This Shouldn't Fail As The Document Is Always Loaded Before The Script
document.getElementById("sub-title-animated").innerHTML = getRandomSubHeaderText()

function addTags(element, strings, color) {
    for (let i = 0; i < strings.length; i++) {
        let childTag = document.createElement('li');
        childTag.innerHTML = strings[i];
        childTag.classList = ['blog-tag', `blog-tag-${color[i]}`];
        element.appendChild(childTag);
    }
}




const imageSources = [
    [],
    ["blogs/Img/AsylumSolaire.png","blogs/Img/BadDog.png"],
    ["blogs/Img/BlackGultchMyBeloved.png","blogs/Img/DS2ControllerIdea.png"],
    ["blogs/Img/ChinaLover400xx.png","blogs/Img/RooftopGlare.png"],
    ["blogs/Img/ReaderSpotted.png","blogs/Img/CommieBook.png"],
    ["blogs/Img/ShutMouth.jpg","blogs/Img/Application.png","blogs/Img/FakeJobExposed.png"],
    ["blogs/Img/AITypist.png","blogs/Img/ConspiracyTheorist.png","blogs/Img/FuckYouImTheMainCharacter.png"],
    [],
    []
];

function setSwapingImages(id, imageArrayIndex) {
    let elm = document.getElementById(id);
    let imageIndex = 0;
    if (imageSources[imageArrayIndex].length > 0) {
        setInterval(() => {
            elm.src = imageSources[imageArrayIndex][imageIndex];
            imageIndex++;
            if (imageIndex > imageSources[imageArrayIndex].length-1) imageIndex = 0;
        }, 3000 + ((imageArrayIndex % 2) * 500));
    }
}

setSwapingImages("blog-post-1", 0);
setSwapingImages("blog-post-2", 1);
setSwapingImages("blog-post-3", 2);
setSwapingImages("blog-post-4", 3);
setSwapingImages("blog-post-5", 4);
setSwapingImages("blog-post-6", 5);
setSwapingImages("blog-post-7", 6);
setSwapingImages("blog-post-8", 7);
setSwapingImages("blog-post-9", 8);



