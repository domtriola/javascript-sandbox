var text = document.querySelector("textarea");
var charCount = document.querySelector("#char-count");
var wordCount = document.querySelector("#word-count");
text.addEventListener("input", function() {
  charCount.textContent = text.value.length;
  var words = text.value.split(/\s+/).filter(function(word) {
    if (word != "") return word;
  });
  wordCount.textContent = words.length;
});
