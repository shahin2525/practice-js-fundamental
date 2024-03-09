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

//
document.getElementById("update-btn-2").addEventListener("click", function () {
  const inputText = document.getElementById("input-2");
  const inputTextValue = inputText.value;

  const p = document.getElementById("text-2");
  p.innerText = inputTextValue;
  inputText.value = "";
});

//
document.getElementById("comment-post").addEventListener("click", function () {
  console.log("clicked");
  const commentContainer = document.getElementById("comment-container");

  const commentInput = document.getElementById("comment-input");
  const commentInputText = commentInput.value;
  commentContainer.innerHTML = `<p>${commentInputText}</p>`;
  commentInput.value = "";
});
