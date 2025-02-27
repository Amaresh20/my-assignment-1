const theme = document.querySelector("#theme");
const content = document.querySelector(".content");
const form = document.querySelector("form");
const form_val = document.querySelector(".form-val");

let isDarkMode = false;

theme.addEventListener("click", () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    content.style.backgroundColor = "black";
    content.style.color = "white";
  } else {
    content.style.backgroundColor = "white";
    content.style.color = "black";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let message = document.querySelector("#message");

  if (!name.value || !email.value || !message.value) {
    alert("please give inputs");
    return;
  }

  // Create a wrapper div for each entry
  let entryDiv = document.createElement("div");
  entryDiv.classList.add("entry");

  let name_header = document.createElement("h2");
  name_header.classList.add("name-msg");
  name_header.innerText = name.value;

  let email_header = document.createElement("h2");
  email_header.classList.add("email-msg");
  email_header.innerText = email.value;

  let message_header = document.createElement("h2");
  message_header.classList.add("msg");
  message_header.innerText = message.value;

  // Delete button
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("deletebtn");
  deleteButton.addEventListener("click", () => entryDiv.remove());

  // Edit button
  let editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.classList.add("editbtn");
  editButton.addEventListener("click", () => {
    name.value = name_header.innerText;
    email.value = email_header.innerText;
    message.value = message_header.innerText;
    entryDiv.remove();
  });

  // Append elements to entry div
  entryDiv.appendChild(name_header);
  entryDiv.appendChild(email_header);
  entryDiv.appendChild(message_header);
  entryDiv.appendChild(deleteButton);
  entryDiv.appendChild(editButton);

  form_val.appendChild(entryDiv);

  // Clear input fields
  name.value = "";
  email.value = "";
  message.value = "";
});
