var terms = [];
for (var name in window)
  terms.push(name);

var field = document.querySelector("#field");
var suggestions = document.querySelector("#suggestions");

function elt(type, text) {
  var elt = document.createElement(type);
  elt.textContent = text;
  elt.addEventListener("click", function() {
    field.value = elt.textContent;
  });
  return elt;
}

field.addEventListener("input", function() {
  while (suggestions.firstChild)
      suggestions.removeChild(suggestions.firstChild);

  if (field.value) {
    terms.forEach(function(term) {
      if (term.slice(0, field.value.length) == field.value)
        suggestions.appendChild(elt("p", term));
    });
  }
});
