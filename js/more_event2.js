document.getElementById("more-event").addEventListener("click", function () {
  const container = document.getElementById("container");

  const input = document.getElementById("input");

  const inputText = input.value;

  const p = document.createElement("p");
  container.style.border = "2px solid red";
  p.innerText = inputText;
  p.style.backgroundColor = "blue";
  p.style.color = "white";
  p.style.border = "4px solid tomato";

  container.append(p);
  input.value = "";
});

//
document
  .getElementById("delete-input")
  .addEventListener("keyup", function (event) {
    const del = document.getElementById("hide-btn");

    const text = event.target.value;

    if (text === "delete") {
      del.removeAttribute("disabled");
    } else {
      del.setAttribute("disabled", true);
    }
  });

document.getElementById("hide-btn").addEventListener("click", function () {
  const hideInfo = document.getElementById("hide-info");
  hideInfo.style.display = "none";
});
