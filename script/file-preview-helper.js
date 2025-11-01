
class PreviewItem {
	title = "";
	date = "";
	linkSrc = "";
	imgSrcs = [];
	sortingTags = [];
	addImgs(imgs) {
		for (let src of imgs) this.imgSrcs.push(src);
		return this;
	}
	addTags(tags) {
		for (let t of tags) this.sortingTags.push(t);
		return this;
	}
	addTitle(title) {
		this.title = title;
		return this;
	}
	addDate(dateString) {
		this.date = dateString;
		return this;
	}
	setLink(linkSrc) {
		this.linkSrc = linkSrc;
		return this;
	}
	toHTML() {
		let html = this.linkSrc == "" ? "<div class='preview-item'>" : `<a class='preview-item' href='${this.linkSrc}'>`;
		html 	+= `<img src='${this.imgSrcs[0]}' width='128px'>`;
		html 	+= `<p class='centered-text'>${this.title}<br><br>${this.date}</p>`;
		html 	+= this.linkSrc == "" ? "</div>" : "</a>";
		return html;
	}
}


const blogItems = [
	new PreviewItem().addImgs(["https://media1.tenor.com/m/X8z6TXMYm1oAAAAC/cat-middle-finger.gif"]).addTitle("New Site Style Test Blog").addDate("Nov 1, 2025").addTags(["Test"]).setLink("blog/test.html"),	
	new PreviewItem().addImgs([""]).addTitle("I Love The New Government Programs").addDate("March 15th, 2025").setLink("blog/GovernmentPrograms.html"),
	new PreviewItem().addImgs(["blog/img/NoWordStory/fear.png"]).addTitle("A Tale Of No Words").addDate("Feburary 11th, 2025").addTags([]).setLink("blog/NoWordStory.html"),
	new PreviewItem().addImgs(["blog/img/AITypist.png"]).addTitle("AI Bros Need A Reverse Lobotomy, We Cannot Be This Stupid").addDate("November 19th, 2024").addTags(["Opinion", "Rage Pilled"]).setLink("blog/ItDoesntStop.html"),
	new PreviewItem().addImgs(["blog/img/Application.png"]).addTitle("Prompt Engineers Need To Be Drop Kicked And Will Go To Hell").addDate("August 26th, 2024").addTags(["Opinion", "Rage Pilled"]).setLink("blog/PromptEngineers.html"),
	new PreviewItem().addImgs(["blog/img/CommieBook.png"]).addTitle("Academic Honest And Research Capability Is Soooo Hot").addDate("August 13th, 2024").addTags(["Opinion", "Parody"]).setLink("blog/AcademicHonesty.html"),
	new PreviewItem().addImgs(["blog/img/ChinaLover400xx.png"]).addTitle("Riot Games Is Actually Really Good").addDate("August 7, 2024").addTags(["Factual", "Parody"]).setLink("blog/RiotGamesIsActuallyGood.html"),
	new PreviewItem().addImgs(["blog/img/BlackGultchMyBeloved.png"]).addTitle("Darksouls Has Only Gotten Worse Since Darksouls 2").addDate("August 2, 2024").addTags(["Darksouls", "Rage Pilled"]).setLink("blog/DS2-Review.html"),
	new PreviewItem().addImgs(["blog/img/AsylumSolaire.png"]).addTitle("Hell Hath No Fury Like A Darksouls Runback").addDate("July 29, 2024").addTags(["Darksouls", "Rage Pilled"]).setLink("blog/DSR-Review.html"),
	new PreviewItem().addImgs(["blog/img/RuneOfDeath.webp"]).addTitle("Shadow Of The Erdtree And Difficulty: The Complete Disassemblement And Breakdown Of My Being ").addDate("July 29, 2024").addTags(["Darksouls", "Rage Pilled"]).setLink("blog/SoTE-Review.html"),
];
const projectItems = [

];
const otherItems = [
];







const filePreview = document.getElementById("file-preview");
const fileHeaderName = document.getElementById("preview-header-name");
const fileContents = document.getElementById("preview-file-contents");

function loadMainPreview() {
	selectFileFromBrowser('Main'); 
	fileHeaderName.innerText = "Main";
	fileContents.classList = "file-preview-display-norm";

	fileContents.innerHTML = "<p>";
	fileContents.innerHTML += "Hobbyist programmer; computer science student; science and space enjoyer (clearly)";	
	fileContents.innerHTML += "<br><br><br><br>";
	fileContents.innerHTML += "<img alt='Funny Cat .Gif' src='https://media1.tenor.com/m/tAPt4Po3vD8AAAAd/cat-flashbang.gif'>"
	fileContents.innerHTML += "</p>";

}

loadMainPreview();


function loadContentsFromItemList(list) {
	fileContents.innerHTML = "";
	for (let item of list) {
		fileContents.innerHTML += item.toHTML();
	}
	
	if (list.length <= 0) {
		fileContents.innerHTML = "Hmm, its empty...";
	}
}


function loadProjectsPreview() {
	selectFileFromBrowser('Projects/'); 
	fileHeaderName.innerText = "Projects/";
	fileContents.classList = "file-preview-display-grid";

	loadContentsFromItemList(projectItems);
}
function loadBlogPreview() {
	selectFileFromBrowser('Blog/'); 
	fileHeaderName.innerText = "Blog/";
	fileContents.classList = "file-preview-display-grid";

	loadContentsFromItemList(blogItems);
}
function loadOtherPreview() {
	selectFileFromBrowser('Other/'); 
	fileHeaderName.innerText = "Other/";
	fileContents.classList = "file-preview-display-grid";

	loadContentsFromItemList(otherItems);
}










