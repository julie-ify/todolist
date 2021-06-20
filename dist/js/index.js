
// Get  Element by DOM 
const searchBtn = document.getElementById("search");
const listItems = document.getElementById("list-items");
const listItem = document.querySelectorAll(".list-item");
const addList = document.getElementById("input-add");
const form = document.getElementById('input-wrap');

// Add eventlistener to form on submission
form.addEventListener("submit", searchItem);
function searchItem(e) {
  //prevent default form submission by html
  e.preventDefault();

  //create h4 element and append text content
  let heading4 = document.createElement("h4");
  heading4.append(addList.value);

  //create button element and append text content
  let listBtn = document.createElement("button");
  listBtn.className = "btn";
  listBtn.append('x');

  //create li element and append h4 and button
  let newList = document.createElement("li");
  newList.className = "list-item";
  newList.append(heading4, listBtn);

  //append newlist to the ul
  listItems.append(newList);
}
