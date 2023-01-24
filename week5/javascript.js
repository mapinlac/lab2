function displayDate() {
    document.getElementById("time").innerHTML = Date();
}

const hobbies = ["Soccer", "Computer Games", "Reading"];
let text = "";
for (let i = 0; i < hobbies.length; i++) {
  text += hobbies[i] + "<br>";
}
document.getElementById("hobbies").innerHTML = text;
document.getElementById("random").innerHTML = Math.random();
