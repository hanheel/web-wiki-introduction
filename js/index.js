console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector("#submit");
  const cancelButton = document.querySelector("#cancel");
  const commentInput = document.querySelector("#comment-input");

  submitButton.addEventListener("click", () => {
    addComment();
  });

  cancelButton.addEventListener("click", () => {
    commentInput.value = "";
  });
  commentInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && !e.isComposing) {
      e.preventDefault();
      addComment();
    }
  });
});

const addComment = () => {
  const commentAuthor = document.querySelector(".comment-author");
  const commentList = document.querySelector(".comment-list");
  const commentInput = document.querySelector("#comment-input");

  const commentText = commentInput.value.trim();
  if (!commentText) return;

  const listItem = document.createElement("li");

  const commentItem = document.createElement("div");
  commentItem.classList.add("comment-item");

  const authorClone = commentAuthor.cloneNode(true);

  const commentContent = document.createElement("div");
  commentContent.classList.add("comment-content");
  commentContent.textContent = commentText;

  commentItem.appendChild(authorClone);
  commentItem.appendChild(commentContent);
  listItem.appendChild(commentItem);

  commentList.appendChild(listItem);

  commentInput.value = "";
  commentInput.focus();
};
