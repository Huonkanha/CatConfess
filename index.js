const profile = document.querySelector("#profile")
const title = document.querySelector("#title")
const description = document.querySelector("#description")
const btnYes = document.querySelector("#btnYes")
const btnNo = document.querySelector("#btnNo")
const happyCat = new Audio("./images/happy-happy-happy-cat.mp3")
const sadCat = new Audio("./images/sad-meow-song.mp3")

profile.src="./images/funny-cat1.jpg"


profile.alt = "Profile picture";
profile.style.marginTop = "40px";

title.innerHTML = "Hey, do you love me!!🔪🔫";
description.innerHTML = "Give your answer, please?"
btnYes.innerHTML = "Yes";
btnNo.innerHTML = "No";

btnYes.addEventListener("click", () => {
    profile.src = "./images/cat-happy.gif";
    title.innerHTML = "Oh Woww!! love u too😘"
    description.innerHTML = "I'm so happy😁"
    sadCat.pause();
    happyCat.play();
    happyCat.loop = true;

});
btnNo.addEventListener("click", () => {
    profile.src = "./images/cat-sad.gif";
    title.innerHTML = "Why not!!🥲"
    description.innerHTML = "I'm so sad😞"
    happyCat.pause();
    sadCat.play();
    sadCat.loop = true;
   
});