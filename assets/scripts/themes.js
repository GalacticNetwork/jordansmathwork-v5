const themepicker = document.getElementById("themepicker");
if (localStorage.getItem("theme")) {
  document.body.setAttribute("theme", localStorage.getItem("theme"))
}

themepicker.addEventListener("change", function(e) {
  let theme = e.target.value;
  if (theme !== "select") {
    document.body.setAttribute('theme', theme)
    localStorage.setItem("theme", theme);
  }
});
