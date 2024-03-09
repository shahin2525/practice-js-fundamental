document.getElementById("comment-post").addEventListener("click", function () {
  console.log("clicked");
  const commentContainer = document.getElementById("comment-container");

  const commentInput = document.getElementById("comment-input");
  const commentInputText = commentInput.value;
  const p = document.createElement("p");
  p.innerText = commentInputText;
  commentContainer.appendChild(p);
  commentInput.value = "";
});
