const makePurple = document.getElementById("make-purple");
makePurple.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

function makeTomato() {
  document.body.style.backgroundColor = "tomato";
}

const handleStatus = () => {
  const statusText = document.getElementById("handle-status");
  statusText.innerText = "status text has been changed by on clicked";
};

//
document.getElementById("update").addEventListener("click", function () {
  const input = document.getElementById("input-field");
  const inputText = input.value;

  const text = document.getElementById("text");
  text.innerText = inputText;
  input.value = "";
});
