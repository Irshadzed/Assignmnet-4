let btn = document.querySelector(button);
function alertbtn() {
   alert('Hello, world!')
}
btn.addEventListener('click',alertbtn);

// bigger text area
function bigger() {
   let textArea = document.getElementById("text-area");
   textArea.style.fontSize = "24pt";
}
// on change
function styleTextArea() {
   var textArea = document.getElementById("text-area");
   var fancyShmancy = document.getElementById("fancyShmancy");
   var boringBetty = document.getElementById("boringBetty");
   if (fancyShmancy.checked) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
      alert("FancyShmancy selected");
   } else if (boringBetty.checked) {
      textArea.style.fontWeight = "normal";
      textArea.style.color = "initial";
      textArea.style.textDecoration = "none";
      alert("BoringBetty selected");
   }
}

function moo() {
   var textArea = document.getElementById("text-area");
   textArea.value = textArea.value.toUpperCase();
   var sentences = textArea.value.split(".");
   for (var i = 0; i < sentences.length; i++) {
      var words = sentences[i].split(" ");
      words[words.length-1] = words[words.length-1] + "-Moo";
      sentences[i] = words.join(" ");
   }
   textArea.value = sentences.join(".");
}

