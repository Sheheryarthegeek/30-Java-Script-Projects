// Get the elements
const inputElement = document.getElementById("input");
const buttonElement = document.getElementsByTagName("button");
const listcontainer = document.getElementById("list-container");

// Create the addtask function
let addtask = () => {
  if (inputElement.value === "") {
    alert("Please write something first!");
  } else {
    // Create a new list item
    let listItem = document.createElement("li");
    listItem.innerHTML = inputElement.value;

    // Append to listcontainer
    listcontainer.appendChild(listItem);
    // Save data to localStorage
    // savData();

    // Create the cross icon
    let crossIcon = document.createElement("span");
    crossIcon.innerHTML = "&times;";
    listItem.appendChild(crossIcon);
  }
  // Clear the input field
  inputElement.value = "";
  savData();
};

// Event Listener for removing the List Item
// crossIcon.addEventListener("click", () => {
//     listItem.parentNode.removeChild(listItem);
// });

// // Event Listener for completing the task
// listItem.addEventListener("click", () => {
//     listItem.classList.toggle("checked");

// });

listcontainer.addEventListener(
  "click",
  function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentNode.remove();
      savData();
    }
  },
  false
);

// Let's Save the Data to Local Storage

function savData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showData() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

showData();
