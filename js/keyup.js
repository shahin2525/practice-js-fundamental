document
  .getElementById("delete-input")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;
    const delButton = document.getElementById("delete");
    if (text === "delete") {
      delButton.removeAttribute("disabled");
    } else {
      delButton.setAttribute("disabled", true);
    }
  });

document.getElementById("delete").addEventListener("click", function () {
  const hideInfo = document.getElementById("hide-info");
  hideInfo.style.display = "none";
});
