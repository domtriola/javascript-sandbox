function asTabs(node) {
  var tabs = document.createElement("div");
  tabs.className = "tabs";

  for (var i = 0; i < node.children.length; i++) {
    var tab = document.createElement("button");
    tab.textContent = node.children[i].getAttribute("data-tabname");

    tab.addEventListener("click", function() {
      var contentDivs = document.querySelectorAll("div.tab-content");
      contentDivs.forEach(function(div) {
        if (div.classList.length > 1)
          div.classList.remove('active');
      });
      for (var i = 0; i < tabs.children.length; i++)
        tabs.children[i].style = "";
      var query = '[data-tabname="' + this.textContent + '"]';
      var content = document.querySelector(query);
      content.classList.add("active");
      this.style = "background-color: #ccc";
    });

    tabs.appendChild(tab);
  }

  node.appendChild(tabs);
  var children = node.children;
  node.insertBefore(children[children.length - 1], children[0]);
}

asTabs(document.querySelector("#wrapper"));
