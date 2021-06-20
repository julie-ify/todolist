// Get  Element by DOM
const search = document.getElementById("search");
const listItems = document.getElementById("list-items");
const addList = document.getElementById("input-add");
const form = document.getElementById("input-wrap");
var listItem = document.querySelectorAll("li");

// Add eventlistener to form
form.addEventListener("submit", addItem);

function addItem(e) {
  //prevent default form submission by html
  e.preventDefault();

  //create h4 element and append text content
  let heading4 = document.createElement("h4");
  heading4.append(addList.value);

  //create button element and append text content
  let listBtn = document.createElement("button");
  listBtn.className = "btn";
  listBtn.append("x");

  //create li element and append h4 and button
  let newList = document.createElement("li");
  newList.className = "list-item";
  newList.append(heading4, listBtn);

  //append newlist to the ul
  listItems.append(newList);
}

// add event to the ul
listItems.addEventListener("click", deleteItem);
function deleteItem(e) {
  if (e.target.classList.contains("btn")) {
    if (confirm("Are you sure?")) {
      let badItem = e.target.parentElement;
      listItems.removeChild(badItem);
    }
  }
}

// Search event
search.addEventListener("keyup", searchItem);

function searchItem(e) {
  var searchText = e.target.value.toLowerCase();
  Array.from(listItem).forEach((item) => {
    var itemName = item.firstElementChild.textContent;
    if(itemName.toLowerCase().indexOf(searchText) != -1){
      item.style.display = 'block';
    }else{
      item.style.display = 'none';
    }
  });
}

//Delete item function

// for (let i = 0; i < deleteBtn.length; i++) {
//   deleteBtn[i].addEventListener("click", deleteItem);
// }
// function deleteItem() {
//   if(confirm('Are you sure?')){
//     let badItem = this.parentElement;
//     listItems.removeChild(badItem);

//   }
// }

// deleteBtn.forEach((item) => {
//   item.addEventListener('click', deleteItem);
//   function deleteItem() {
//     if(this.classList.contains('btn')){
//       if(confirm('Are you sure?')){
//         let badItem = this.parentElement;
//         listItems.removeChild(badItem);

//       }
//     }
//     }
// })
