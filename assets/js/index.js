var defaultTable = document.getElementById("default-table");
var flipTableCaption = document.getElementById("flip-table-caption");
var flippedTable = document.getElementById("flipped-table");
var hiddenLink = document.getElementById("wow");

hiddenLink.addEventListener("click", function () {
  window.location.href = "/";
});

flipTableCaption.addEventListener("click", function () {
  flippedTable.style.display = "table";
  defaultTable.remove();
  window.scrollTo(0, document.body.scrollHeight);
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 75 && e.ctrlKey || e.keyCode === 75 && e.metaKey) {
    window.location.href = "/";
  }
});