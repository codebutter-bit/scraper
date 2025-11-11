function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showPopup("Copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

function showPopup(message) {
  const popup = document.getElementById("popup");
  popup.textContent = message;
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 1500);
}

// Function to display items
function displayItems() {
  const itemList = document.getElementById("item-list");
  (addonList || []).forEach((item) => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";

    const logoBox = document.createElement("div");
    logoBox.className = "logoBox";
    const logoImg = document.createElement("img");
    logoImg.src = item.logo;
    logoBox.appendChild(logoImg);
    cardContainer.appendChild(logoBox);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardContainer.appendChild(cardBody);

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = item.title;
    cardBody.appendChild(title);

    const description = document.createElement("div");
    description.className = "description";
    description.textContent = item.description;
    cardBody.appendChild(description);
    const buttonWrap = document.createElement("div");
    buttonWrap.className = "buttonWrap";
    cardBody.appendChild(buttonWrap);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button";
    button.textContent = "Copy AddOn";
    button.onclick = () => copyToClipboard(item.link);
    buttonWrap.appendChild(button);
    itemList.appendChild(cardContainer);
  });
}

// Call the displayItems function when the page loads
window.onload = displayItems;
